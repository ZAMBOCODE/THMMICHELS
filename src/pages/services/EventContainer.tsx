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
        <div className="min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Event-Container kaufen | Mobile Bars & Food-Trucks"
                description="Individuelle Event-Container auf Anhängern: Barwagen, Food-Trucks, Eiswagen – maßgefertigt in Waiblingen. Leichtbauweise, fest verbaute Ausstattung, sofort einsatzbereit."
            />

            {/* Hero with full-width image */}
            <section className="relative min-h-[50dvh] md:min-h-[65dvh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/csm_Gruenbeck_Roadshow_Deutschland_02_7a30455b9f.jpg"
                        alt="Individueller Event-Container auf Anhänger für Festivals und Veranstaltungen"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={800}
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
                    <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-32">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ EVENT-CONTAINER ]</span>
                    <h1 className="text-fluid-hero font-display font-black uppercase mb-6 leading-[0.95] tracking-tighter">
                        Dein Event-Container &ndash;<br />gebaut für deinen Einsatz
                    </h1>
                    <p className="font-mono text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                        Ob Barwagen, Food-Truck, Hähnchenwagen oder Eiswagen &ndash; wir fertigen individuelle Container auf Anhängern, die genau zu deinem Konzept passen.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">

                {/* Features - 3 columns with icon-style tops */}
                <section className="py-16 md:py-24">
                    <h2 className="text-fluid-section font-display font-black uppercase mb-4 tracking-tight">Nicht irgendein Container &ndash; deiner.</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Leichtbauweise', desc: 'Durch speziellen Stahl deutlich leichter als herkömmliche Modelle. Mehr Nutzlast, niedrigere Betriebskosten und flexiblerer Einsatz – auch mit kleineren Zugfahrzeugen.' },
                            { title: 'Fest verbaut', desc: 'Theke, Kühlschränke, Spüle, Zapfanlage – alles ist fest eingebaut. Kein Ab- und Aufbau bei jedem Event. Vorfahren, Klappen öffnen, startklar.' },
                            { title: 'Komplett individuell', desc: 'Farben, Branding, Innenaufteilung, technische Ausstattung – nichts kommt von der Stange. Jeder Container wird nach deinen Wünschen gefertigt.' },
                        ].map((item, i) => (
                            <div key={i} className="group border border-white/10 hover:border-[#D97706]/50 transition-colors p-8">
                                <span className="text-[#D97706] font-display font-black text-4xl block mb-4">0{i + 1}</span>
                                <h3 className="text-xl font-display font-black uppercase mb-4">{item.title}</h3>
                                <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Image + Text split section */}
                <section className="pb-16 md:pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
                        <div className="relative h-64 md:h-auto min-h-[300px]">
                            <img
                                src="/wanderlust-bar.jpeg"
                                alt="Event-Container Bar Innenansicht mit Theke und Beleuchtung"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <span className="font-mono text-[#D97706] text-[10px] tracking-widest uppercase mb-4">QUALITÄT</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-6 tracking-tight">Handwerklich gebaut in Waiblingen</h3>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed mb-6">
                                Du bestimmst Design, Ausstattung und Funktion. Wir bauen es &ndash; handwerklich präzise, robust und sofort einsatzbereit. Made in Germany, mit 2 Jahren Garantie.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Made in Germany', '2 Jahre Garantie', 'TÜV-geprüft'].map((tag) => (
                                    <span key={tag} className="bg-white/5 border border-white/10 px-3 py-1.5 font-mono text-[10px] text-[#D97706] uppercase tracking-widest">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sizes Table */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-fluid-section font-display font-black uppercase mb-4 tracking-tight">Finde die passende Größe</h2>
                    <p className="font-mono text-[#9CA3AF] mb-8 max-w-2xl">
                        Unsere Container gibt es in vier Standardgrößen. Jede Variante lässt sich individuell ausstatten.
                    </p>
                    <div className="overflow-x-auto border border-white/10">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="text-left py-4 px-6 font-mono text-xs uppercase tracking-widest text-[#D97706]">Größe</th>
                                    <th className="text-left py-4 px-6 font-mono text-xs uppercase tracking-widest text-[#D97706]">Gewicht</th>
                                    <th className="text-left py-4 px-6 font-mono text-xs uppercase tracking-widest text-[#D97706]">Ideal für</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                                        <td className="py-4 px-6 font-display font-bold">{row.size}</td>
                                        <td className="py-4 px-6 font-mono text-sm text-[#9CA3AF]">{row.weight}</td>
                                        <td className="py-4 px-6 font-mono text-sm text-[#9CA3AF]">{row.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Audience */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-fluid-section font-display font-black uppercase mb-4 tracking-tight">Für wen wir bauen</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {audiences.map((item, i) => (
                            <div key={i} className="flex gap-5 items-start p-6 border border-white/10 hover:border-[#D97706]/50 transition-colors group">
                                <span className="text-[#D97706] font-display font-black text-2xl shrink-0">0{i + 1}</span>
                                <div>
                                    <h4 className="font-display font-black uppercase mb-2">{item.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 border-t border-white/10">
                    <h3 className="text-fluid-section font-display font-black uppercase mb-4">Bereit für deinen eigenen Container?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden.</p>
                    <Link
                        to="/kontakt"
                        className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform] duration-300"
                    >
                        Jetzt Projekt anfragen
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default EventContainer;
