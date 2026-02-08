
import React, { useState, useEffect } from 'react';

interface ConfiguratorProps {
  showHeader?: boolean;
}

const Configurator: React.FC<ConfiguratorProps> = ({ showHeader = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 1024;
      const landscape = window.innerWidth > window.innerHeight;
      setIsLandscape(isMobile && landscape);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', () => setTimeout(checkOrientation, 100));

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isFullscreen]);

  useEffect(() => {
    // Show loading for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="configurator" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ 3D KONFIGURATOR ]</h2>
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-6">
              Gestalte <span className="relative inline-block">deinen<span className="absolute left-0 bottom-0 w-full h-1 bg-[#D97706] origin-left animate-[underline_1s_ease-out_forwards]"></span></span><br />Container
            </h3>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
              Nutze unseren interaktiven 3D-Konfigurator, um deinen Traumcontainer zu gestalten. Wähle Größe, Farbe und Ausstattung.
            </p>
          </div>
        )}

        <div className="border-2 border-[#D97706] overflow-hidden relative" style={{ height: '800px' }}>
          {/* Loading Animation */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#0F0F0F] z-10 flex flex-col items-center justify-center">
              {/* Container Animation */}
              <div className="relative w-32 h-24 mb-8">
                {/* Container Body */}
                <div className="absolute inset-0 border-2 border-[#D97706] bg-[#D97706]/10 animate-pulse">
                  {/* Container Lines */}
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-[#D97706]/30"></div>
                  <div className="absolute top-0 left-2/4 w-0.5 h-full bg-[#D97706]/30"></div>
                  <div className="absolute top-0 left-3/4 w-0.5 h-full bg-[#D97706]/30"></div>
                  {/* Container Door */}
                  <div className="absolute right-2 top-2 bottom-2 w-8 border border-[#D97706]/50"></div>
                </div>
                {/* Loading Bar underneath */}
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-[#D97706] transition-all duration-[5000ms] ease-linear"
                    style={{ width: isLoading ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>

              <p className="font-mono text-[#D97706] text-sm uppercase tracking-widest mb-2">
                Konfigurator lädt
              </p>
              <p className="font-mono text-[#9CA3AF] text-xs">
                3D-Modell wird vorbereitet...
              </p>

              {/* Animated Dots */}
              <div className="flex gap-1 mt-4">
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}

          {/* Landscape "Fortfahren" overlay */}
          {isLandscape && !isFullscreen && !isLoading && (
            <div className="absolute inset-0 bg-[#0F0F0F]/90 z-20 flex flex-col items-center justify-center">
              <svg className="w-10 h-10 text-[#D97706] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              <p className="font-mono text-[#9CA3AF] text-xs mb-4 uppercase tracking-widest">Vollbild für beste Erfahrung</p>
              <button
                onClick={() => setIsFullscreen(true)}
                className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-3 font-black text-sm uppercase tracking-widest transition-all"
              >
                Fortfahren
              </button>
            </div>
          )}

          {/* Iframe - always rendered but hidden during loading */}
          <iframe
            src="https://container-configurator-nu.vercel.app/embed?theme=dark"
            width="100%"
            height="800"
            style={{ border: 'none', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
            allow="clipboard-write"
            title="THM Michels 3D Konfigurator"
          />
        </div>

        {/* Fullscreen Overlay */}
        {isFullscreen && (
          <div className="fixed inset-0 z-[9999] bg-[#0F0F0F]">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-[10000] w-10 h-10 bg-[#0F0F0F]/80 border border-white/20 flex items-center justify-center hover:border-[#D97706] transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://container-configurator-nu.vercel.app/embed?theme=dark"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allow="clipboard-write"
              title="THM Michels 3D Konfigurator Fullscreen"
            />
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="font-mono text-[#9CA3AF] text-sm">
            Nach der Konfiguration erhältst du eine unverbindliche Preisschätzung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
