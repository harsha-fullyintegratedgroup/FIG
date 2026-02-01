
import React from 'react';
import { INDUSTRIES } from '../../constants';

const Infrastructure: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'infrastructure')!;

  return (
    <div className="py-24 px-6 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Vital Systems</span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Engineering growth in construction, civil contractors, and the rapidly evolving renewable energy landscape.
          </p>
        </div>

        <div className="grid gap-16">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="space-y-10">
              <h2 className="text-2xl font-bold text-white uppercase flex items-center gap-4">
                <span className="w-12 h-0.5 bg-emerald-500"></span>
                {sub.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sub.items.map((item) => (
                  <div key={item} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
                    <p className="text-slate-200 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
