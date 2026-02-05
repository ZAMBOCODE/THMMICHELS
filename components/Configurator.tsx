
import React, { useState, useEffect } from 'react';

interface ConfiguratorProps {
  showHeader?: boolean;
}

const Configurator: React.FC<ConfiguratorProps> = ({ showHeader = true }) => {
  const [isLoading, setIsLoading] = useState(true);

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
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-6">
              Gestalte deinen<br />Container
            </h3>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
              Nutze unseren interaktiven 3D-Konfigurator, um deinen Traumcontainer zu gestalten. Wähle Größe, Farbe und Ausstattung.
            </p>
          </div>
        )}

        <div className="border border-white/10 overflow-hidden relative" style={{ height: '800px' }}>
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

          {/* Iframe - always rendered but hidden during loading */}
          <iframe
            src="https://container-configurator-bs4ktt0j3-zambocodes-projects.vercel.app/embed"
            width="100%"
            height="800"
            style={{ border: 'none', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
            allow="clipboard-write"
            title="THM Michels 3D Konfigurator"
          />
        </div>

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
