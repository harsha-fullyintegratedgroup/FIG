
import React from 'react';
import { INDUSTRIES } from '../../constants';

const TradeRetail: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'trade')!;

  return (
    <div className="py-24 px-6 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Global Commerce</span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Mastering supply chain efficiency, franchise scalability, and cross-border logistics for the modern trade era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[32px] hover:bg-white/10 transition-all">
              <h2 className="text-xl font-bold mb-8 text-emerald-400 uppercase tracking-widest">{sub.name}</h2>
              <div className="flex flex-wrap gap-2">
                {sub.items.map((item) => (
                  <span key={item} className="bg-black/40 px-4 py-2 rounded-full text-xs font-medium border border-white/5 hover:border-emerald-500/50 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeRetail;
