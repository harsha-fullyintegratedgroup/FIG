
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the Fully Integrated Strategy Lab. How can I help you optimize your business growth today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(input, messages);
      setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to strategist. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
      <div className="bg-black p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">FIG</div>
          <div>
            <h3 className="text-white font-semibold">Fully Integrated Strategist</h3>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-slate-400 text-xs">AI-Powered Consultant</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-black shadow-sm border border-slate-200 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 rounded-tl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-200 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-200 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-emerald-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about market expansion, digital efficiency..."
          className="flex-1 bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 rounded-full px-6 py-3 text-sm"
          disabled={isLoading}
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-black text-white p-3 rounded-full hover:bg-emerald-700 disabled:opacity-50 transition-all flex items-center justify-center w-12 h-12 shadow-lg shadow-black/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
