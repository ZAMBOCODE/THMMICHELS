import React from 'react';

const Impressum: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-[#0F0F0F] min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4">[ RECHTLICHES ]</h2>
                <h1 className="text-3xl md:text-4xl font-display font-black uppercase mb-12">Impressum</h1>

                <div className="space-y-12 font-mono text-[#9CA3AF] text-sm leading-relaxed">
                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Angaben gemäß § 5 TMG</h3>
                        <p>
                            THM-Maxim Michels<br />
                            Seewiesenstraße 18<br />
                            71334 Waiblingen<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Kontakt</h3>
                        <p>
                            Telefon: +49 170 2847337<br />
                            E-Mail: info@thm-michels.de
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Umsatzsteuer-ID</h3>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            [USt-IdNr. hier einfügen]
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                        <p>
                            Maxim Michels<br />
                            Seewiesenstraße 18<br />
                            71334 Waiblingen
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Streitschlichtung</h3>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#D97706] hover:underline ml-1">
                                https://ec.europa.eu/consumers/odr/
                            </a>
                        </p>
                        <p className="mt-4">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Haftung für Inhalte</h3>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Haftung für Links</h3>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Urheberrecht</h3>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                            Autors bzw. Erstellers.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
