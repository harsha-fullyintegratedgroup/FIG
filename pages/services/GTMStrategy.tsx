
import React from 'react';
import { Link } from 'react-router-dom';

const GTMStrategy: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-emerald-950 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600" 
            alt="GTM Strategy" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="inline-block bg-emerald-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Market Entry
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl tracking-tighter uppercase">
            Launch with <br/>
            <span className="text-emerald-400">Precision Intent.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
            Comprehensive launch frameworks designed to help businesses enter new markets and launch products with data-driven precision and definitive competitive advantage.
          </p>
          <Link to="/contact" className="bg-emerald-600 hover:bg-white hover:text-emerald-600 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl inline-block uppercase tracking-wider text-sm">
            Start Your Launch Plan
          </Link>
        </div>
      </section>

      {/* Core Specialties Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black uppercase tracking-tight mb-4">The Launchpad Framework</h2>
            <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Market Insight', desc: 'Deep dive into competitor gaps and user sentiment.' },
              { step: '02', title: 'Positioning', desc: 'Crafting a narrative that resonates with early adopters.' },
              { step: '03', title: 'Distribution', desc: 'Selecting high-impact channels for maximum reach.' },
              { step: '04', title: 'Scale & Loop', desc: 'Establishing feedback loops for rapid iteration.' }
            ].map((f) => (
              <div key={f.step} className="group space-y-6 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-slate-100 group-hover:text-emerald-100 transition-colors">{f.step}</div>
                <h3 className="text-xl font-bold text-black">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[40px] shadow-2xl" 
              alt="GTM Strategy" 
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight uppercase">Crossing the <br/>Chasm with Data.</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We've helped over 50 brands successfully transition from product-ready to market-leader. Our strategies are rooted in behavioral economics and predictive analytics, ensuring your entry is not just noticed, but felt.
            </p>
            <ul className="space-y-4">
              {[
                'Market Segmentation & Targeting',
                'Value Proposition Framework',
                'Pricing & Monetization Strategy',
                'Omnichannel Distribution Roadmap'
              ].map(item => (
                <li key={item} className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight">Ready to dominate <br/><span className="text-emerald-500">Your Market?</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Our GTM frameworks are designed for rapid deployment and measurable impact. Speak to a specialist today.</p>
          <div className="pt-6">
            <Link to="/contact" className="bg-emerald-600 hover:bg-white hover:text-emerald-600 text-white px-12 py-5 rounded-full font-bold transition-all shadow-xl inline-block uppercase tracking-widest text-sm">
              Speak to a GTM Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GTMStrategy;
