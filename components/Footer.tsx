
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-black text-3xl tracking-tighter block mb-8 uppercase">
              THM<span className="text-[#D97706]">.</span>MICHELS
            </span>
            <p className="text-[#9CA3AF] max-w-sm font-mono text-sm leading-relaxed mb-8">
              High-End Container Transformationen für visionäre Brands und anspruchsvolle Privatkunden. Engineered in Germany.
            </p>
            <div className="flex gap-4">
              {['instagram', 'linkedin', 'vimeo'].map(s => (
                <a key={s} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#D97706] transition-colors">
                   <span className="font-mono text-[10px] uppercase text-[#9CA3AF]">{s.substring(0,2)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-mono text-[#F8F9FA] text-[10px] uppercase tracking-widest mb-8">Quicklinks</h5>
            <ul className="space-y-4 font-mono text-sm text-[#9CA3AF]">
              <li><a href="#products" className="hover:text-[#D97706] transition-colors">Portfolios</a></li>
              <li><a href="#process" className="hover:text-[#D97706] transition-colors">Workflow</a></li>
              <li><a href="#cases" className="hover:text-[#D97706] transition-colors">Cases</a></li>
              <li><a href="#project-planner" className="hover:text-[#D97706] transition-colors">Konfigurator</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-mono text-[#F8F9FA] text-[10px] uppercase tracking-widest mb-8">Rechtliches</h5>
            <ul className="space-y-4 font-mono text-sm text-[#9CA3AF]">
              <li><a href="#" className="hover:text-[#D97706] transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
            &copy; 2024 THM MICHELS. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
            BUILT_BY_AI_THM_SYSTEMS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
