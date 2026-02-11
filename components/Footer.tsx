import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-display font-black text-2xl tracking-tighter block mb-6">
              THM<span className="text-[#D97706]">.</span>MICHELS
            </Link>
            <p className="text-[#9CA3AF] font-mono text-sm leading-relaxed mb-6">
              Individuelle Container und Anhänger – handwerklich gebaut in Waiblingen.
            </p>
            <a
              href="https://www.instagram.com/thm_michels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D97706] hover:text-white transition-colors font-mono text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @thm_michels
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-mono text-[#F8F9FA] text-[10px] uppercase tracking-widest mb-8">Navigation</h5>
            <ul className="space-y-4 font-mono text-sm text-[#9CA3AF]">
              <li><Link to="/" className="hover:text-[#D97706] transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen/event-container" className="hover:text-[#D97706] transition-colors">Leistungen</Link></li>
              <li><Link to="/galerie" className="hover:text-[#D97706] transition-colors">Galerie</Link></li>
              <li><Link to="/blog" className="hover:text-[#D97706] transition-colors">Blog</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#D97706] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-mono text-[#F8F9FA] text-[10px] uppercase tracking-widest mb-8">Kontakt</h5>
            <ul className="space-y-4 font-mono text-sm text-[#9CA3AF]">
              <li><a href="tel:+491702847337" className="hover:text-[#D97706] transition-colors">+49 170 2847337</a></li>
              <li><a href="mailto:info@thm-michels.de" className="hover:text-[#D97706] transition-colors">info@thm-michels.de</a></li>
              <li className="text-[#9CA3AF]">Seewiesenstraße 18<br />71334 Waiblingen</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h5 className="font-mono text-[#F8F9FA] text-[10px] uppercase tracking-widest mb-8">Öffnungszeiten</h5>
            <ul className="space-y-2 font-mono text-sm text-[#9CA3AF]">
              <li className="flex justify-between"><span>Mo–Fr</span> <span>08:00–18:00</span></li>
              <li className="flex justify-between"><span>Sa</span> <span>10:00–15:00</span></li>
              <li className="flex justify-between"><span>So</span> <span>Geschlossen</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © 2026 THM Michels. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
            <Link to="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

