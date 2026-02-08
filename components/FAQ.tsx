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
    question: "Welche Genehmigungen brauche ich für einen Container?",
    answer: "Das hängt vom Standort und der Nutzung ab. Für mobile Event-Container auf Anhängern benötigen Sie meist nur eine Straßenzulassung. Für fest installierte Container kann eine Baugenehmigung erforderlich sein. Wir beraten Sie gerne zu Ihrem spezifischen Fall."
  },
  {
    question: "Sind die Container wetterfest und isoliert?",
    answer: "Ja, alle unsere Container sind vollständig wetterfest. Je nach Einsatzzweck bieten wir verschiedene Isolierungsoptionen an – von der Basisvariante bis zur Vollwärmeisolierung für ganzjährigen Einsatz."
  },
  {
    question: "Kann ich einen Container auch mieten statt kaufen?",
    answer: "Ja, wir bieten auch Mietoptionen für Event-Container und Anhänger an. Ideal für einmalige Veranstaltungen oder zum Testen, bevor Sie sich für einen Kauf entscheiden."
  },
  {
    question: "Wie wird der Container geliefert?",
    answer: "Container auf Anhängern können Sie selbst abholen oder wir liefern deutschlandweit. Größere Container werden per Spezialtransport geliefert und bei Bedarf vor Ort mit einem Kran positioniert."
  },
  {
    question: "Welche Zahlungsmöglichkeiten gibt es?",
    answer: "Wir bieten flexible Zahlungsoptionen: Anzahlung bei Auftragserteilung, Zwischenzahlung bei Fertigstellung des Rohbaus und Restzahlung bei Übergabe. Auf Wunsch auch Finanzierung oder Leasing."
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
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ FAQ ]</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-6">
            Häufig gestellte<br />Fragen
          </h3>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Container und den Bestellprozess.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="scroll-animate border border-white/10 hover:border-[#D97706]/30 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="font-display font-bold text-lg pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 border border-[#D97706] flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-4 h-4 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-[#9CA3AF] font-mono text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-animate">
          <p className="text-[#9CA3AF] font-mono text-sm mb-4">
            Noch Fragen? Wir helfen gerne weiter.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 text-[#D97706] hover:text-white transition-colors font-mono text-sm"
          >
            Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
