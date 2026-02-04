
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Module Selection',
      desc: 'Wähle dein Basis-Modul aus unserem Portfolio: Von kompakten 10ft Einheiten bis zu SARIS Trailern.',
      tech: 'CHECK_INVENTORY_SYNC'
    },
    {
      num: '02',
      title: 'Engineering',
      desc: 'Wir planen Hydraulik, Dämmung und High-End Finish. Dein Unikat wird in unserer Werkstatt veredelt.',
      tech: 'SPEC_CALC_RUNNING'
    },
    {
      num: '03',
      title: 'Turnkey Delivery',
      desc: 'Schlüsselfertige Übergabe an deinem Wunschort. Bereit für den Einsatz – weltweit.',
      tech: 'READY_TO_DEPLOY'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0F0F0F] relative border-y border-white/5">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ THE WORKFLOW ]</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Der Weg zum <br/>Unikat</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-display font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#D97706]/10 transition-colors">
                {step.num}
              </div>
              <div className="relative pt-8">
                <div className="w-12 h-1 bg-[#D97706] mb-8 group-hover:w-24 transition-all duration-500"></div>
                <h4 className="text-2xl font-display font-black uppercase mb-4 tracking-tighter">{step.title}</h4>
                <p className="text-[#9CA3AF] leading-relaxed mb-6 font-mono text-sm">
                  {step.desc}
                </p>
                <div className="inline-block px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40 uppercase">
                  {step.tech}
                </div>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 opacity-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
