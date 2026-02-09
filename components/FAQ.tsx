import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wie lange dauert die Fertigung eines Containers?",
    answer: "Je nach Komplexität und Ausstattung dauert die Fertigung zwischen 4-12 Wochen. Nach der Beratung und Freigabe des Designs erstellen wir einen detaillierten Zeitplan für Ihr Projekt."
  },
  {
    question: "Kann ich den Container vor Ort besichtigen?",
    answer: "Ja, Sie können gerne unsere Werkstatt in Waiblingen besuchen und sich aktuelle Projekte anschauen. Vereinbaren Sie einfach einen Termin über unser Kontaktformular oder telefonisch."
  },
  {
    question: "Kann ich einen Container auch mieten statt kaufen?",
    answer: "Ja, wir bieten auch Mietoptionen für Event-Container und Anhänger an. Ideal für einmalige Veranstaltungen oder zum Testen, bevor Sie sich für einen Kauf entscheiden."
  },
  {
    question: "Gibt es eine Garantie auf die Container?",
    answer: "Ja, wir gewähren 2 Jahre Garantie auf alle Arbeiten und verbauten Materialien. Auf tragende Strukturen und Schweißarbeiten sogar 5 Jahre."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10 scroll-animate">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-3">[ FAQ ]</h2>
          <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight mb-4">
            Häufig gestellte Fragen
          </h3>
          <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto">
            Antworten auf die häufigsten Fragen rund um unsere Container und den Bestellprozess.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="scroll-animate border border-white/10 hover:border-[#D97706]/30 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-3.5 flex justify-between items-center text-left"
              >
                <span className="font-display font-bold text-sm pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-6 h-6 border border-[#D97706] flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-3 h-3 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-5 pb-4 text-[#9CA3AF] font-mono text-xs leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center scroll-animate">
          <p className="text-[#9CA3AF] font-mono text-xs mb-3">
            Noch Fragen? Wir helfen gerne weiter.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 text-[#D97706] hover:text-white transition-colors font-mono text-xs"
          >
            Kontakt aufnehmen
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
