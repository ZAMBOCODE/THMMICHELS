
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative scroll-animate-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D97706]/10 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Maxim Michels"
              className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover grayscale border-l border-t border-white/10"
            />
            <div className="absolute bottom-8 left-8 bg-[#0F0F0F] p-6 border border-white/10 max-w-xs">
              <span className="font-mono text-[#D97706] text-[10px] block mb-2 tracking-[0.3em] font-bold">THE_FOUNDER</span>
              <h4 className="text-2xl font-display font-black uppercase mb-2">Maxim Michels</h4>
              <p className="text-xs text-[#9CA3AF] font-mono leading-relaxed">
                Dipl.-Ingenieur & Spezialist für modulare Infrastruktur und exklusive Sonderanfertigungen.
              </p>
            </div>
          </div>

          <div className="scroll-animate-right">
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ WARUM THM ]</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase mb-6 md:mb-10 tracking-tight leading-none">
              Warum Kunden <br />uns vertrauen
            </h3>

            <div className="space-y-10">
              <p className="text-[#9CA3AF] text-xl leading-relaxed">
                Wir bauen nicht einfach nur Container. Wir liefern Lösungen, die leichter, schneller und persönlicher sind als der Standard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Bis zu 30% leichter</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Mehr Zuladung, weniger Sprit durch speziellen Stahl.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Sofort startklar</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Fest verbaute Ausstattung. Hinfahren, aufklappen, loslegen.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Dein Projekt</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Du bestimmst jedes Detail. Wir setzen deine Vision um.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Direkt mit Chef</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Kein Callcenter. Persönliche Beratung von Maxim.</p>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-6">
                {/* Partner Logos could go here if available, keeping placeholder for now but matching context */}
                <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">QUALITÄT AUS WAIBLINGEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
