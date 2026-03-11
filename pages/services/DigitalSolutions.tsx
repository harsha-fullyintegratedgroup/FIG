import React from 'react';
import { Link } from 'react-router-dom';

const DigitalSolutions: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-slate-900 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600" 
            alt="Digital Solutions" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="inline-block bg-emerald-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Digital Transformation
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl tracking-tighter uppercase">
            Accelerate Your <br/>
            <span className="text-emerald-400">Digital Evolution.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
            Comprehensive digital frameworks designed to help businesses establish a powerful online presence, engage customers effectively, and scale through intelligent digital systems.
          </p>
          <Link to="/contact" className="bg-emerald-600 hover:bg-white hover:text-emerald-600 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl inline-block uppercase tracking-wider text-sm">
            Start Your Digital Journey
          </Link>
        </div>
      </section>

      {/* Core Offerings Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black uppercase tracking-tight mb-4">Our Digital Offerings</h2>
            <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Get Your Business Online', desc: 'Establish a professional digital footprint with high-performance web solutions.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18' },
              { title: 'Become Easy to Find', desc: 'Optimize your visibility across search engines and digital directories.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
              { title: 'Connect with Customers', desc: 'Implement advanced CRM and engagement tools to build lasting relationships.', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
              { title: 'Start Generating Leads', desc: 'Deploy data-driven marketing funnels that convert traffic into opportunities.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Enable Digital Sales', desc: 'Build robust e-commerce and digital payment systems for seamless transactions.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Scale with Digital Systems', desc: 'Integrate cloud-based ERP and automation tools for enterprise-level scaling.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
            ].map((f) => (
              <div key={f.title} className="group space-y-6 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} />
                  </svg>
                </div>
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[40px] shadow-2xl" 
              alt="Digital Transformation" 
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight uppercase">Strategic <br/>Digital Integration.</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We don't just build websites; we engineer digital ecosystems. Our approach ensures that every digital touchpoint is aligned with your core business objectives and designed for long-term scalability.
            </p>
            <ul className="space-y-4">
              {[
                'Digital Readiness Assessment',
                'Customer Journey Mapping',
                'Technology Stack Optimization',
                'Data-Driven Growth Frameworks'
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
          <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight">Ready to lead in the <br/><span className="text-emerald-500">Digital Age?</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Our digital solutions are designed for rapid impact and sustainable growth. Start your transformation today.</p>
          <div className="pt-6">
            <Link to="/contact" className="bg-emerald-600 hover:bg-white hover:text-emerald-600 text-white px-12 py-5 rounded-full font-bold transition-all shadow-xl inline-block uppercase tracking-widest text-sm">
              Speak to a Digital Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSolutions;
