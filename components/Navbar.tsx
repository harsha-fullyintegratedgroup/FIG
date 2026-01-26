import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-black uppercase">
          FULLY <span className="text-emerald-600">Integrated</span> Group
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all"
          >
            Quick Consult
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;