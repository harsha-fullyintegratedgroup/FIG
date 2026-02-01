
import React from 'react';
import { INDUSTRIES } from '../../constants';

const Hospitality: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'hospitality')!;

  return (
    <div className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Experience Economy</span>
          <h1 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Optimizing the guest journey, event operational precision, and multi-channel marketing agency growth.
          </p>
        </div>

        <div className="space-y-24">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="space-y-12">
              <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter">{sub.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                {sub.items.map((item) => (
                  <div key={item} className="group border-b border-slate-100 py-6 hover:border-emerald-600 transition-all cursor-default">
                    <p className="text-slate-500 group-hover:text-black font-medium transition-colors">{item}</p>
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

export default Hospitality;
