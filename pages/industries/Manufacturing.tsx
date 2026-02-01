
import React from 'react';
import { INDUSTRIES } from '../../constants';

const Manufacturing: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'manufacturing')!;

  return (
    <div className="py-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl space-y-6">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Industrial Sector</span>
          <h1 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">{data.name}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            We help manufacturing units transition from traditional operations to data-driven, globally competitive processing powerhouses.
          </p>
        </div>

        <div className="grid gap-12">
          {data.subIndustries.map((sub) => (
            <div key={sub.name} className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold mb-8 text-black uppercase tracking-tight flex items-center gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg shrink-0"></div>
                {sub.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sub.items.map((item) => (
                  <div key={item} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                    <p className="text-slate-800 font-semibold text-sm group-hover:text-emerald-900">{item}</p>
                    <div className="h-0.5 w-0 bg-emerald-600 group-hover:w-full transition-all duration-300 mt-2"></div>
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

export default Manufacturing;
