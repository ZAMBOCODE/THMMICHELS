import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://formsubmit.co/ajax/info@thm-michels.de', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    _subject: `Neue Anfrage von ${formData.name} – ${formData.service || 'Allgemein'}`,
                }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="pt-32 pb-24 bg-[#0F0F0F] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ KONTAKT ]</h2>
                    <h1 className="text-3xl md:text-4xl font-display font-black uppercase mb-6 leading-tight">Schreib uns oder<br />komm vorbei</h1>
                    <p className="font-mono text-[#9CA3AF] max-w-2xl text-lg leading-relaxed">
                        Wir freuen uns auf dein Projekt. Ruf an, schreib eine Mail oder besuche uns direkt in Waiblingen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Form + Info */}
                    <div className="space-y-10">
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="border border-white/10 p-8 space-y-6">
                            <h3 className="font-display font-black uppercase text-lg mb-2">Projekt anfragen</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none transition-colors"
                                        placeholder="Dein Name"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">E-Mail *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none transition-colors"
                                        placeholder="deine@email.de"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none transition-colors"
                                        placeholder="+49 ..."
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Leistung</label>
                                    <select
                                        value={formData.service}
                                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white focus:border-[#D97706] focus:outline-none transition-colors"
                                    >
                                        <option value="" className="bg-[#1A1A1A]">Bitte wählen</option>
                                        <option value="Event-Container" className="bg-[#1A1A1A]">Event-Container</option>
                                        <option value="Office-Container" className="bg-[#1A1A1A]">Office-Container</option>
                                        <option value="Nudie-Container" className="bg-[#1A1A1A]">Nudie-Container</option>
                                        <option value="Anhänger mieten" className="bg-[#1A1A1A]">Anhänger mieten</option>
                                        <option value="Sonstiges" className="bg-[#1A1A1A]">Sonstiges</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Nachricht *</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none transition-colors resize-none"
                                    placeholder="Erzähl uns von deinem Projekt..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-[#D97706] hover:bg-[#B45309] disabled:opacity-50 text-white px-8 py-4 font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
                            >
                                {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
                            </button>

                            {status === 'success' && (
                                <p className="font-mono text-sm text-green-400 text-center">
                                    Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24h.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="font-mono text-sm text-red-400 text-center">
                                    Fehler beim Senden. Bitte versuche es erneut oder schreib direkt an info@thm-michels.de
                                </p>
                            )}
                        </form>

                        {/* Quick Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-white/10 p-6 hover:border-[#D97706]/50 transition-colors">
                                <h3 className="font-display font-black uppercase text-sm mb-2">Telefon</h3>
                                <a href="tel:+491702847337" className="font-mono text-[#9CA3AF] text-sm hover:text-[#D97706] transition-colors">
                                    +49 170 2847337
                                </a>
                            </div>
                            <div className="border border-white/10 p-6 hover:border-[#D97706]/50 transition-colors">
                                <h3 className="font-display font-black uppercase text-sm mb-2">E-Mail</h3>
                                <a href="mailto:info@thm-michels.de" className="font-mono text-[#9CA3AF] text-sm hover:text-[#D97706] transition-colors">
                                    info@thm-michels.de
                                </a>
                            </div>
                            <div className="border border-white/10 p-6 hover:border-[#D97706]/50 transition-colors">
                                <h3 className="font-display font-black uppercase text-sm mb-2">Adresse</h3>
                                <p className="font-mono text-[#9CA3AF] text-xs leading-relaxed">
                                    Seewiesenstraße 18<br />71334 Waiblingen
                                </p>
                            </div>
                            <div className="border border-white/10 p-6 hover:border-[#D97706]/50 transition-colors">
                                <h3 className="font-display font-black uppercase text-sm mb-2">Öffnungszeiten</h3>
                                <p className="font-mono text-[#9CA3AF] text-xs leading-relaxed">
                                    Mo–Fr 08–18 Uhr<br />Sa 10–15 Uhr
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Google Maps */}
                    <div className="h-full min-h-[500px] lg:min-h-full">
                        <div className="border border-white/10 h-full overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.5!2d9.31!3d48.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799b0c8d4c9f8a7%3A0x1234567890abcdef!2sSeewiesenstra%C3%9Fe%2018%2C%2071334%20Waiblingen!5e0!3m2!1sde!2sde!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="THM Michels Standort"
                                className="absolute inset-0"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 bg-[#0F0F0F]/90 backdrop-blur-sm border border-white/10 px-4 py-2">
                                <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-widest">[ STANDORT: WAIBLINGEN ]</span>
                            </div>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Seewiesenstraße+18,+71334+Waiblingen,+Germany"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-3 font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)] flex items-center gap-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                                </svg>
                                Route berechnen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
