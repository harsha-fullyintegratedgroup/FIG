
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = BLOG_POSTS.length + 1;

  // Typewriter Animation Logic
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "How do I scale my manufacturing unit?",
    "Need a Go-To-Market strategy for SaaS?",
    "How to optimize my supply chain?",
    "Looking for capital advisory for my MSME?",
    "How to improve retail franchise efficiency?",
    "Need digital transformation guidance?"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

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

  const isDarkSlide = currentSlide !== 0;

  const servicePaths: Record<string, string> = {
    'msme-funding': '/services/msme',
    'gtm-strategy': '/services/gtm',
    'process-consultation': '/services/process'
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden group">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="min-w-full h-full relative flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/50 -z-10"></div>
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
                <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-600 transition-all">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="min-w-full h-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-[0.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
                <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">{post.category}</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{post.title}</h2>
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className={`absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 ${isDarkSlide ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className={`absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 ${isDarkSlide ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* Quick Consult Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-normal text-white/80 uppercase tracking-[0.3em]">
              Quick Consult
            </h2>
          </div>

          <div 
            className="relative group cursor-pointer" 
            onClick={() => navigate('/quick-consult')}
          >
            {/* Glass style search bar - Completely Rounded */}
            <div className="flex items-center w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-5 shadow-2xl transition-all group-hover:border-emerald-500/30 group-hover:bg-white/10">
              {/* White Magnifying Glass Icon */}
              <svg className="w-5 h-5 text-white shrink-0 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <div className="flex-1 relative flex items-center h-full">
                <span className="text-base md:text-lg text-white font-light tracking-tight">
                  {displayText}
                  <span className="inline-block w-[1.5px] h-5 bg-emerald-500 ml-1 animate-pulse align-middle"></span>
                </span>
                <div className="absolute inset-0 z-10"></div>
              </div>

              {/* Round Green Button with White Right Arrow */}
              <button className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all ml-4 shrink-0 shadow-lg group-hover:scale-105 active:scale-95 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
            <p className="text-slate-500 text-[10px] text-center mt-6 tracking-[0.3em] uppercase opacity-60">
              Strategic Insights Powered by FIG lab
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Our Core Specialties</h2>
            <p className="text-slate-600 text-lg">Bespoke solutions designed for modern enterprise scaling and innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col p-10 rounded-3xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                <Link to={servicePaths[service.id] || '/'} className="group inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  <span>View Details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
