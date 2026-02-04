
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudy: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ CASE STUDIES ]</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Referenz-Projekte</h3>
        </div>

        {CASE_STUDIES.map((study) => (
          <div key={study.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-[#D97706]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-[500px] object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:flex gap-2 z-20">
                {study.specs.map((spec, i) => (
                  <span key={i} className="bg-[#0F0F0F] border border-white/10 px-4 py-2 font-mono text-[10px] text-[#9CA3AF]">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <h4 className="text-4xl font-display font-black uppercase mb-8 tracking-tighter text-[#F8F9FA]">
                {study.title}
              </h4>
              
              <div className="space-y-8">
                <div>
                  <h5 className="font-mono text-[#D97706] text-[10px] uppercase tracking-widest mb-2">PROBLEM_STATEMENT:</h5>
                  <p className="text-[#9CA3AF] leading-relaxed italic border-l-2 border-white/10 pl-6">
                    "{study.problem}"
                  </p>
                </div>
                
                <div>
                  <h5 className="font-mono text-[#D97706] text-[10px] uppercase tracking-widest mb-2">SOLUTION_ARCHITECTURE:</h5>
                  <p className="text-[#F8F9FA] leading-relaxed font-mono text-sm">
                    {study.solution}
                  </p>
                </div>
              </div>

              <button className="mt-12 text-[#D97706] font-black uppercase tracking-widest text-xs flex items-center gap-3 group">
                PROJEKT_DETAILS_DOWNLOAD
                <span className="w-12 h-[1px] bg-[#D97706] group-hover:w-20 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
