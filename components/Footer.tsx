import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-14 bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Logo + Nav Links inline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <Link to="/" className="font-display font-black text-xl tracking-tighter">
            THM<span className="text-[#D97706]">.</span>MICHELS
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm text-[#9CA3AF]">
            <Link to="/" className="hover:text-[#D97706] transition-colors py-2">Startseite</Link>
            <Link to="/leistungen/event-container" className="hover:text-[#D97706] transition-colors py-2">Leistungen</Link>
            <Link to="/galerie" className="hover:text-[#D97706] transition-colors py-2">Galerie</Link>
            <Link to="/blog" className="hover:text-[#D97706] transition-colors py-2">Blog</Link>
            <Link to="/kontakt" className="hover:text-[#D97706] transition-colors py-2">Kontakt</Link>
          </nav>
        </div>

        {/* Middle Row: Contact + Hours + Instagram compact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/5">
          <div className="font-mono text-sm text-[#9CA3AF] space-y-1">
            <a href="tel:+491702847337" className="hover:text-[#D97706] transition-colors block py-1.5">+49 170 2847337</a>
            <a href="mailto:info@thm-michels.de" className="hover:text-[#D97706] transition-colors block py-1.5">info@thm-michels.de</a>
          </div>
          <div className="font-mono text-sm text-[#9CA3AF]">
            <span>Seewiesenstraße 18, 71334 Waiblingen</span>
            <span className="block mt-1">Mo–Fr 08–18 Uhr &middot; Sa 10–15 Uhr</span>
          </div>
          <div className="sm:text-right">
            <a
              href="https://www.instagram.com/thm_michels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D97706] hover:text-white transition-colors font-mono text-sm py-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @thm_michels
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright + Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
            &copy; 2026 THM Michels. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
            <Link to="/impressum" className="hover:text-white/60 transition-colors py-2">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white/60 transition-colors py-2">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

