
import React from 'react';
import ChatInterface from '../components/ChatInterface';

const AIChat: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-black tracking-tight">AI Strategy Lab</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the future of consulting. Our Digital Strategist uses advanced generative AI to provide instant business insights based on global best practices.
          </p>
        </div>
        
        <ChatInterface />
        
        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <h3 className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to use this lab:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-emerald-700 font-bold">01. Prompt</div>
              <p className="text-sm text-emerald-800/80 leading-relaxed">Ask specific questions about market trends, strategy, or process improvement.</p>
            </div>
            <div className="space-y-2">
              <div className="text-emerald-700 font-bold">02. Refine</div>
              <p className="text-sm text-emerald-800/80 leading-relaxed">Provide context about your industry and business size for more relevant advice.</p>
            </div>
            <div className="space-y-2">
              <div className="text-emerald-700 font-bold">03. Implement</div>
              <p className="text-sm text-emerald-800/80 leading-relaxed">Take the high-level insights and schedule a deep-dive session with our human partners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
