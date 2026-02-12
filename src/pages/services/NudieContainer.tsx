import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const NudieContainer: React.FC = () => {
    const useCases = [
        { title: 'Fester Verkaufsstand', desc: 'Auf dem Gelände, Marktplatz oder Firmengelände' },
        { title: 'Lager & Werkstatt', desc: 'Zusätzlicher Raum ohne Bauvorhaben' },
        { title: 'Pop-up-Konzepte', desc: 'Flexibel aufstellbar und wieder versetzbar' },
        { title: 'Individuelle Projekte', desc: 'Deine Idee, unser Container' },
    ];

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Nudie-Container | Container ohne Anhänger kaufen"
                description="Nudie-Container – hochwertige Container ohne Fahrgestell. Flexibel einsetzbar als Verkaufsstand, Lager oder Werkstatt. Direkt vom holländischen Partner."
            />

            {/* Hero with full-width image */}
            <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/pro-spacecube-nudie-lg01.webp"
                        alt="Nudie-Container ohne Anhänger – flexibel einsetzbar"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={800}
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
                    <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-32">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ NUDIE-CONTAINER ]</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase mb-6 leading-[0.95] tracking-tighter">
                        Nudie-Container &ndash;<br />der Container ohne Anhänger
                    </h1>
                    <p className="font-mono text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                        Eigenständige Einheiten ohne Anhänger-Unterbau &ndash; flexibel einsetzbar, robust gebaut und direkt von unserem holländischen Partner.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">

                {/* What is it - Image + Text */}
                <section className="py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
                        <div className="relative h-64 md:h-auto min-h-[320px]">
                            <img
                                src="/pro-spacecube-nudie-lg01.webp"
                                alt="Nudie-Container Detailansicht"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <span className="font-mono text-[#D97706] text-[10px] tracking-widest uppercase mb-4">PURE FLEXIBILITY</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-6 tracking-tight">Pur, praktisch, vielseitig</h3>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed mb-4">
                                Ein Nudie-Container ist ein Container in seiner reinsten Form: kein Fahrgestell, kein Anhänger &ndash; nur der Container selbst.
                            </p>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">
                                Perfekt, wenn du eine feste Station brauchst, die trotzdem mobil versetzt werden kann. Ob als Verkaufsstand, Lager, Werkstatt oder Büroerweiterung &ndash; die Einsatzmöglichkeiten sind so vielfältig wie deine Ideen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-2xl md:text-3xl font-display font-black uppercase mb-4 tracking-tight">Wofür ein Nudie-Container?</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {useCases.map((item, i) => (
                            <div key={i} className="flex gap-5 items-start p-6 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <span className="text-[#D97706] font-display font-black text-2xl shrink-0">0{i + 1}</span>
                                <div>
                                    <h4 className="font-display font-black uppercase mb-2">{item.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sizes / Specs */}
                <section className="pb-16 md:pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Größen', value: '10ft / 20ft / 40ft', desc: 'Verschiedene Standardgrößen verfügbar' },
                            { label: 'Material', value: 'Corten-Stahl', desc: 'Wetterfest und langlebig' },
                            { label: 'Lieferung', value: 'EU-weit', desc: 'Direkt vom holländischen Partner' },
                        ].map((spec, i) => (
                            <div key={i} className="p-6 border border-white/10 text-center">
                                <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-widest block mb-2">{spec.label}</span>
                                <span className="font-display font-black text-2xl uppercase block mb-2">{spec.value}</span>
                                <span className="font-mono text-xs text-[#9CA3AF]">{spec.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 border-t border-white/10">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-4">Klingt interessant?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Sag uns, wofür du den Container brauchst. Wir klären Größe, Ausstattung und Lieferung &ndash; unkompliziert und persönlich.</p>
                    <Link
                        to="/kontakt"
                        className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform] duration-300"
                    >
                        Jetzt anfragen
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default NudieContainer;
