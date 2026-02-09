
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

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Fallback timeout in case iframe onLoad doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Close fullscreen when rotating back to portrait
  useEffect(() => {
    if (!isLandscape && isFullscreen) {
      setIsFullscreen(false);
    }
  }, [isLandscape, isFullscreen]);

  return (
    <>
      <section id="configurator" className={`bg-[#0F0F0F] ${isLandscape ? 'py-4' : 'py-24'}`}>
        <div className={`mx-auto ${isLandscape ? 'px-0 max-w-none' : 'px-6 max-w-7xl'}`}>
          {showHeader && !isLandscape && (
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

          <div
            className={`overflow-hidden relative ${isLandscape ? 'border border-[#D97706]/50' : 'border-2 border-[#D97706]'}`}
            style={{ height: isLandscape ? 'calc(100vh - 2rem)' : '800px' }}
          >
            {/* Loading Animation */}
            {isLoading && (
              <div className="absolute inset-0 bg-[#0F0F0F] z-10 flex flex-col items-center justify-center">
                <div className={`relative mb-8 ${isLandscape ? 'w-20 h-14' : 'w-32 h-24'}`}>
                  <div className="absolute inset-0 border-2 border-[#D97706] bg-[#D97706]/10 animate-pulse">
                    <div className="absolute top-0 left-1/4 w-0.5 h-full bg-[#D97706]/30"></div>
                    <div className="absolute top-0 left-2/4 w-0.5 h-full bg-[#D97706]/30"></div>
                    <div className="absolute top-0 left-3/4 w-0.5 h-full bg-[#D97706]/30"></div>
                    <div className="absolute right-2 top-2 bottom-2 w-8 border border-[#D97706]/50"></div>
                  </div>
                  <div className="absolute -bottom-4 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#D97706] transition-all duration-[5000ms] ease-linear"
                      style={{ width: isLoading ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <p className={`font-mono text-[#D97706] uppercase tracking-widest mb-2 ${isLandscape ? 'text-xs' : 'text-sm'}`}>
                  Konfigurator lädt
                </p>
                <p className="font-mono text-[#9CA3AF] text-xs">
                  3D-Modell wird vorbereitet...
                </p>

                <div className="flex gap-1 mt-4">
                  <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            {/* Landscape "Fortfahren" overlay */}
            {isLandscape && !isFullscreen && !isLoading && (
              <div className="absolute inset-0 bg-[#0F0F0F]/95 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-[#D97706] rounded-full flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                  <h4 className="font-display font-black uppercase text-base tracking-tight mb-1">3D Konfigurator</h4>
                  <p className="font-mono text-[#9CA3AF] text-[10px] mb-5 uppercase tracking-widest">Vollbild für beste Erfahrung</p>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-3 font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-[0_8px_16px_-6px_rgba(217,119,6,0.5)]"
                  >
                    Fortfahren
                  </button>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://container-configurator-nu.vercel.app/embed?theme=dark"
              width="100%"
              height="100%"
              style={{ border: 'none', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
              allow="clipboard-write"
              title="THM Michels 3D Konfigurator"
              onLoad={handleIframeLoad}
            />
          </div>

          {!isLandscape && (
            <div className="mt-8 text-center">
              <p className="font-mono text-[#9CA3AF] text-sm">
                Nach der Konfiguration erhältst du eine unverbindliche Preisschätzung.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-[#0F0F0F] flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#0F0F0F] border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#D97706]"></div>
              <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">3D Konfigurator</span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Iframe fills remaining space */}
          <div className="flex-1 min-h-0">
            <iframe
              src="https://container-configurator-nu.vercel.app/embed?theme=dark"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
              allow="clipboard-write"
              title="THM Michels 3D Konfigurator Fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Configurator;
