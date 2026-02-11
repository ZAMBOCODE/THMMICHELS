
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Konzept',
      desc: 'Du erzählst uns deine Idee. Wir beraten, planen und visualisieren dein Unikat in 3D.',
      tech: 'CONCEPT_&_DESIGN'
    },
    {
      num: '02',
      title: 'Fertigung',
      desc: 'Handbau in Waiblingen. Präzision, Sorgfalt und der Anspruch, dass jedes Detail stimmt.',
      tech: 'HANDCRAFTED_BUILD'
    },
    {
      num: '03',
      title: 'Übergabe',
      desc: 'Persönliche Übergabe inklusive Einweisung. Dein Container, bereit für den Einsatz.',
      tech: 'DEPLOYMENT_READY'
    }
  ];

  return (
    <section id="process" className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] relative border-y border-white/5">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-animate">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ THE WORKFLOW ]</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight">Der Weg zum <br />Unikat</h3>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-12 max-w-5xl">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group scroll-animate" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="text-4xl md:text-8xl font-display font-black text-white/20 absolute -top-5 md:-top-12 -left-2 md:-left-4 group-hover:text-[#D97706]/30 transition-colors">
                  {step.num}
                </div>
                <div className="relative pt-6 md:pt-8">
                  <div className="w-8 md:w-12 h-1 bg-[#D97706] mb-4 md:mb-8 group-hover:w-16 md:group-hover:w-24 transition-all duration-500"></div>
                  <h4 className="text-sm md:text-2xl font-display font-black uppercase mb-2 md:mb-4 tracking-tighter">{step.title}</h4>
                  <p className="text-[#9CA3AF] leading-relaxed mb-3 md:mb-6 font-mono text-[10px] md:text-sm">
                    {step.desc}
                  </p>
                  <div className="hidden md:inline-block px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40 uppercase">
                    {step.tech}
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 opacity-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
