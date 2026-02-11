import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const EventContainer: React.FC = () => {
    const sizes = [
        { size: '3 m × 2 m', weight: '1.600–1.800 kg', ideal: 'Kompakte Bars, Eiswagen, Pop-up-Stände' },
        { size: '4 m × 2 m', weight: '1.800–2.500 kg', ideal: 'Food-Trucks, Barwagen, Verkaufsstände' },
        { size: '6 m × 2 m', weight: '1.800–2.600 kg', ideal: 'Gastronomie-Trailer, große Event-Bars' },
        { size: '8 m × 2 m', weight: '1.800–2.700 kg', ideal: 'Voll ausgestattete Gastro-Container, Großevents' },
    ];

    const audiences = [
        { title: 'Gastronomen', desc: 'Mobile Bars, Küchen und Verkaufsstände für den täglichen Einsatz' },
        { title: 'Event-Veranstalter', desc: 'Stilvolle Bar-Trailer und Catering-Container für Festivals, Messen und Firmenfeiern' },
        { title: 'Streetfood-Unternehmer', desc: 'Food-Trucks und Imbisswagen, die auffallen und funktionieren' },
        { title: 'Unternehmen', desc: 'Mobile Verkaufskonzepte, Promotion-Fahrzeuge und Markenerlebnisse auf Rädern' },
    ];

    return (
        <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Event-Container kaufen | Mobile Bars & Food-Trucks"
                description="Individuelle Event-Container auf Anhängern: Barwagen, Food-Trucks, Eiswagen – maßgefertigt in Waiblingen. Leichtbauweise, fest verbaute Ausstattung, sofort einsatzbereit."
            />
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-12 md:mb-20">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ EVENT-CONTAINER ]</span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase mb-6 md:mb-8 leading-tight">Dein Event-Container –<br />gebaut für deinen Einsatz</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-3xl text-lg leading-relaxed">
                        Ob Barwagen, Food-Truck, Hähnchenwagen oder Eiswagen – wir fertigen individuelle Container auf Anhängern, die genau zu deinem Konzept passen. Du bestimmst Design, Ausstattung und Funktion. Wir bauen es – handwerklich präzise, robust und sofort einsatzbereit.
                    </p>
                </div>

                {/* Features */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-8 md:mb-12 tracking-tight">Nicht irgendein Container – deiner.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <h4 className="text-xl font-display font-black uppercase mb-4">Leichtbauweise</h4>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">
                                Unsere Container sind durch speziellen Stahl deutlich leichter als herkömmliche Modelle. Weniger Gewicht heißt: mehr Nutzlast, niedrigere Betriebskosten und flexiblerer Einsatz – auch mit kleineren Zugfahrzeugen.
                            </p>
                        </div>
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <h4 className="text-xl font-display font-black uppercase mb-4">Fest verbaut</h4>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">
                                Theke, Kühlschränke, Spüle, Zapfanlage – alles ist fest eingebaut und bleibt, wo es ist. Kein Ab- und Aufbau bei jedem Event. Du fährst vor, öffnest die Klappen und bist startklar.
                            </p>
                        </div>
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <h4 className="text-xl font-display font-black uppercase mb-4">Komplett individuell</h4>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">
                                Jeder Container wird nach deinen Wünschen gefertigt. Farben, Branding, Innenaufteilung, technische Ausstattung – nichts kommt von der Stange.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sizes Table */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-8 tracking-tight">Finde die passende Größe</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8 max-w-2xl">
                        Unsere Container gibt es in vier Standardgrößen. Jede Variante lässt sich individuell ausstatten.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-[#D97706]">Größe</th>
                                    <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-[#D97706]">Gewicht</th>
                                    <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-[#D97706]">Ideal für</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-4 font-display font-bold">{row.size}</td>
                                        <td className="py-4 px-4 font-mono text-sm text-[#9CA3AF]">{row.weight}</td>
                                        <td className="py-4 px-4 font-mono text-sm text-[#9CA3AF]">{row.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Audience */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-8 md:mb-12 tracking-tight">Für wen wir bauen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {audiences.map((item, i) => (
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
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-4">Bereit für deinen eigenen Container?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden.</p>
                    <Link
                        to="/kontakt"
                        className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-all"
                    >
                        Jetzt Projekt anfragen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventContainer;
