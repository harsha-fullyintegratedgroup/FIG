
import React, { useState } from 'react';
import { INDUSTRIES } from '../../constants';

const Manufacturing: React.FC = () => {
  const data = INDUSTRIES.find(i => i.id === 'manufacturing')!;

  return (
    <div className="bg-white min-h-screen animate-fadeIn">
      {/* Top Heading */}
      <div className="py-20 px-6 text-center max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mb-4">
          {data.name}
        </h1>
        <div className="w-24 h-2 bg-emerald-600 mx-auto"></div>
      </div>

      {/* Sub-Industry Sections */}
      <div className="pb-24 space-y-24">
        {data.subIndustries.map((sub, subIdx) => (
          <SubIndustrySection key={sub.name} sub={sub} />
        ))}
      </div>
    </div>
  );
};

const SubIndustrySection: React.FC<{ sub: any }> = ({ sub }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = sub.items[activeIndex];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest mb-8 border-l-4 border-emerald-600 pl-6">
        {sub.name}
      </h2>
      
      <div className="flex flex-col md:flex-row h-[480px] bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Left 1/3: Scrollable List */}
        <div className="w-full md:w-1/3 overflow-y-auto border-r border-zinc-100 bg-zinc-50/50 scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-zinc-100">
          <style>{`
            .custom-scroll::-webkit-scrollbar { width: 4px; }
            .custom-scroll::-webkit-scrollbar-track { background: #f4f4f5; }
            .custom-scroll::-webkit-scrollbar-thumb { background: #059669; border-radius: 10px; }
          `}</style>
          <div className="flex flex-col custom-scroll h-full overflow-y-auto">
            {sub.items.map((item: string, idx: number) => (
              <button
                key={item}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-8 py-6 text-sm font-medium transition-all duration-300 border-b border-zinc-100/50 ${
                  activeIndex === idx 
                    ? 'bg-white text-emerald-600 shadow-inner' 
                    : 'text-zinc-500 hover:bg-zinc-100 hover:text-black'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold ${activeIndex === idx ? 'text-emerald-500' : 'text-zinc-300'}`}>
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  {item}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right 2/3: Content Panel */}
        <div className="w-full md:w-2/3 relative group overflow-hidden bg-zinc-950">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <img 
              src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&sig=${currentItem}`} 
              alt={currentItem}
              className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col justify-end p-12 md:p-16 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              {currentItem}
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Strategic optimization and operational excellence tailored specifically for {currentItem}. We focus on process re-engineering, digital transformation, and sustainable scaling to ensure global competitiveness.
            </p>
            <div className="pt-6">
              <div className="inline-flex items-center gap-4 text-emerald-400 font-bold uppercase tracking-widest text-xs border-b border-emerald-400/30 pb-2 cursor-pointer hover:text-emerald-300 hover:border-emerald-300 transition-all">
                Explore Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
    