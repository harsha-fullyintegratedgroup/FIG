
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = BLOG_POSTS.length + 1; // Brand slide + Blog slides

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Determine if the current slide has a dark background
  const isDarkSlide = currentSlide !== 0;

  return (
    <div className="overflow-hidden">
      {/* Rotating Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden group">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 0: Brand Slide (Light Background) */}
          <div className="min-w-full h-full relative flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/50 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-600/5 rounded-full blur-[120px] -z-10 max-w-4xl opacity-50"></div>
            
            <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black tracking-tighter uppercase whitespace-nowrap">
                  FULLY <span className="text-emerald-600">Integrated</span> GROUP
                </h1>
                <p className="text-lg md:text-2xl font-medium text-slate-600 tracking-tight max-w-2xl mx-auto">
                  Scale your vision with precision.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-600 transition-all shadow-xl shadow-black/10">
                  Book a Consultation
                </Link>
                <Link to="/services" className="bg-white text-black px-8 py-4 rounded-full font-bold text-base border border-slate-200 hover:border-emerald-600 transition-all flex items-center gap-2">
                  View Our Services
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Subsequent Slides: Blog Posts (Dark Background) */}
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="min-w-full h-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
                <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {post.category}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <Link 
                    to={`/contact`} 
                    className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Read Full Post
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className={`absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm ${
            isDarkSlide 
              ? 'bg-white/10 hover:bg-white/30 text-white border border-white/20' 
              : 'bg-black/5 hover:bg-black/10 text-black border border-black/10'
          }`}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className={`absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm ${
            isDarkSlide 
              ? 'bg-white/10 hover:bg-white/30 text-white border border-white/20' 
              : 'bg-black/5 hover:bg-black/10 text-black border border-black/10'
          }`}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? (isDarkSlide ? 'w-10 bg-emerald-500' : 'w-10 bg-emerald-600') 
                  : (isDarkSlide ? 'w-3 bg-white/40 hover:bg-white/60' : 'w-3 bg-black/20 hover:bg-black/40')
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Our Core Specialties</h2>
            <p className="text-slate-600 text-lg">We deliver bespoke solutions tailored to your unique challenges and growth aspirations.</p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-600/10 transition-all duration-500">
                <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/services" className="text-emerald-600 font-bold text-sm flex items-center gap-2 group/link">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Extremely narrow and compact height */}
      <section className="py-10 px-6 bg-emerald-600 relative overflow-hidden">
        <div className="max-w-md mx-auto text-center space-y-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter uppercase leading-tight">
            Ready to transform your business trajectory?
          </h2>
          <p className="text-emerald-50 text-base font-light">Let's build something extraordinary together.</p>
          <div className="flex justify-center pt-1">
            <Link to="/contact" className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-emerald-600 transition-all shadow-xl hover:scale-105">
              Get in Touch Now
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
      </section>
    </div>
  );
};

export default Home;
