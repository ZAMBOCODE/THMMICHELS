import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const { mode, toggleMode, colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md py-4 border-white/10 shadow-2xl' : 'bg-[#0F0F0F]/50 backdrop-blur-sm py-6 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-2xl tracking-tighter text-white">THM<span className="text-[#D97706] group-hover:text-white transition-colors">.</span>MICHELS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest flex items-center gap-1 py-4">
                Leistungen
                <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 bg-[#0F0F0F] border border-white/10 shadow-xl transition-all duration-300 transform origin-top ${isServicesOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                <div className="flex flex-col">
                  <Link to="/leistungen/event-container" className="px-6 py-4 hover:bg-white/5 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706] transition-colors border-b border-white/5">Event-Container</Link>
                  <Link to="/leistungen/office-container" className="px-6 py-4 hover:bg-white/5 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706] transition-colors border-b border-white/5">Office-Container</Link>
                  <Link to="/leistungen/nudie-container" className="px-6 py-4 hover:bg-white/5 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706] transition-colors border-b border-white/5">Nudie-Container</Link>
                  <Link to="/leistungen/anhaenger-mieten" className="px-6 py-4 hover:bg-white/5 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706] transition-colors">Anhänger mieten</Link>
                </div>
              </div>
            </div>
            <Link to="/galerie" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Galerie</Link>
            <Link to="/blog" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Blog</Link>
            <Link to="/partner" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Partner</Link>
            <Link to="/ueber-uns" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Über Uns</Link>
            <Link to="/kontakt" className="text-sm font-mono text-[#9CA3AF] hover:text-[#F8F9FA] transition-colors uppercase tracking-widest">Kontakt</Link>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleMode}
              className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all"
              aria-label={mode === 'dark' ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
            >
              {mode === 'dark' ? (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#0F0F0F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link to="/konfigurator" className="text-white px-6 py-2 rounded-none font-bold transition-all text-sm uppercase tracking-widest flex items-center gap-2 group" style={{ backgroundColor: colors.accent }}>
              KONFIGURATOR
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/5">
          <div
            className="h-full"
            style={{ width: `${scrollProgress}%`, backgroundColor: colors.accent }}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#0F0F0F] z-50 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-24 h-full overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Leistungen Accordion */}
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between items-center py-4 border-b border-white/10 text-left"
            >
              <span className="font-mono text-sm uppercase tracking-widest text-white">Leistungen</span>
              <svg className={`w-4 h-4 text-[#D97706] transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-64' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 pb-2">
                <Link to="/leistungen/event-container" className="py-3 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706]">Event-Container</Link>
                <Link to="/leistungen/office-container" className="py-3 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706]">Office-Container</Link>
                <Link to="/leistungen/nudie-container" className="py-3 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706]">Nudie-Container</Link>
                <Link to="/leistungen/anhaenger-mieten" className="py-3 text-sm font-mono text-[#9CA3AF] hover:text-[#D97706]">Anhänger mieten</Link>
              </div>
            </div>

            <Link to="/galerie" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white hover:text-[#D97706]">Galerie</Link>
            <Link to="/blog" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white hover:text-[#D97706]">Blog</Link>
            <Link to="/partner" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white hover:text-[#D97706]">Partner</Link>
            <Link to="/ueber-uns" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white hover:text-[#D97706]">Über Uns</Link>
            <Link to="/kontakt" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white hover:text-[#D97706]">Kontakt</Link>

            {/* Phone Number */}
            <a href="tel:+491702847337" className="mt-6 flex items-center gap-3 text-[#D97706]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-mono text-sm">+49 170 2847337</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className={`md:hidden fixed bottom-6 left-6 right-6 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Link
          to="/konfigurator"
          className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-4 rounded-xl font-bold shadow-2xl flex justify-center items-center gap-3 active:scale-95 transition-transform"
        >
          <span className="uppercase tracking-widest text-sm">Konfigurator</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Navigation;

