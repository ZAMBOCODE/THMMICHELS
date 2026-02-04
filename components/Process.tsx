
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Beratung',
      desc: 'Du erzählst uns, was du vorhast. Wir hören zu und entwickeln gemeinsam ein Konzept.',
      tech: 'CONCEPT_PHASE'
    },
    {
      num: '02',
      title: 'Planung & Design',
      desc: 'Detaillierte Planung mit 3D-Visualisierung – sieh dein Unikat bevor wir bauen.',
      tech: '3D_VISUALIZATION'
    },
    {
      num: '03',
      title: 'Fertigung',
      desc: 'Handbau in Waiblingen. Präzision, Sorgfalt und der Anspruch, dass jedes Detail stimmt.',
      tech: 'HANDCRAFTED_BUILD'
    },
    {
      num: '04',
      title: 'Übergabe',
      desc: 'Persönliche Übergabe inklusive Einweisung. Dein Container, bereit für den Einsatz.',
      tech: 'DEPLOYMENT_READY'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0F0F0F] relative border-y border-white/5">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ THE WORKFLOW ]</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Der Weg zum <br />Unikat</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
