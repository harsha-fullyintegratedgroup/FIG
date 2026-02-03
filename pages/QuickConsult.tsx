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
  <div className="animate-fadeIn h-[calc(100vh-5rem)] bg-[#0f0f0f] flex flex-col text-white overflow-hidden font-sans">
    {/* Containerized Chat Header */}
    <div className="shrink-0 max-w-4xl mx-auto w-full px-6 pt-10 pb-4 text-center space-y-1">
      <h1 className="text-xl md:text-2xl font-light uppercase tracking-[0.4em] text-emerald-500">
        Strategy Lab
      </h1>
      <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">
        FIG Operational Intelligence v2.5
      </p>
    </div>

    {/* Chat Body */}
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide">
      <div className="max-w-4xl mx-auto w-full space-y-4 pb-8">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`w-fit rounded-2xl md:rounded-3xl px-5 py-3.5 shadow-2xl ${
                msg.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none max-w-[70%] md:max-w-[45%]'
                  : 'bg-zinc-900/80 backdrop-blur-sm text-zinc-100 rounded-tl-none border border-white/5 max-w-[90%] md:max-w-[75%]'
              }`}
            >
              <p className="text-sm md:text-[15px] leading-relaxed whitespace-pre-wrap break-words font-light tracking-tight">
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {/* Thinking Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900/80 rounded-2xl md:rounded-3xl px-6 py-4 border border-white/5 rounded-tl-none">
              <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {activeOptions && !isCurrentlyOther && (
          <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
            {activeOptions.opts.map(opt => (
              <button
                key={opt}
                onClick={() =>
                  handleSelection(
                    activeOptions.field,
                    opt,
                    activeOptions.next,
                    activeOptions.q
                  )
                }
                className="px-4 py-2 bg-zinc-800/50 hover:bg-emerald-600 hover:scale-105 border border-white/5 rounded-full text-[11px] md:text-xs font-medium transition-all duration-200 active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Input Bar */}
    <div className="shrink-0 w-full p-6 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-end bg-zinc-900/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] px-6 py-3 shadow-2xl transition-all duration-300 ${
            isChatEnabled
              ? 'focus-within:border-emerald-500/50 opacity-100'
              : 'opacity-40 grayscale pointer-events-none'
          }`}
        >
          <div className="mb-2 mr-4 opacity-50">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>

          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isChatEnabled
                ? 'Input strategic query...'
                : 'Please select an option from the list above'
            }
            rows={1}
            className="flex-1 bg-transparent border-none focus:ring-0 text-white text-sm md:text-base font-light placeholder-white/20 outline-none resize-none py-2 max-h-32 scrollbar-hide"
            disabled={isLoading || !isChatEnabled}
          />

          <div className="mb-1 ml-4 shrink-0">
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim() || !isChatEnabled}
              className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all shadow-xl disabled:opacity-20 active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuickConsult;
