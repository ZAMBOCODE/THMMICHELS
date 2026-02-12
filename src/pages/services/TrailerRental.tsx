import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Building2, PartyPopper, Music, Check, type LucideIcon } from 'lucide-react';
import SEO from '../../../components/SEO';

const TrailerRental: React.FC = () => {
    const features = [
        'Voll ausgestattete Bar mit Zapfanlage',
        'Stilvolles Design – ein echter Blickfang',
        'Flexibel einsetzbar – drinnen und draußen',
        'Lieferung und Abholung inklusive',
        'Persönliche Einweisung vor Ort',
    ];

    const occasions: { title: string; desc: string; icon: LucideIcon }[] = [
        { title: 'Hochzeiten', desc: 'Die Bar, über die deine Gäste noch lange reden werden', icon: Gem },
        { title: 'Firmenfeiern', desc: 'Professionell, stilvoll und unkompliziert', icon: Building2 },
        { title: 'Geburtstage & Privatfeiern', desc: 'Das besondere Extra für deinen großen Tag', icon: PartyPopper },
        { title: 'Festivals & Open-Airs', desc: 'Robust, funktional und ready to go', icon: Music },
    ];

    const steps = [
        { num: '01', title: 'Anfrage senden', desc: 'Sag uns, wann und wo du den Bar-Anhänger brauchst.' },
        { num: '02', title: 'Details klären', desc: 'Wir besprechen Ausstattung, Lieferung und alles, was du wissen musst.' },
        { num: '03', title: 'Feiern', desc: 'Wir liefern, du feierst. So einfach ist das.' },
    ];

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Bar-Anhänger mieten | Event-Trailer für Hochzeit & Firmenfeier"
                description="Stylischen Bar-Anhänger mieten für Hochzeiten, Firmenfeiern und Festivals. Voll ausgestattet mit Zapfanlage, Lieferung inklusive. Jetzt Verfügbarkeit anfragen."
            />

            {/* Hero with full-width image */}
            <section className="relative min-h-[50dvh] md:min-h-[65dvh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/11.jpg"
                        alt="Stylischer Bar-Anhänger zum Mieten für Hochzeiten und Events"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={800}
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
                    <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-32">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ ANHÄNGER MIETEN ]</span>
                    <h1 className="text-fluid-hero font-display font-black uppercase mb-6 leading-[0.95] tracking-tighter">
                        Den Bar-Anhänger<br />mieten statt kaufen
                    </h1>
                    <p className="font-mono text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                        Unser Bar-Anhänger bringt das gewisse Extra zu deinem Event. Voll ausgestattet, stilvoll und garantiert ein Hingucker.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">

                {/* Image + Features split */}
                <section className="py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
                        <div className="relative h-64 md:h-auto min-h-[320px]">
                            <img
                                src="/wanderlust-bar.jpeg"
                                alt="Bar-Anhänger Innenansicht mit Zapfanlage und stilvoll beleuchtet"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <span className="font-mono text-[#D97706] text-[10px] tracking-widest uppercase mb-4">AUSSTATTUNG</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-8 tracking-tight">Mehr als eine Klapptheke</h3>
                            <div className="space-y-3">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
                                        <span className="font-mono text-sm text-[#9CA3AF]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Occasions */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-fluid-section font-display font-black uppercase mb-4 tracking-tight">Für Anlässe, die in Erinnerung bleiben</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {occasions.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="group p-8 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                    <Icon className="w-7 h-7 text-white group-hover:text-[#D97706] transition-colors mb-4" aria-hidden="true" />
                                    <h4 className="font-display font-black uppercase mb-3 text-xl">{item.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Process */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-fluid-section font-display font-black uppercase mb-4 tracking-tight">Mieten in 3 Schritten</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.num} className="relative">
                                <span className="text-6xl md:text-7xl font-display font-black text-white/5 absolute -top-6 -left-2">{step.num}</span>
                                <div className="relative pt-8">
                                    <div className="w-12 h-1 bg-[#D97706] mb-6"></div>
                                    <h4 className="text-xl font-display font-black uppercase mb-3">{step.title}</h4>
                                    <p className="font-mono text-sm text-[#9CA3AF]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 border-t border-white/10">
                    <h3 className="text-fluid-section font-display font-black uppercase mb-4">Dein nächstes Event steht an?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Die Nachfrage ist hoch &ndash; frag am besten frühzeitig an.</p>
                    <Link
                        to="/kontakt"
                        className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform] duration-300"
                    >
                        Jetzt Verfügbarkeit anfragen
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default TrailerRental;
