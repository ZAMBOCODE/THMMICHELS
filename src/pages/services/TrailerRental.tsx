import React from 'react';
import { Link } from 'react-router-dom';

const TrailerRental: React.FC = () => {
    const features = [
        'Voll ausgestattete Bar mit Zapfanlage',
        'Stilvolles Design – ein echter Blickfang',
        'Flexibel einsetzbar – drinnen und draußen',
        'Lieferung und Abholung inklusive',
        'Persönliche Einweisung vor Ort',
    ];

    const occasions = [
        { title: 'Hochzeiten', desc: 'Die Bar, über die deine Gäste noch lange reden werden' },
        { title: 'Firmenfeiern', desc: 'Professionell, stilvoll und unkompliziert' },
        { title: 'Geburtstage & Privatfeiern', desc: 'Das besondere Extra für deinen großen Tag' },
        { title: 'Festivals & Open-Airs', desc: 'Robust, funktional und ready to go' },
    ];

    const steps = [
        { num: '01', title: 'Anfrage senden', desc: 'Sag uns, wann und wo du den Bar-Anhänger brauchst.' },
        { num: '02', title: 'Details klären', desc: 'Wir besprechen Ausstattung, Lieferung und alles, was du wissen musst.' },
        { num: '03', title: 'Feiern', desc: 'Wir liefern, du feierst. So einfach ist das.' },
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-20">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ ANHÄNGER MIETEN ]</h2>
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-tight">Den Bar-Anhänger<br />mieten statt kaufen</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-3xl text-lg leading-relaxed">
                        Du planst eine Hochzeit, Firmenfeier, einen Geburtstag oder ein Festival – und brauchst etwas Besonderes? Unser Bar-Anhänger bringt das gewisse Extra zu deinem Event. Voll ausgestattet, stilvoll und garantiert ein Hingucker.
                    </p>
                </div>

                {/* What you get */}
                <div className="mb-24">
                    <h3 className="text-3xl font-display font-black uppercase mb-8 tracking-tight">Dein Event verdient mehr als eine Klapptheke</h3>
                    <p className="font-mono text-[#9CA3AF] mb-12 max-w-2xl">
                        Unser Bar-Anhänger ist kein gewöhnlicher Getränkestand. Er ist ein voll ausgestatteter, stylischer Bar-Trailer, der jede Location in eine einladende Eventfläche verwandelt.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <span className="text-[#D97706]">✓</span>
                                <span className="font-mono text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Occasions */}
                <div className="mb-24">
                    <h3 className="text-3xl font-display font-black uppercase mb-12 tracking-tight">Für Anlässe, die in Erinnerung bleiben</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {occasions.map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <h4 className="font-display font-black uppercase mb-3 text-xl">{item.title}</h4>
                                <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div className="mb-24">
                    <h3 className="text-3xl font-display font-black uppercase mb-12 tracking-tight">Mieten in 3 Schritten</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.num} className="relative">
                                <span className="text-8xl font-display font-black text-white/5 absolute -top-8 -left-2">{step.num}</span>
                                <div className="relative pt-8">
                                    <div className="w-12 h-1 bg-[#D97706] mb-6"></div>
                                    <h4 className="text-xl font-display font-black uppercase mb-3">{step.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-3xl font-display font-black uppercase mb-4">Dein nächstes Event steht an?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Die Nachfrage ist hoch – frag am besten frühzeitig an.</p>
                    <Link
                        to="/kontakt"
                        className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-all"
                    >
                        Jetzt Verfügbarkeit anfragen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrailerRental;
