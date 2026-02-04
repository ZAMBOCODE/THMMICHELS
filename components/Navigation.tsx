
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPlanner = () => {
    document.getElementById('project-planner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0F0F0F]/90 backdrop-blur-md py-4 border-white/10 shadow-2xl' : 'bg-transparent py-8 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-2xl tracking-tighter">THM<span className="text-[#D97706]">.</span>MICHELS</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#products" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Leistungen</a>
            <a href="#process" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Transformation</a>
            <a href="#cases" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Showcase</a>
            <button 
              onClick={scrollToPlanner}
              className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2 rounded-none font-bold transition-all text-sm uppercase tracking-widest flex items-center gap-2 group"
            >
              PROJEKT KONFIGURIEREN
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <button 
          onClick={scrollToPlanner}
          className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-4 rounded-xl font-bold shadow-2xl flex justify-center items-center gap-3 active:scale-95 transition-transform"
        >
          <span className="uppercase tracking-widest text-sm">Jetzt anfragen</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navigation;
