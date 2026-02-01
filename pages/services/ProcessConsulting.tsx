
import React from 'react';
import { Link } from 'react-router-dom';

const ProcessConsulting: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-slate-50 text-black px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 -skew-x-12 transform origin-top translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-16">
          <div className="space-y-8">
            <span className="inline-block bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Operational Efficiency
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
              Engineering <br/>
              <span className="text-emerald-600">Frictionless</span> Systems.
            </h1>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed font-light">
              Expert analysis and re-engineering of internal workflows to eliminate bottlenecks, reduce waste, and maximize the productivity of your most valuable assets.
            </p>
            <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:bg-emerald-600 inline-block">
              Schedule Process Audit
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                className="relative z-10 rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
                alt="Process optimization" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Workflow Re-engineering', desc: 'Breaking down existing processes to rebuild them for the digital age.' },
              { title: 'Automation Strategy', desc: 'Identifying repetitive tasks that can be delegated to AI and machine systems.' },
              { title: 'Waste Reduction', desc: 'Utilizing Lean and Six Sigma principles to remove operational bloat.' },
              { title: 'Change Management', desc: 'Guiding your workforce through the cultural shifts of new operational models.' },
              { title: 'Supply Chain Sync', desc: 'Optimizing the flow of goods and information across global networks.' },
              { title: 'Performance Metrics', desc: 'Designing custom dashboards to track the health of every internal process.' }
            ].map((item) => (
              <div key={item.title} className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all">
                <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Stop letting inefficiency eat your margins.</h2>
            <p className="text-emerald-100 text-lg opacity-80">Our typical engagement results in a 15-25% increase in operational throughput within the first 6 months.</p>
            <div className="pt-6">
              <Link to="/contact" className="bg-white text-emerald-600 px-10 py-5 rounded-full font-black text-lg uppercase tracking-wider hover:scale-105 transition-transform shadow-2xl">
                Get Your Free Audit
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default ProcessConsulting;
