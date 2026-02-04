
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudy: React.FC = () => {
  // Triple the items for infinite scroll illusion
  const extendedStudies = [...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES];
  const [activeIndex, setActiveIndex] = useState(CASE_STUDIES.length); // Start in middle
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const isScrolling = useRef(false);

  const getCardWidth = useCallback(() => {
    if (!carouselRef.current) return 0;
    return carouselRef.current.offsetWidth * 0.7;
  }, []);

  const gap = 24;

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: smooth ? 'smooth' : 'auto'
      });
      setActiveIndex(index);
    }
  }, [getCardWidth]);

  // Reset to middle section when reaching edges
  const handleInfiniteScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling.current) return;

    const cardWidth = getCardWidth();
    const scrollPos = carouselRef.current.scrollLeft;
    const singleSetWidth = CASE_STUDIES.length * (cardWidth + gap);

    // If scrolled to the last set, jump to middle set
    if (scrollPos >= singleSetWidth * 2 - cardWidth) {
      isScrolling.current = true;
      const newScrollPos = scrollPos - singleSetWidth;
      carouselRef.current.scrollLeft = newScrollPos;
      setActiveIndex(prev => prev - CASE_STUDIES.length);
      setTimeout(() => { isScrolling.current = false; }, 50);
    }
    // If scrolled to the first set, jump to middle set
    else if (scrollPos <= cardWidth / 2) {
      isScrolling.current = true;
      const newScrollPos = scrollPos + singleSetWidth;
      carouselRef.current.scrollLeft = newScrollPos;
      setActiveIndex(prev => prev + CASE_STUDIES.length);
      setTimeout(() => { isScrolling.current = false; }, 50);
    }
  }, [getCardWidth]);

  const handleScroll = useCallback(() => {
    if (carouselRef.current && !isDragging && !isScrolling.current) {
      const cardWidth = getCardWidth();
      const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
      setActiveIndex(newIndex);
      handleInfiniteScroll();
    }
  }, [isDragging, getCardWidth, handleInfiniteScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollStartLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleInfiniteScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollStartLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollStartLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollStartLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    handleInfiniteScroll();
  };

  // Initialize scroll position to middle set
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      carouselRef.current.scrollLeft = CASE_STUDIES.length * (cardWidth + gap);
    }
  }, [getCardWidth]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  // Get the actual index within the original array
  const getRealIndex = (index: number) => {
    return ((index % CASE_STUDIES.length) + CASE_STUDIES.length) % CASE_STUDIES.length;
  };

  return (
    <section id="showcase" className="py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ GALERIE ]</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Unsere Projekte</h3>
            <p className="text-[#9CA3AF] text-lg max-w-xl mt-6 leading-relaxed">
              Jeder Container erzählt seine eigene Geschichte. Swipe durch unsere Arbeiten.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('prev')}
              className="w-14 h-14 border border-white/20 hover:border-[#D97706] transition-all flex items-center justify-center group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-[#D97706] transition-colors">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigate('next')}
              className="w-14 h-14 border border-white/20 hover:border-[#D97706] transition-all flex items-center justify-center group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-[#D97706] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-[15%]"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedStudies.map((study, index) => (
            <div
              key={`${study.id}-${index}`}
              className={`flex-shrink-0 w-[70%] transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
              }`}
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="relative group">
                {/* Image */}
                <div className="relative overflow-hidden border border-white/10 group-hover:border-[#D97706]/50 transition-all duration-500">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[400px] md:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>

                  {/* Specs Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-10">
        {CASE_STUDIES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(CASE_STUDIES.length + index)}
            className={`h-1 transition-all duration-300 ${
              getRealIndex(activeIndex) === index
                ? 'w-8 bg-[#D97706]'
                : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <a
          href="/galerie"
          className="inline-flex items-center gap-3 text-[#D97706] font-black uppercase tracking-widest text-sm group"
        >
          Alle Projekte ansehen
          <span className="w-8 h-[1px] bg-[#D97706] group-hover:w-16 transition-all duration-500"></span>
        </a>
      </div>
    </section>
  );
};

export default CaseStudy;
