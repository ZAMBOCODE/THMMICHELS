
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Grid and Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0F0F0F]/60 z-10"></div>
        <img
          src="/Shipping-container-bar-landing.webp"
          alt="Container Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 blueprint-grid opacity-30 z-20 pointer-events-none"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="inline-block px-4 py-1 border border-white/20 bg-white/5 backdrop-blur-sm mb-6 scroll-reveal" id="hero-tag">
          <span className="font-mono text-xs text-[#D97706] uppercase tracking-[0.3em] font-bold">Industrial Craftsmanship</span>
        </div>

        <h1 className="font-display font-black text-5xl md:text-8xl lg:text-9xl leading-none mb-8 uppercase tracking-tighter scroll-reveal" style={{ transitionDelay: '100ms' }}>
          Dein Container. <br className="hidden md:block" /> Dein Konzept. <br />
          <span className="text-[#D97706] drop-shadow-[0_10px_10px_rgba(217,119,6,0.2)]">Von Hand gebaut.</span>
        </h1>

        <div className="max-w-2xl scroll-reveal" style={{ transitionDelay: '200ms' }}>
          <p className="text-[#9CA3AF] text-lg md:text-xl leading-relaxed mb-10">
            Wir bauen individuelle Event- und Gastronomie-Container auf Anhängern – leichter, robuster und komplett nach deinen Vorstellungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('project-planner')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
            >
              PROJEKT ANFRAGEN
            </button>
            <button
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border border-white/20 hover:border-white/40 font-black text-sm uppercase tracking-widest transition-all bg-white/5 backdrop-blur-sm"
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
