
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] border border-white/10 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg mb-2">Cookie-Einstellungen</h3>
            <p className="text-[#9CA3AF] text-sm font-mono leading-relaxed">
              Wir nutzen Cookies, um dir die bestmögliche Erfahrung zu bieten.
              Mehr Infos in unserer <a href="/datenschutz" className="text-[#D97706] hover:underline">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className="px-6 py-3 border border-white/20 hover:border-white/40 font-bold text-sm uppercase tracking-widest transition-all"
            >
              Nur Essenzielle
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm uppercase tracking-widest transition-all"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
