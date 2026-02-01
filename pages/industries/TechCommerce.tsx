
import React from 'react';
import { INDUSTRIES } from '../../constants';

const TechCommerce: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'tech')!;

  return (
    <div className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Digital Sector</span>
          <h1 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Empowering SaaS founders and D2C brands with scalable architectures, market-entry strategy, and digital-first growth frameworks.
          </p>
        </div>

        <div className="grid gap-16">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-extrabold text-black uppercase">{sub.name}</h2>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sub.items.map((item) => (
                  <div key={item} className="px-6 py-5 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all">
                    <p className="text-slate-600 text-[13px] font-medium leading-tight">{item}</p>
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

export default TechCommerce;
