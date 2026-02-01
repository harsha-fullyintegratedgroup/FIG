
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MSMEConsulting from './pages/services/MSMEConsulting';
import GTMStrategy from './pages/services/GTMStrategy';
import ProcessConsulting from './pages/services/ProcessConsulting';
import Contact from './pages/Contact';
import QuickConsult from './pages/QuickConsult';

// Industry Pages
import Manufacturing from './pages/industries/Manufacturing';
import TechCommerce from './pages/industries/TechCommerce';
import TradeRetail from './pages/industries/TradeRetail';
import Healthcare from './pages/industries/Healthcare';
import Infrastructure from './pages/industries/Infrastructure';
import Hospitality from './pages/industries/Hospitality';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services */}
            <Route path="/services/msme" element={<MSMEConsulting />} />
            <Route path="/services/gtm" element={<GTMStrategy />} />
            <Route path="/services/process" element={<ProcessConsulting />} />
            
            {/* Industries */}
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/tech" element={<TechCommerce />} />
            <Route path="/industries/trade" element={<TradeRetail />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/infrastructure" element={<Infrastructure />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/quick-consult" element={<QuickConsult />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;