
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const cards = [
  {
    href: '/leistungen/event-container',
    image: '/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg',
    alt: 'Individueller Event-Container auf Anhänger für Festivals und Veranstaltungen',
    label: 'INDIVIDUELL & ROBUST',
    title: 'Event-Container',
    desc: 'Bar, Food-Truck, Eiswagen – wir bauen deinen Container genau so, wie du ihn brauchst. Komplett individuell und sofort einsatzbereit.',
    delay: '0ms',
  },
  {
    href: '/leistungen/office-container',
    image: '/Prefabricated-Office-Container.webp',
    alt: 'Vollausgestatteter Office-Container mit Klimaanlage und Büroeinrichtung',
    label: 'WORK ANYWHERE',
    title: 'Office-Container',
    desc: 'Vollausgestattete Büro-Container mit Küche, Klima und WC – dein Arbeitsplatz, wo du ihn brauchst.',
    delay: '100ms',
  },
  {
    href: '/leistungen/nudie-container',
    image: '/pro-spacecube-nudie-lg01.webp',
    alt: 'Nudie-Container ohne Anhänger – flexibel einsetzbar als Verkaufsstand oder Lager',
    label: 'PURE FLEXIBILITY',
    title: 'Nudie-Container',
    desc: 'Container ohne Anhänger – flexibel einsetzbar und in verschiedenen Größen direkt von unserem holländischen Partner.',
    delay: '200ms',
  },
  {
    href: '/leistungen/anhaenger-mieten',
    image: '/11.jpg',
    alt: 'Stylischer Bar-Anhänger zum Mieten für Hochzeiten und Events',
    label: 'RENTAL SERVICE',
    title: 'Anhänger mieten',
    desc: 'Unser Bar-Anhänger für dein Event – voll ausgestattet, stilvoll und garantiert ein Hingucker.',
    delay: '300ms',
  },
];

const BentoGrid: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  return (
    <section id="products" className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 scroll-animate">
          <div className="max-w-xl">
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ LEISTUNGEN ]</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase leading-tight">Alles aus <br />einer Hand</h3>
          </div>
          <p className="text-[#9CA3AF] max-w-sm text-left md:text-right font-mono text-sm leading-relaxed opacity-60">
            Du brauchst einen mobilen Barwagen, einen Food-Truck oder einen Office-Container? Wir fertigen, vermieten und vertreiben – individuell und präzise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="relative overflow-hidden group border border-white/10 row-span-1 transition-[border-color,transform] duration-300 hover:border-[#D97706]/50 scroll-animate-scale cursor-pointer block"
              style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: card.delay }}
            >
              <img src={card.image} alt={card.alt} loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ transitionTimingFunction: 'var(--ease-smooth)' }} />
              {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="font-mono text-[#D97706] text-[10px] tracking-widest mb-2 block">{card.label}</span>
                <h4 className="text-2xl md:text-3xl font-display font-black uppercase mb-3 tracking-tighter">{card.title}</h4>
                <p className="text-[#9CA3AF] text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 font-mono" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}>
                  {card.desc}
                </p>
                <span className="mt-4 text-[#D97706] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 delay-75 flex items-center gap-2" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}>Mehr erfahren <span className="text-lg">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
