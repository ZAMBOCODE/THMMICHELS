import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const OfficeContainer: React.FC = () => {
    const features = [
        { icon: '❄', label: 'Klimaanlage', desc: 'Für Sommer und Winter' },
        { icon: '🍳', label: 'Vollküche', desc: 'Komplett eingerichtet' },
        { icon: '🚿', label: '2 WC-Einheiten', desc: 'Sanitär inklusive' },
        { icon: '⚡', label: 'Elektroinstallation', desc: 'Strom und Beleuchtung' },
        { icon: '🏠', label: 'Vollisolierung', desc: 'Ganzjähriger Einsatz' },
        { icon: '✅', label: 'Sofort bezugsbereit', desc: 'Schlüsselfertig geliefert' },
    ];

    const audiences = [
        { title: 'Freelancer & Selbstständige', desc: 'Dein eigenes Büro im Garten, ohne Anbau und ohne Bürokratie-Marathon' },
        { title: 'Kleine Unternehmen', desc: 'Zusätzlicher Büroraum, schnell verfügbar und flexibel erweiterbar' },
        { title: 'Baustellen & Projekte', desc: 'Professionelle Baustellenbüros mit echtem Komfort' },
        { title: 'Home-Office-Alternative', desc: 'Arbeitsplatz und Zuhause getrennt, aber nur wenige Schritte entfernt' },
    ];

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Office-Container | Mobile Büros schlüsselfertig"
                description="Vollausgestattete Office-Container mit Küche, Klimaanlage und WC – schlüsselfertig geliefert. Die smarte Alternative zum klassischen Büro. Sofort bezugsbereit."
            />

            {/* Hero with full-width image */}
            <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Prefabricated-Office-Container.webp"
                        alt="Vollausgestatteter Office-Container mit Klimaanlage und Büroeinrichtung"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={800}
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
                    <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16 pt-32">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ OFFICE-CONTAINER ]</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase mb-6 leading-[0.95] tracking-tighter">
                        Dein Büro. Überall.
                    </h1>
                    <p className="font-mono text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
                        Vollausgestattete Office-Container mit Küche, Klimaanlage und sanitären Anlagen &ndash; schlüsselfertig geliefert, sofort bezugsbereit.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">

                {/* Features Grid */}
                <section className="py-16 md:py-24">
                    <h2 className="text-2xl md:text-3xl font-display font-black uppercase mb-4 tracking-tight">Komplett ausgestattet &ndash; nicht nur vier Wände</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <span className="text-2xl shrink-0" role="img" aria-hidden="true">{feature.icon}</span>
                                <div>
                                    <span className="font-display font-black uppercase text-sm block">{feature.label}</span>
                                    <span className="font-mono text-xs text-[#9CA3AF]">{feature.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Image + Text split */}
                <section className="pb-16 md:pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
                        <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                            <span className="font-mono text-[#D97706] text-[10px] tracking-widest uppercase mb-4">PARTNER</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-6 tracking-tight">Direkt vom holländischen Partner</h3>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed mb-6">
                                Unsere Office-Container kommen über unseren holländischen Partner und bieten alles, was ein moderner Arbeitsplatz braucht. Schlüsselfertig und sofort einsatzbereit.
                            </p>
                            <div className="p-4 bg-[#D97706]/10 border-l-4 border-[#D97706]">
                                <p className="font-mono text-sm text-[#9CA3AF]">
                                    <strong className="text-white">Hinweis Baugenehmigung:</strong> Je nach Standort kann eine Baugenehmigung erforderlich sein. Wir unterstützen dich bei der Klärung.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto min-h-[300px] order-1 md:order-2">
                            <img
                                src="/Prefabricated-Office-Container.webp"
                                alt="Office-Container Innenansicht mit modernem Arbeitsplatz"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                </section>

                {/* Audience */}
                <section className="pb-16 md:pb-24">
                    <h2 className="text-2xl md:text-3xl font-display font-black uppercase mb-4 tracking-tight">Flexibel arbeiten &ndash; ohne Kompromisse</h2>
                    <div className="w-16 h-1 bg-[#D97706] mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {audiences.map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <h4 className="font-display font-black uppercase mb-3 text-xl">{item.title}</h4>
                                <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Delivery info */}
                <section className="pb-16 md:pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: 'Beratung', desc: 'Wir klären Zufahrt, Untergrund, Stellfläche und alle Details im Vorfeld.' },
                            { num: '02', title: 'Lieferung per LKW', desc: 'Der Container wird per LKW angeliefert und mit einem Kran platziert.' },
                            { num: '03', title: 'Sofort bezugsbereit', desc: 'Strom anschließen, einziehen, losarbeiten. So einfach ist das.' },
                        ].map((step) => (
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
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-4">Interesse an einem Office-Container?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Erzähl uns, was du brauchst &ndash; wir erstellen dir ein unverbindliches Angebot.</p>
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

export default OfficeContainer;
