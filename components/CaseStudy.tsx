
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { useTheme } from '../context/ThemeContext';

const CaseStudy: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const scrollPos = card.offsetLeft - (carousel.offsetWidth - card.offsetWidth) / 2;
      carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
    setActiveIndex(index);
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;

    // Loop around
    if (newIndex < 0) newIndex = CASE_STUDIES.length - 1;
    if (newIndex >= CASE_STUDIES.length) newIndex = 0;

    scrollToIndex(newIndex);
  };

  // Center first card on mount
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Center the first card
    const firstCard = carousel.children[0] as HTMLElement;
    if (firstCard) {
      const scrollPos = firstCard.offsetLeft - (carousel.offsetWidth - firstCard.offsetWidth) / 2;
      carousel.scrollLeft = scrollPos;
    }
  }, []);

  // Update active index on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cards = Array.from(carousel.children) as HTMLElement[];
      const center = carousel.scrollLeft + carousel.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="showcase" className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
        <div>
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ GALERIE ]</h2>
          <h3 className="text-fluid-section font-display font-black uppercase tracking-tight">Unsere Projekte</h3>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl mt-4 md:mt-6 leading-relaxed">
            Jeder Container erzählt seine eigene Geschichte. Swipe durch unsere Arbeiten.
          </p>
        </div>
      </div>

      {/* Carousel Container with side nav buttons */}
      <div className="relative">
        {/* Left Fade */}
        {isDark && <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>}

        {/* Right Fade */}
        {isDark && <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>}

        {/* PREV Button - left side */}
        <button
          onClick={() => navigate('prev')}
          aria-label="Vorheriges Projekt"
          className="btn-press group absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 overflow-hidden"
        >
          <div className="absolute inset-0 border border-white/20 group-hover:border-[#D97706] transition-[border-color] duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}></div>
          <div className="absolute inset-0 bg-[#D97706] translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="relative z-10 group-hover:text-[#0F0F0F] transition-colors duration-300">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="absolute bottom-1 left-1 md:bottom-2 md:left-2 font-mono text-[8px] text-white/30 group-hover:text-[#0F0F0F]/50 transition-colors duration-300 hidden md:block">PREV</span>
        </button>

        {/* NEXT Button - right side */}
        <button
          onClick={() => navigate('next')}
          aria-label="Nächstes Projekt"
          className="btn-press group absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 overflow-hidden"
        >
          <div className="absolute inset-0 border border-white/20 group-hover:border-[#D97706] transition-[border-color] duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}></div>
          <div className="absolute inset-0 bg-[#D97706] translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="relative z-10 group-hover:text-[#0F0F0F] transition-colors duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="absolute bottom-1 right-1 md:bottom-2 md:right-2 font-mono text-[8px] text-white/30 group-hover:text-[#0F0F0F]/50 transition-colors duration-300 hidden md:block">NEXT</span>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-[5%] md:px-[10%] lg:px-[15%] pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CASE_STUDIES.map((study, index) => (
            <button
              type="button"
              key={study.id}
              onClick={() => scrollToIndex(index)}
              aria-label={`Projekt ${study.title} anzeigen`}
              className={`flex-shrink-0 w-[85%] md:w-[60%] cursor-pointer transition-[opacity,transform] duration-400 snap-center text-left ${
                index === activeIndex ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}
            >
              <div className="relative group">
                {/* Image */}
                <div className="relative overflow-hidden border border-white/10 group-hover:border-[#D97706]/50 transition-[border-color] duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}>
                  <img
                    src={study.image}
                    alt={`${study.title} – Container-Projekt von THM Michels`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className={`w-full h-[400px] md:h-[500px] object-cover transition-[filter,transform] duration-400 ${
                      index === activeIndex ? 'grayscale-0' : 'grayscale'
                    }`}
                    draggable={false}
                  />
                  {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>}

                  {/* Specs Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 hidden md:flex flex-wrap gap-2">
                    {study.specs.map((spec, i) => (
                      <span key={i} className="bg-[#0F0F0F]/80 backdrop-blur-sm border border-white/10 px-3 py-1 font-mono text-[10px] text-[#9CA3AF]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h4 className="text-2xl md:text-3xl font-display font-black uppercase mb-4 tracking-tighter">
                    {study.title}
                  </h4>
                  <p className="text-[#9CA3AF] leading-relaxed text-sm md:text-base max-w-2xl">
                    {study.solution}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link
          to="/galerie"
          className="inline-flex items-center gap-3 text-[#D97706] hover:text-white font-black uppercase tracking-widest text-sm group focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:outline-none rounded py-3 px-1"
        >
          Alle Projekte ansehen
          <span className="w-8 h-[1px] bg-[#D97706] group-hover:w-16 transition-[width] duration-300" style={{ transitionTimingFunction: 'var(--ease-smooth)' }}></span>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudy;
