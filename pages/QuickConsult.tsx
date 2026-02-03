import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { INDUSTRIES } from '../constants';

type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6 | 'completed';

interface OnboardingData {
  industry: string;
  subIndustry: string;
  service: string;
  goal: string;
  email: string;
  problem: string;
}

const QuickConsult: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text:
        'Welcome to the FIG Strategy Lab. To provide the most accurate strategic insight, I have a few quick questions.\n\nTo what industry scope does your business belong?',
    },
  ]);

  const [step, setStep] = useState<OnboardingStep>(1);
  const [data, setData] = useState<OnboardingData>({
    industry: '',
    subIndustry: '',
    service: '',
    goal: '',
    email: '',
    problem: '',
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* -------------------- Scroll Handling -------------------- */
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, step, scrollToBottom]);

  /* -------------------- Helpers -------------------- */
  const addMessage = (role: 'user' | 'model', text: string) => {
    setMessages(prev => [...prev, { role, text }]);
  };

  const handleSelection = (
    field: keyof OnboardingData,
    value: string,
    nextStep: OnboardingStep,
    nextQuestion?: string
  ) => {
    addMessage('user', value);
    setData(prev => ({ ...prev, [field]: value }));

    if (value === 'Other') {
      addMessage('model', `Please specify your ${field}:`);
    } else {
      setStep(nextStep);
      if (nextQuestion) {
        setTimeout(() => addMessage('model', nextQuestion), 400);
      }
    }
  };

  /* -------------------- Gemini API Call -------------------- */
  const callGemini = async (prompt: string) => {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: prompt,
        history: messages,
      }),
    });

    if (!res.ok) throw new Error('Gemini request failed');

    const data = await res.json();
    return data.text as string;
  };

  /* -------------------- Main Send Handler -------------------- */
  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setInput('');
    addMessage('user', trimmedInput);

    /* Handle “Other” flows */
    if (step === 1 && data.industry === 'Other') {
      setData(p => ({ ...p, industry: trimmedInput }));
      setStep(2);
      addMessage('model', 'What specific industry within that scope does your business belong to?');
      return;
    }

    if (step === 2 && data.subIndustry === 'Other') {
      setData(p => ({ ...p, subIndustry: trimmedInput }));
      setStep(3);
      addMessage('model', 'What service are you looking for?');
      return;
    }

    if (step === 3 && data.service === 'Other') {
      setData(p => ({ ...p, service: trimmedInput }));
      setStep(4);
      addMessage('model', 'What is your primary goal to achieve?');
      return;
    }

    if (step === 4 && data.goal === 'Other') {
      setData(p => ({ ...p, goal: trimmedInput }));
      setStep(5);
      addMessage('model', 'Please provide your email address for our records:');
      return;
    }

    if (step === 5) {
      setData(p => ({ ...p, email: trimmedInput }));
      setStep(6);
      addMessage('model', 'Please describe your business problem in detail.');
      return;
    }

    /* Final onboarding step → Gemini */
    if (step === 6) {
      setData(p => ({ ...p, problem: trimmedInput }));
      setIsLoading(true);

      try {
        const fullContext = `
The user has completed onboarding:
- Industry Scope: ${data.industry}
- Industry: ${data.subIndustry}
- Service: ${data.service}
- Goal: ${data.goal}
- Email: ${data.email}

PROBLEM TO SOLVE:
"${trimmedInput}"

INSTRUCTIONS:
- Strategic Diagnostic
- Implementation Cost Range
- Expected ROI & Strategic Milestones
`;

        const response = await callGemini(fullContext);
        addMessage('model', response);
        setStep('completed');
      } catch {
        addMessage('model', 'Strategic engine error. Please try again.');
      } finally {
        setIsLoading(false);
      }
      return;
    }

    /* Normal chat after completion */
    if (step === 'completed') {
      setIsLoading(true);
      try {
        const response = await callGemini(trimmedInput);
        addMessage('model', response);
      } catch {
        addMessage('model', 'Unable to process that request right now.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  /* -------------------- Options Resolver -------------------- */
  const getOptionsForStep = () => {
    switch (step) {
      case 1:
        return {
          field: 'industry' as keyof OnboardingData,
          opts: [...INDUSTRIES.map(i => i.name), 'Other'],
          next: 2 as OnboardingStep,
          q: 'What specific industry does your business belong to?',
        };
      case 2:
        const industry = INDUSTRIES.find(i => i.name === data.industry);
        return {
          field: 'subIndustry' as keyof OnboardingData,
          opts: industry ? [...industry.subIndustries.map(s => s.name), 'Other'] : ['Other'],
          next: 3 as OnboardingStep,
          q: 'What service are you looking for?',
        };
      case 3:
        return {
          field: 'service' as keyof OnboardingData,
          opts: ['MSME Business Consulting', 'Go to market strategy', 'Process consulting', 'Other'],
          next: 4 as OnboardingStep,
          q: 'What is your primary goal to achieve?',
        };
      case 4:
        return {
          field: 'goal' as keyof OnboardingData,
          opts: ['Growth', 'Cost Optimisation', 'Compliance', 'Fundraising', 'Other'],
          next: 5 as OnboardingStep,
          q: 'Please provide your email id:',
        };
      default:
        return null;
    }
  };

  const activeOptions = getOptionsForStep();
  const isCurrentlyOther = activeOptions && data[activeOptions.field] === 'Other';
  const isChatEnabled = step === 5 || step === 6 || step === 'completed' || isCurrentlyOther;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* -------------------- UI -------------------- */
  return (
    <div className="h-[calc(100vh-5rem)] bg-[#0f0f0f] flex flex-col text-white overflow-hidden">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`px-5 py-3 rounded-2xl max-w-[80%] whitespace-pre-wrap ${
                  m.role === 'user' ? 'bg-emerald-600' : 'bg-zinc-900'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && <p className="text-emerald-500">Thinking…</p>}

          {activeOptions && !isCurrentlyOther && (
            <div className="flex flex-wrap gap-2">
              {activeOptions.opts.map(opt => (
                <button
                  key={opt}
                  onClick={() =>
                    handleSelection(activeOptions.field, opt, activeOptions.next, activeOptions.q)
                  }
                  className="px-4 py-2 bg-zinc-800 rounded-full text-xs hover:bg-emerald-600"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 bg-black">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={!isChatEnabled || isLoading}
          placeholder="Enter your response…"
          className="w-full bg-zinc-900 rounded-xl p-4 resize-none outline-none"
        />
      </div>
    </div>
  );
};

export default QuickConsult;
