import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Partner: React.FC = () => {
    const partners = [
        {
            name: 'Holländische Container-Firma',
            description: 'Unser Partner für hochwertige Container-Rohbauten liefert innovative Lösungen direkt aus den Niederlanden. Gemeinsam realisieren wir Projekte in ganz Europa.',
            specialty: 'Container-Rohbau & Logistik',
        },
        {
            name: 'SARIS Anhänger',
            description: 'Für unsere mobilen Container-Lösungen setzen wir auf SARIS Anhänger aus Holland. Zuverlässig, langlebig und perfekt auf unsere Anforderungen abgestimmt.',
            specialty: 'Anhänger-Fahrgestelle',
        },
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0F0F0F] text-white">
            <SEO
                title="Unsere Partner | Qualität durch Zusammenarbeit"
                description="THM Michels arbeitet mit bewährten Partnern: holländische Container-Rohbauten und SARIS Anhänger. Qualität, Verlässlichkeit und Expertise für jedes Projekt."
            />
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="mb-20">
                    <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ PARTNER ]</span>
                    <h1 className="text-3xl md:text-4xl font-display font-black uppercase mb-6 leading-tight">Unsere Partner</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
                        Gute Arbeit braucht gute Partner. Wir setzen auf bewährte Zusammenarbeit mit Unternehmen, die unsere Ansprüche an Qualität teilen.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {partners.map((partner, i) => (
                        <div key={i} className="p-10 border border-white/10 hover:border-[#D97706]/50 transition-colors group">
                            <span className="font-mono text-[#D97706] text-[10px] uppercase tracking-widest block mb-4">{partner.specialty}</span>
                            <h3 className="text-2xl font-display font-black uppercase mb-4 group-hover:text-[#D97706] transition-colors">{partner.name}</h3>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed">{partner.description}</p>
                        </div>
                    ))}
                </div>

                {/* Why Partners */}
                <div className="mb-20 py-16 border-y border-white/10">
                    <h3 className="text-3xl font-display font-black uppercase mb-8 tracking-tight text-center">Warum Partnerschaften?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 border border-[#D97706] flex items-center justify-center">
                                <span className="text-[#D97706] font-display font-black text-2xl">01</span>
                            </div>
                            <h4 className="font-display font-black uppercase mb-2">Qualität</h4>
                            <p className="font-mono text-xs text-[#9CA3AF]">Geprüfte Materialien und Komponenten</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 border border-[#D97706] flex items-center justify-center">
                                <span className="text-[#D97706] font-display font-black text-2xl">02</span>
                            </div>
                            <h4 className="font-display font-black uppercase mb-2">Verlässlichkeit</h4>
                            <p className="font-mono text-xs text-[#9CA3AF]">Langjährige Zusammenarbeit</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 border border-[#D97706] flex items-center justify-center">
                                <span className="text-[#D97706] font-display font-black text-2xl">03</span>
                            </div>
                            <h4 className="font-display font-black uppercase mb-2">Expertise</h4>
                            <p className="font-mono text-xs text-[#9CA3AF]">Spezialisten auf ihrem Gebiet</p>
                        </div>
                    </div>
                </div>

                {/* Become Partner CTA */}
                <div className="text-center">
                    <h3 className="text-2xl font-display font-black uppercase mb-4">Interesse an einer Zusammenarbeit?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8">Wir sind offen für neue Partnerschaften. Lass uns sprechen.</p>
                    <Link
                        to="/kontakt"
                        className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-[background-color,transform] duration-300"
                    >
                        Kontakt aufnehmen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Partner;
