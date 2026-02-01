import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { INDUSTRIES } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [hoveredIndustryIdx, setHoveredIndustryIdx] = useState(0);
  const [hoveredSubIdx, setHoveredSubIdx] = useState(0);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isDarkPage = location.pathname === '/quick-consult';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'MSME Business Consulting', path: '/services/msme' },
    { name: 'Go-To-Market Strategy', path: '/services/gtm' },
    { name: 'Process Consulting', path: '/services/process' },
  ];

  const handleIndustryClick = (path: string) => {
    navigate(path);
    setIsIndustriesOpen(false);
  };

  // Theme-based class helpers
  const getNavBackground = () => {
    if (isScrolled) {
      return isDarkPage 
        ? 'bg-[#1a1a1a]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3' 
        : 'glass-effect shadow-sm py-3';
    }
    return isDarkPage ? 'bg-[#1a1a1a] py-6' : 'bg-transparent py-6';
  };

  const getTextColor = (isActive: boolean) => {
    if (isDarkPage) {
      return isActive ? 'text-emerald-400' : 'text-white/80 hover:text-white';
    }
    return isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600';
  };

  const getLogoColor = () => (isDarkPage ? 'text-white' : 'text-black');
  const getIconColor = () => (isDarkPage ? 'text-white' : 'text-black');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold tracking-tight uppercase shrink-0 transition-colors ${getLogoColor()}`}>
          FULLY <span className="text-emerald-600">Integrated</span> Group
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${getTextColor(location.pathname === '/')}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button 
              onClick={() => { setIsServicesOpen(!isServicesOpen); setIsIndustriesOpen(false); }}
              className={`text-sm font-medium transition-colors focus:outline-none ${getTextColor(location.pathname.startsWith('/services'))}`}
            >
              Services
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className={`w-64 border shadow-2xl rounded-2xl overflow-hidden p-2 ${isDarkPage ? 'bg-zinc-900 border-white/10' : 'bg-white border-slate-100'}`}>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-4 py-3 text-sm rounded-xl transition-colors ${
                      location.pathname === service.path 
                        ? (isDarkPage ? 'text-emerald-400 bg-emerald-500/10 font-semibold' : 'text-emerald-600 bg-emerald-50/50 font-semibold') 
                        : (isDarkPage ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 font-medium')
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Dropdown (Mega Menu) */}
          <div className="static md:relative" ref={industriesDropdownRef}>
            <button 
              onClick={() => { setIsIndustriesOpen(!isIndustriesOpen); setIsServicesOpen(false); }}
              className={`text-sm font-medium transition-colors focus:outline-none ${getTextColor(location.pathname.startsWith('/industries'))}`}
            >
              Industries
            </button>
            
            <div className={`fixed top-[72px] left-0 w-full border-t transition-all duration-300 ${
              isIndustriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
            } ${isDarkPage ? 'bg-zinc-900 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'bg-white border-slate-100 shadow-2xl'}`}>
              <div className="max-w-7xl mx-auto flex h-[500px] overflow-hidden">
                {/* Level 1: Main Industries */}
                <div className={`w-1/4 border-r py-6 overflow-y-auto ${isDarkPage ? 'border-white/5' : 'border-slate-50'}`}>
                  {INDUSTRIES.map((ind, idx) => (
                    <button
                      key={ind.id}
                      onMouseEnter={() => { setHoveredIndustryIdx(idx); setHoveredSubIdx(0); }}
                      onClick={() => handleIndustryClick(ind.path)}
                      className={`w-full text-left px-8 py-3.5 text-sm transition-all flex items-center justify-between ${
                        hoveredIndustryIdx === idx 
                          ? (isDarkPage ? 'bg-white/5 text-emerald-400 font-bold' : 'bg-slate-50 text-emerald-600 font-bold') 
                          : (isDarkPage ? 'text-white/60 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50/50')
                      }`}
                    >
                      {ind.name}
                      <svg className={`w-4 h-4 transition-transform ${hoveredIndustryIdx === idx ? 'translate-x-1' : 'opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Level 2: Sub Industries */}
                <div className={`w-1/4 border-r py-6 overflow-y-auto ${isDarkPage ? 'bg-black/20 border-white/5' : 'bg-slate-50/30 border-slate-50'}`}>
                  {INDUSTRIES[hoveredIndustryIdx].subIndustries.map((sub, idx) => (
                    <button
                      key={sub.name}
                      onMouseEnter={() => setHoveredSubIdx(idx)}
                      onClick={() => handleIndustryClick(INDUSTRIES[hoveredIndustryIdx].path)}
                      className={`w-full text-left px-8 py-3 text-xs transition-all flex items-center justify-between uppercase tracking-wider ${
                        hoveredSubIdx === idx 
                          ? (isDarkPage ? 'text-emerald-300 font-bold' : 'text-emerald-700 font-bold') 
                          : (isDarkPage ? 'text-white/50 hover:bg-white/5 hover:text-white' : 'text-slate-500 hover:bg-slate-100/50')
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>

                {/* Level 3: Items */}
                <div className={`flex-1 py-10 px-12 overflow-y-auto ${isDarkPage ? 'bg-zinc-900' : 'bg-white'}`}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {INDUSTRIES[hoveredIndustryIdx].subIndustries[hoveredSubIdx].items.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleIndustryClick(INDUSTRIES[hoveredIndustryIdx].path)}
                        className={`text-left text-[13px] transition-all flex items-center gap-2 group ${
                          isDarkPage ? 'text-white/40 hover:text-emerald-400' : 'text-slate-500 hover:text-emerald-600'
                        }`}
                      >
                        <div className={`w-1 h-1 rounded-full transition-colors ${
                          isDarkPage ? 'bg-zinc-700 group-hover:bg-emerald-400' : 'bg-emerald-200 group-hover:bg-emerald-600'
                        }`}></div>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors ${getTextColor(location.pathname === '/contact')}`}
          >
            Contact
          </Link>

          <Link 
            to="/quick-consult" 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isDarkPage 
                ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                : 'bg-black text-white hover:bg-emerald-600'
            }`}
          >
            Quick Consult
          </Link>
        </div>

        <button className={`md:hidden p-2 ${getIconColor()}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;