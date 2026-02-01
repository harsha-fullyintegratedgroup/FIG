
import React from 'react';
import { Link } from 'react-router-dom';

const GTMStrategy: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-emerald-950 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600" 
            alt="GTM Strategy" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="inline-block border border-emerald-400 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Market Entry
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
            Launch with <br/>
            <span className="text-emerald-400">Precision Intent.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
            Comprehensive launch frameworks designed to help businesses enter new markets and launch products with data-driven precision and definitive competitive advantage.
          </p>
          <Link to="/contact" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:bg-emerald-400 hover:text-white inline-block">
            Start Your Launch Plan
          </Link>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4 uppercase">The Launchpad Framework</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Market Insight', desc: 'Deep dive into competitor gaps and user sentiment.' },
            { step: '02', title: 'Positioning', desc: 'Crafting a narrative that resonates with early adopters.' },
            { step: '03', title: 'Distribution', desc: 'Selecting high-impact channels for maximum reach.' },
            { step: '04', title: 'Scale & Loop', desc: 'Establishing feedback loops for rapid iteration.' }
          ].map((item) => (
            <div key={item.step} className="p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl font-black text-slate-200 group-hover:text-emerald-100 transition-colors mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">We've helped over 50 brands successfully cross the chasm from product-ready to market-leader.</h2>
          <p className="text-slate-400 text-lg">Our strategies are rooted in behavioral economics and predictive analytics, ensuring your entry is not just noticed, but felt.</p>
          <div className="pt-4">
            <Link to="/contact" className="text-emerald-400 font-bold flex items-center justify-center gap-2 group">
              Speak to a GTM Specialist
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GTMStrategy;
