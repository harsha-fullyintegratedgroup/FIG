
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 space-y-4 max-w-2xl">
          <h1 className="text-5xl font-bold text-black tracking-tight">Our Expertise</h1>
          <p className="text-xl text-slate-600">Comprehensive strategic services designed to address every facet of modern business evolution.</p>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-black">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description} We work closely with leadership teams to identify untapped opportunities, optimize resources, and implement robust frameworks that ensure sustainable long-term success. Our approach is deeply analytical yet pragmatically executed.
                </p>
                <ul className="space-y-3">
                  {['Market Analysis', 'Growth Roadmaps', 'Resource Optimization', 'Risk Mitigation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all shadow-md">
                  Inquire for Details
                </button>
              </div>
              <div className="flex-1">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[450px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
