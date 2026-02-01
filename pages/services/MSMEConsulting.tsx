
import React from 'react';
import { Link } from 'react-router-dom';

const MSMEConsulting: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-slate-900 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600" 
            alt="MSME Consulting" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="inline-block bg-emerald-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Scale-Up Advisory
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
            Empowering MSMEs to <br/>
            <span className="text-emerald-400 text-gradient">Scale Responsibly.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
            We provide specialized strategic guidance for micro, small, and medium enterprises to achieve operational excellence, secure growth capital, and navigate complex regulatory frameworks.
          </p>
          <Link to="/contact" className="bg-emerald-600 hover:bg-white hover:text-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl inline-block">
            Request Scale Audit
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Capital Advisory', 
                desc: 'Navigating debt, equity, and grant structures to fuel your next stage of growth.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2'
              },
              { 
                title: 'Structural Planning', 
                desc: 'Designing organizational architectures that remain efficient as headcounts double.',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              },
              { 
                title: 'Compliance & Governance', 
                desc: 'Ensuring your business meets global standards while maintaining agility.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              }
            ].map((f) => (
              <div key={f.title} className="space-y-6">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl" alt="Collaboration" />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-black tracking-tight">Strategy for the Modern Enterprise.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fully Integrated Group specializes in bridging the gap between small business agility and corporate-grade strategic rigor. Our MSME wing is dedicated to removing the "glass ceiling" that prevents local winners from becoming global leaders.
            </p>
            <ul className="space-y-4">
              {[
                'Revenue model optimization',
                'Risk assessment and mitigation',
                'Digital-first operational transition',
                'Founder-to-CEO evolution workshops'
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
    </div>
  );
};

export default MSMEConsulting;
