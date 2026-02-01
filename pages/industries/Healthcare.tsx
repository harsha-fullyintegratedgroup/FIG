
import React from 'react';
import { INDUSTRIES } from '../../constants';

const Healthcare: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'healthcare')!;

  return (
    <div className="py-24 px-6 bg-emerald-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Medical Sector</span>
          <h1 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-emerald-900/70 leading-relaxed font-light">
            Strategic excellence for diagnostics, clinical chains, and patient-first healthcare operations.
          </p>
        </div>

        <div className="grid gap-12">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="space-y-12">
              <h2 className="text-3xl font-extrabold text-emerald-900 border-l-4 border-emerald-600 pl-6">{sub.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sub.items.map((item) => (
                  <div key={item} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all border border-emerald-100">
                    <p className="text-emerald-950 font-bold leading-tight">{item}</p>
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

export default Healthcare;
