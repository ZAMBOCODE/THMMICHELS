import React from 'react';
import { Link } from 'react-router-dom';

const NudieContainer: React.FC = () => {
    const useCases = [
        { title: 'Fester Verkaufsstand', desc: 'Auf dem Gelände, Marktplatz oder Firmengelände' },
        { title: 'Lager & Werkstatt', desc: 'Zusätzlicher Raum ohne Bauvorhaben' },
        { title: 'Pop-up-Konzepte', desc: 'Flexibel aufstellbar und wieder versetzbar' },
        { title: 'Individuelle Projekte', desc: 'Deine Idee, unser Container' },
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-20">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ NUDIE-CONTAINER ]</h2>
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-tight">Nudie-Container –<br />der Container ohne Anhänger</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-3xl text-lg leading-relaxed">
                        Du brauchst einen hochwertigen Container, aber keinen fahrbaren Untersatz? Unsere Nudie-Container sind eigenständige Einheiten ohne Anhänger-Unterbau – flexibel einsetzbar, robust gebaut und direkt von unserem holländischen Partner.
                    </p>
                </div>

                {/* What is it */}
                <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-display font-black uppercase mb-6 tracking-tight">Pur, praktisch, vielseitig</h3>
                        <p className="font-mono text-[#9CA3AF] leading-relaxed mb-6">
                            Ein Nudie-Container ist ein Container in seiner reinsten Form: kein Fahrgestell, kein Anhänger – nur der Container selbst.
                        </p>
                        <p className="font-mono text-[#9CA3AF] leading-relaxed">
                            Perfekt, wenn du eine feste Station brauchst, die trotzdem mobil versetzt werden kann. Ob als Verkaufsstand, Lager, Werkstatt oder Büroerweiterung – die Einsatzmöglichkeiten sind so vielfältig wie deine Ideen.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 h-80 flex items-center justify-center">
                        <span className="font-mono text-xs text-white/40">NUDIE_CONTAINER_IMAGE</span>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="mb-24">
                    <h3 className="text-3xl font-display font-black uppercase mb-12 tracking-tight">Wofür ein Nudie-Container?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {useCases.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-6 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <span className="text-[#D97706] font-display font-black text-2xl">0{i + 1}</span>
                                <div>
                                    <h4 className="font-display font-black uppercase mb-2">{item.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-3xl font-display font-black uppercase mb-4">Klingt interessant?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Sag uns, wofür du den Container brauchst. Wir klären Größe, Ausstattung und Lieferung – unkompliziert und persönlich.</p>
                    <Link
                        to="/kontakt"
                        className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-all"
                    >
                        Jetzt anfragen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NudieContainer;
