import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-[#0F0F0F] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ KONTAKT ]</h2>
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-6 leading-tight">Schreib uns oder<br />komm vorbei</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
                        Wir freuen uns auf dein Projekt. Ruf an, schreib eine Mail oder besuche uns direkt in Waiblingen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <div className="space-y-12">
                        {/* Address */}
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-black uppercase text-lg mb-2">Adresse</h3>
                                    <p className="font-mono text-[#9CA3AF] text-sm leading-relaxed">
                                        THM Michels GmbH<br />
                                        Am Kaltwiesenbach<br />
                                        71332 Waiblingen<br />
                                        Deutschland
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-black uppercase text-lg mb-2">Telefon</h3>
                                    <a href="tel:+491702847337" className="font-mono text-[#9CA3AF] text-sm hover:text-[#D97706] transition-colors">
                                        +49 170 2847337
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-black uppercase text-lg mb-2">E-Mail</h3>
                                    <a href="mailto:info@thm-michels.de" className="font-mono text-[#9CA3AF] text-sm hover:text-[#D97706] transition-colors">
                                        info@thm-michels.de
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-black uppercase text-lg mb-4">Öffnungszeiten</h3>
                                    <div className="space-y-2 font-mono text-sm text-[#9CA3AF]">
                                        <div className="flex justify-between"><span>Montag – Freitag</span> <span>08:00 – 18:00</span></div>
                                        <div className="flex justify-between"><span>Samstag</span> <span>10:00 – 15:00</span></div>
                                        <div className="flex justify-between"><span>Sonntag</span> <span className="text-[#D97706]">Geschlossen</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Google Maps */}
                    <div className="h-full min-h-[500px] lg:min-h-full">
                        <div className="border border-white/10 h-full overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.847!2d9.3167!3d48.8308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799b0a7a3c2f1a1%3A0x1234567890abcdef!2sWaiblingen!5e0!3m2!1sde!2sde!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="THM Michels Standort"
                                className="absolute inset-0"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 bg-[#0F0F0F]/90 backdrop-blur-sm border border-white/10 px-4 py-2">
                                <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-widest">[ STANDORT: WAIBLINGEN ]</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center border-t border-white/10 pt-16">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-4">Projekt im Kopf?</h3>
                    <p className="font-mono text-[#9CA3AF] mb-8 max-w-lg mx-auto">
                        Erzähl uns davon. Wir melden uns innerhalb von 24 Stunden bei dir.
                    </p>
                    <a
                        href="mailto:info@thm-michels.de?subject=Projektanfrage"
                        className="inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-5 font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
                    >
                        E-Mail schreiben
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
