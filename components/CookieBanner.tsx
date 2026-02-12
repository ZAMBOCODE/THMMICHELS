
import React, { useState, useEffect } from 'react';

const GA_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 Measurement ID

function loadGA4() {
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    (window as any).gtag = gtag;
  };
}

function removeGA4() {
  const script = document.getElementById('ga4-script');
  if (script) script.remove();

  // Clear GA cookies
  document.cookie.split(';').forEach(c => {
    const name = c.trim().split('=')[0];
    if (name.startsWith('_ga') || name.startsWith('_gid')) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'all') {
      loadGA4();
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    loadGA4();
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    removeGA4();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-[slideUp_0.4s_var(--ease-smooth)_both]">
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] border border-white/10 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg mb-2">Cookie-Einstellungen</h3>
            <p className="text-[#9CA3AF] text-sm font-mono leading-relaxed">
              Wir nutzen Cookies für Analyse (Google Analytics), um unsere Website zu verbessern.
              Mehr Infos in unserer <a href="/datenschutz" className="text-[#D97706] hover:underline">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className="btn-press px-6 py-3 border border-white/20 hover:border-white/40 font-bold text-sm uppercase tracking-widest transition-all duration-200"
            >
              Nur Essenzielle
            </button>
            <button
              onClick={acceptAll}
              className="btn-press px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm uppercase tracking-widest transition-all duration-200"
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
