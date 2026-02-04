
import React from 'react';
import { BENTO_ITEMS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ LEISTUNGEN ]</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black uppercase leading-tight">Alles aus <br />einer Hand</h3>
          </div>
          <p className="text-[#9CA3AF] max-w-sm text-right font-mono text-sm leading-relaxed opacity-60">
            Du brauchst einen mobilen Barwagen, einen Food-Truck oder einen Office-Container? Wir fertigen, vermieten und vertreiben – individuell und präzise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-[300px]">
          {/* Card 1: Event-Container */}
          <div className="relative overflow-hidden group border border-white/10 row-span-1 transition-all duration-700 hover:border-[#D97706]/50">
            <img src="/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg" alt="Event Container" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">INDIVIDUELL & ROBUST</span>
              <h4 className="text-3xl font-display font-black uppercase mb-3 tracking-tighter">Event-Container</h4>
              <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-mono">
                Bar, Food-Truck, Eiswagen – wir bauen deinen Container genau so, wie du ihn brauchst. Komplett individuell und sofort einsatzbereit.
              </p>
              <a href="/leistungen/event-container/" className="mt-4 text-[#D97706] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-2">Mehr erfahren <span className="text-lg">→</span></a>
            </div>
          </div>

          {/* Card 2: Office-Container */}
          <div className="relative overflow-hidden group border border-white/10 row-span-1 transition-all duration-700 hover:border-[#D97706]/50">
            <img src="/Prefabricated-Office-Container.webp" alt="Office Container" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">WORK ANYWHERE</span>
              <h4 className="text-3xl font-display font-black uppercase mb-3 tracking-tighter">Office-Container</h4>
              <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-mono">
                Vollausgestattete Büro-Container mit Küche, Klima und WC – dein Arbeitsplatz, wo du ihn brauchst.
              </p>
              <a href="/leistungen/office-container/" className="mt-4 text-[#D97706] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-2">Mehr erfahren <span className="text-lg">→</span></a>
            </div>
          </div>

          {/* Card 3: Nudie-Container */}
          <div className="relative overflow-hidden group border border-white/10 row-span-1 transition-all duration-700 hover:border-[#D97706]/50">
            <img src="/pro-spacecube-nudie-lg01.webp" alt="Nudie Container" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">PURE FLEXIBILITY</span>
              <h4 className="text-3xl font-display font-black uppercase mb-3 tracking-tighter">Nudie-Container</h4>
              <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-mono">
                Container ohne Anhänger – flexibel einsetzbar und in verschiedenen Größen direkt von unserem holländischen Partner.
              </p>
              <a href="/leistungen/nudie-container/" className="mt-4 text-[#D97706] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-2">Mehr erfahren <span className="text-lg">→</span></a>
            </div>
          </div>

          {/* Card 4: Anhänger mieten */}
          <div className="relative overflow-hidden group border border-white/10 row-span-1 transition-all duration-700 hover:border-[#D97706]/50">
            <img src="/11.jpg" alt="Anhänger mieten" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">RENTAL SERVICE</span>
              <h4 className="text-3xl font-display font-black uppercase mb-3 tracking-tighter">Anhänger mieten</h4>
              <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-mono">
                Unser Bar-Anhänger für dein Event – voll ausgestattet, stilvoll und garantiert ein Hingucker.
              </p>
              <a href="/leistungen/anhaenger-mieten/" className="mt-4 text-[#D97706] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-2">Mehr erfahren <span className="text-lg">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
