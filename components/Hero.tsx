
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with Grid and Image */}
      <div className="absolute inset-0 z-0">
        {isDark && <div className="absolute inset-0 bg-[#0F0F0F]/60 z-10"></div>}
        <img
          src="/Shipping-container-bar-landing.webp"
          alt="THM Michels Event-Container Bar mit industriellem Design und LED-Beleuchtung"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {isDark && <div className="absolute inset-0 blueprint-grid opacity-30 z-20 pointer-events-none"></div>}
      </div>

      <div className="relative z-30 w-full px-6 md:px-12 lg:px-20 text-left">
        <div className="inline-block px-4 py-1 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
          <span className="font-mono text-xs text-[#D97706] uppercase tracking-[0.3em] font-bold">Industrial Craftsmanship</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-none mb-6 md:mb-8 uppercase tracking-tighter">
          Dein Container. <br className="hidden md:block" /> Dein Konzept. <br />
          <span className="text-[#D97706] drop-shadow-[0_10px_10px_rgba(217,119,6,0.2)]">Von Hand gebaut.</span>
        </h1>

        <div className="max-w-2xl">
          <p className="text-[#9CA3AF] text-lg md:text-xl leading-relaxed mb-10">
            Wir bauen individuelle Event- und Gastronomie-Container auf Anhängern – leichter, robuster und komplett nach deinen Vorstellungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-start">
            <button
              onClick={() => (window as any).lenis?.scrollTo('#configurator', { offset: -100 })}
              className="btn-press bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 md:px-10 md:py-5 font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
              style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              PROJEKT ANFRAGEN
            </button>
            <button
              onClick={() => (window as any).lenis?.scrollTo('#showcase', { offset: -100 })}
              className="btn-press px-6 py-3 md:px-10 md:py-5 border border-white/20 hover:border-white/40 font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 bg-white/5 backdrop-blur-sm"
              style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              UNSERE ARBEITEN
            </button>
          </div>
        </div>
      </div>

      {/* Blueprint Labels */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-30 opacity-50 font-mono text-[10px]">
        <div className="mb-2">[ 51.5074° N, 0.1278° W ]</div>
        <div>TRANSFORMATION_UNIT_THM_2024</div>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block z-30 opacity-50 font-mono text-[10px] text-right">
        <div className="mb-2">SPEC: HYDR_400K_MOD</div>
        <div>LEVEL: ENTERPRISE_GRADE</div>
      </div>
    </section>
  );
};

export default Hero;
