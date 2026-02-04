
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D97706]/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Maxim Michels" 
              className="w-full h-[600px] object-cover grayscale border-l border-t border-white/10"
            />
            <div className="absolute bottom-8 left-8 bg-[#0F0F0F] p-6 border border-white/10 max-w-xs">
              <span className="font-mono text-[#D97706] text-[10px] block mb-2 tracking-[0.3em] font-bold">THE_FOUNDER</span>
              <h4 className="text-2xl font-display font-black uppercase mb-2">Maxim Michels</h4>
              <p className="text-xs text-[#9CA3AF] font-mono leading-relaxed">
                Dipl.-Ingenieur & Spezialist für modulare Infrastruktur und exklusive Sonderanfertigungen.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ EXPERTISE ]</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase mb-10 tracking-tight leading-none">
              Dein Projekt In <br/> Expertenhand
            </h3>
            
            <div className="space-y-10">
              <p className="text-[#9CA3AF] text-xl leading-relaxed">
                Ich betrachte jeden Container nicht als Stahlkiste, sondern als technisches System. Mein Fokus liegt auf der Synergie zwischen robuster Industriequalität und luxuriösem Interieur.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Präzision</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Engineering bis ins letzte Detail.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Individuell</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Keine Massenware, nur Unikate.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Beratung</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Persönlich von der Vision bis zum Ziel.</p>
                </div>
                <div>
                  <h5 className="font-display font-black uppercase text-[#F8F9FA] mb-2 tracking-tighter">Netzwerk</h5>
                  <p className="font-mono text-xs text-[#9CA3AF]">Partnerschaften wie SARIS & mehr.</p>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-6">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://picsum.photos/seed/${i+10}/100`} className="w-10 h-10 rounded-full border-2 border-[#0F0F0F]" alt="Partner" />
                   ))}
                 </div>
                 <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">+20 PARTNERS_WORLDWIDE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
