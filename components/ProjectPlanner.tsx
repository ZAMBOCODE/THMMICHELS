import React, { useState } from 'react';

const ProjectPlanner: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    mobility: '',
    features: [] as string[],
    contact: { name: '', email: '', message: '' }
  });

  const categories = [
    { id: 'event', label: 'Event-Hub', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'office', label: 'Office-Modul', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'nudie', label: 'Base-Unit', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { id: 'trailer', label: 'Saris Trailer', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
  ];

  const mobilityOptions = [
    { id: 'stationary', label: 'Stationär', desc: 'Feste Aufstellung vor Ort.' },
    { id: 'trailer', label: 'Mobil (Trailer)', desc: 'Maximale Flexibilität.' }
  ];

  const featureOptions = [
    { id: 'hydraulics', label: 'Hydraulische Öffnung' },
    { id: 'insulation', label: 'Premium Dämmung' },
    { id: 'interior', label: 'Individual Interior' },
    { id: 'smart', label: 'Smart-Home Steuerung' },
    { id: 'klima', label: 'Klimatisierung' },
    { id: 'solar', label: 'Solar-Autarkie' }
  ];

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const toggleFeature = (fId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(fId)
        ? prev.features.filter(f => f !== fId)
        : [...prev.features, fId]
    }));
  };

  const handleSubmit = () => {
    // Build mailto link as fallback (no backend needed)
    const subject = encodeURIComponent(`Neue Projekt-Anfrage: ${formData.category}`);
    const body = encodeURIComponent(
      `Name: ${formData.contact.name}\n` +
      `Email: ${formData.contact.email}\n` +
      `Kategorie: ${formData.category}\n` +
      `Mobilität: ${formData.mobility}\n` +
      `Features: ${formData.features.join(', ')}\n\n` +
      `Nachricht:\n${formData.contact.message}`
    );

    // Open mailto
    window.location.href = `mailto:info@thm-michels.de?subject=${subject}&body=${body}`;

    // Show success state
    setIsSubmitted(true);
  };

  return (
    <section id="project-planner" className="py-24 bg-[#0F0F0F] relative">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-[#0F0F0F] border border-white/10 p-8 md:p-16 shadow-2xl">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-display font-black uppercase tracking-tight leading-none mb-2">Du hast eine Idee?</h2>
                <p className="text-[#9CA3AF] font-mono text-sm">Lass uns darüber reden. Wir finden die beste Lösung.</p>
              </div>
              <span className="font-mono text-[#D97706] text-sm whitespace-nowrap">STEP_0{step} / 04</span>
            </div>

            <div className="w-full h-1 bg-white/5 relative">
              <div
                className="absolute top-0 left-0 h-full bg-[#D97706] transition-[width] duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="min-h-[400px]">
            {step === 1 && (
              <div className="space-y-6">
                <h4 className="text-xl font-display font-black uppercase mb-8">Kategorie wählen</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map(c => (
                    <button
                      key={c.id}
                      onClick={() => { setFormData({ ...formData, category: c.id }); handleNext(); }}
                      className={`p-6 border flex flex-col items-center gap-4 transition-[border-color,background-color,color] ${formData.category === c.id ? 'border-[#D97706] bg-[#D97706]/5' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <svg className="h-8 w-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} />
                      </svg>
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h4 className="text-xl font-display font-black uppercase mb-8">Mobilitäts-Anforderung</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mobilityOptions.map(m => (
                    <button
                      key={m.id}
                      onClick={() => { setFormData({ ...formData, mobility: m.id }); handleNext(); }}
                      className={`p-8 border text-left transition-[border-color,background-color,color] ${formData.mobility === m.id ? 'border-[#D97706] bg-[#D97706]/5' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <h5 className="font-display font-black uppercase text-lg mb-2">{m.label}</h5>
                      <p className="font-mono text-xs text-[#9CA3AF]">{m.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h4 className="text-xl font-display font-black uppercase mb-8">Features & Technik</h4>
                <div className="grid grid-cols-2 gap-4">
                  {featureOptions.map(f => (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-4 border text-left font-mono text-[10px] uppercase tracking-widest transition-[border-color,background-color,color] ${formData.features.includes(f.id) ? 'border-[#D97706] text-[#D97706]' : 'border-white/10 text-[#9CA3AF]'}`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
                <button onClick={handleNext} className="mt-8 bg-[#D97706] text-white px-8 py-4 font-black text-sm uppercase tracking-widest w-full">Konfiguration Bestätigen</button>
              </div>
            )}

            {step === 4 && !isSubmitted && (
              <div className="space-y-6">
                <h4 className="text-xl font-display font-black uppercase mb-8">Kontakt Details</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="planner-name" className="sr-only">Name / Unternehmen</label>
                    <input
                      id="planner-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Name / Unternehmen\u2026"
                      className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] transition-colors"
                      value={formData.contact.name}
                      onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, name: e.target.value } })}
                    />
                  </div>
                  <div>
                    <label htmlFor="planner-email" className="sr-only">E-Mail-Adresse</label>
                    <input
                      id="planner-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      spellCheck={false}
                      placeholder="deine@email.de"
                      className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] transition-colors"
                      value={formData.contact.email}
                      onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })}
                    />
                  </div>
                  <div>
                    <label htmlFor="planner-message" className="sr-only">Nachricht</label>
                    <textarea
                      id="planner-message"
                      name="message"
                      rows={4}
                      placeholder="Erzähl uns von deiner Idee\u2026"
                      className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-white placeholder-white/30 focus:border-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] transition-colors"
                      value={formData.contact.message}
                      onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, message: e.target.value } })}
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="btn-press mt-8 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 font-black text-sm uppercase tracking-widest w-full transition-colors duration-300"
                >
                  Anfrage Absenden
                </button>
              </div>
            )}

            {isSubmitted && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#D97706] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-display font-black uppercase mb-4">Anfrage gesendet!</h4>
                <p className="font-mono text-[#9CA3AF] text-sm mb-8">
                  Dein E-Mail-Programm sollte sich geöffnet haben.<br />
                  Falls nicht, schreib uns direkt an: <a href="mailto:info@thm-michels.de" className="text-[#D97706]">info@thm-michels.de</a>
                </p>
                <button
                  onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ category: '', mobility: '', features: [], contact: { name: '', email: '', message: '' } }); }}
                  className="text-[#D97706] font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Neue Anfrage starten
                </button>
              </div>
            )}
          </div>

          {step > 1 && (
            <button onClick={handleBack} className="mt-8 text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">
              Zurück zum Vorherigen Schritt
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPlanner;
