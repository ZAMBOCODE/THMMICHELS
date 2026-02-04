
import React from 'react';
import { BENTO_ITEMS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ SOLUTIONS ]</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase leading-tight">Transformation <br/>Kategorien</h3>
          </div>
          <p className="text-[#9CA3AF] max-w-sm text-right font-mono text-sm leading-relaxed opacity-60">
            Jedes Modul ist eine leere Leinwand. Wir definieren den Rahmen – du entscheidest über den Inhalt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {BENTO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group border border-white/10 ${item.gridClass} transition-all duration-700 hover:border-[#D97706]/50`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">{item.label}</span>
                <h4 className="text-3xl font-display font-black uppercase mb-3 tracking-tighter">{item.title}</h4>
                <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-mono">
                  {item.description}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/20 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
