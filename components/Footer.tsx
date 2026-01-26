import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-xl font-bold mb-6 uppercase">Fully Integrated Group</h2>
          <p className="text-sm leading-relaxed">
            Empowering global enterprises through strategic innovation, operational excellence, and tailored consulting solutions.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">MSME Business Consulting</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Go-To-Market Strategy</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Process Consultation</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>info@fullyintegratedgroup.com</li>
            <li>+91 703 3438 666</li>
            <li>+91 877 8731 073</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs">© 2024 Fully Integrated Group LLC. All rights reserved.</p>
        <div className="flex space-x-6 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;