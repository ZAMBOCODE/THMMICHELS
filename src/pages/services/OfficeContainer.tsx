import React from 'react';
import { Link } from 'react-router-dom';

const OfficeContainer: React.FC = () => {
    const features = [
        'Vollständig eingerichtete Küche',
        'Klimaanlage für Sommer und Winter',
        '2 WC-Einheiten',
        'Elektroinstallation und Beleuchtung',
        'Isolierung für ganzjährigen Einsatz',
        'Sofort bezugsbereit nach Aufstellung',
    ];

    const audiences = [
        { title: 'Freelancer & Selbstständige', desc: 'Dein eigenes Büro im Garten, ohne Anbau und ohne Bürokratie-Marathon' },
        { title: 'Kleine Unternehmen', desc: 'Zusätzlicher Büroraum, schnell verfügbar und flexibel erweiterbar' },
        { title: 'Baustellen & Projekte', desc: 'Professionelle Baustellenbüros mit echtem Komfort' },
        { title: 'Home-Office-Alternative', desc: 'Arbeitsplatz und Zuhause getrennt, aber nur wenige Schritte entfernt' },
    ];

    return (
        <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-12 md:mb-20">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ OFFICE-CONTAINER ]</h2>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase mb-6 md:mb-8 leading-tight">Dein Büro. Überall.</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-3xl text-lg leading-relaxed">
                        Vollausgestattete Office-Container mit Küche, Klimaanlage und sanitären Anlagen – schlüsselfertig geliefert, sofort bezugsbereit. Die smarte Alternative zum klassischen Büro.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-8 tracking-tight">Komplett ausgestattet – nicht nur vier Wände</h3>
                    <p className="font-mono text-[#9CA3AF] mb-12 max-w-2xl">
                        Unsere Office-Container kommen über unseren holländischen Partner und bieten alles, was ein moderner Arbeitsplatz braucht:
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

                {/* Audience */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-12 tracking-tight">Flexibel arbeiten – ohne Kompromisse</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {audiences.map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 hover:border-[#D97706]/50 transition-colors">
                                <h4 className="font-display font-black uppercase mb-3 text-xl">{item.title}</h4>
                                <p className="font-mono text-sm text-[#9CA3AF]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery */}
                <div className="mb-24 p-8 border border-white/10">
                    <h3 className="text-2xl font-display font-black uppercase mb-4 tracking-tight">Wie kommt der Container zu dir?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-6 leading-relaxed">
                        Die Office-Container werden per LKW geliefert und mit einem Kran an deinem Wunschort platziert. Wir klären im Vorfeld alle Details – Zufahrt, Untergrund und Stellfläche – damit die Aufstellung reibungslos läuft.
                    </p>
                    <div className="p-4 bg-[#D97706]/10 border-l-4 border-[#D97706]">
                        <p className="font-mono text-sm text-[#9CA3AF]">
                            <strong className="text-white">Hinweis Baugenehmigung:</strong> Je nach Standort und geplanter Nutzung kann eine Baugenehmigung erforderlich sein. Wir unterstützen dich bei der Klärung – sprich uns einfach an.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-4">Interesse an einem Office-Container?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Erzähl uns, was du brauchst – wir erstellen dir ein unverbindliches Angebot.</p>
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

export default OfficeContainer;
