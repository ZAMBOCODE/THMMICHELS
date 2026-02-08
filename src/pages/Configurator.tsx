import React from 'react';

const ConfiguratorPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-[#0F0F0F] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ 3D KONFIGURATOR ]</h2>
                    <h1 className="text-3xl md:text-4xl font-display font-black uppercase mb-6 leading-tight">
                        Gestalte <span className="relative inline-block">deinen<span className="absolute left-0 bottom-0 w-full h-1 bg-[#D97706] origin-left animate-[underline_1s_ease-out_forwards]"></span></span><br />Traumcontainer
                    </h1>
                    <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
                        Nutze unseren interaktiven 3D-Konfigurator, um deinen Container nach deinen Wünschen zu gestalten.
                        Wähle Größe, Farbe, Ausstattung und mehr.
                    </p>
                </div>

                {/* Configurator Embed */}
                <div className="border-2 border-[#D97706] overflow-hidden mb-12">
                    <iframe
                        src="https://container-configurator-nu.vercel.app/embed?theme=dark"
                        width="100%"
                        height="800"
                        style={{ border: 'none' }}
                        allow="clipboard-write"
                        title="THM Michels 3D Konfigurator"
                    />
                </div>

                {/* Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                        <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center mb-6">
                            <span className="font-display font-black text-[#D97706]">01</span>
                        </div>
                        <h3 className="font-display font-black uppercase text-lg mb-3">Konfigurieren</h3>
                        <p className="font-mono text-[#9CA3AF] text-sm leading-relaxed">
                            Wähle Größe, Farbe und Ausstattung deines Containers im 3D-Konfigurator.
                        </p>
                    </div>

                    <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                        <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center mb-6">
                            <span className="font-display font-black text-[#D97706]">02</span>
                        </div>
                        <h3 className="font-display font-black uppercase text-lg mb-3">Anfrage senden</h3>
                        <p className="font-mono text-[#9CA3AF] text-sm leading-relaxed">
                            Nach der Konfiguration kannst du eine unverbindliche Anfrage an uns senden.
                        </p>
                    </div>

                    <div className="border border-white/10 p-8 hover:border-[#D97706]/50 transition-colors">
                        <div className="w-12 h-12 border border-[#D97706] flex items-center justify-center mb-6">
                            <span className="font-display font-black text-[#D97706]">03</span>
                        </div>
                        <h3 className="font-display font-black uppercase text-lg mb-3">Angebot erhalten</h3>
                        <p className="font-mono text-[#9CA3AF] text-sm leading-relaxed">
                            Wir melden uns innerhalb von 24 Stunden mit einem detaillierten Angebot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfiguratorPage;
