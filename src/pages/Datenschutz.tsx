import React from 'react';
import SEO from '../../components/SEO';

const Datenschutz: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-[#0F0F0F] min-h-screen">
            <SEO
                title="Datenschutzerklärung"
                description="Datenschutzerklärung von THM Michels. Informationen zur Erhebung und Verarbeitung personenbezogener Daten."
                noindex
            />
            <div className="max-w-4xl mx-auto px-6">
                <span className="font-mono text-[#D97706] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">[ RECHTLICHES ]</span>
                <h1 className="text-3xl md:text-4xl font-display font-black uppercase mb-12">Datenschutz</h1>

                <div className="space-y-12 font-mono text-[#9CA3AF] text-sm leading-relaxed">
                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">1. Datenschutz auf einen Blick</h3>
                        <h4 className="text-white font-bold mt-6 mb-2">Allgemeine Hinweise</h4>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                            Sie persönlich identifiziert werden können.
                        </p>

                        <h4 className="text-white font-bold mt-6 mb-2">Datenerfassung auf dieser Website</h4>
                        <p>
                            <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                            können Sie dem Impressum dieser Website entnehmen.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">2. Hosting</h3>
                        <p>
                            Wir hosten die Inhalte unserer Website bei Vercel Inc. Anbieter ist die Vercel Inc.,
                            340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                        </p>
                        <p className="mt-4">
                            Details entnehmen Sie der Datenschutzerklärung von Vercel:
                            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#D97706] hover:underline ml-1">
                                https://vercel.com/legal/privacy-policy
                            </a>
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                        <h4 className="text-white font-bold mt-6 mb-2">Datenschutz</h4>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                            Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                            sowie dieser Datenschutzerklärung.
                        </p>

                        <h4 className="text-white font-bold mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h4>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            THM-Maxim Michels<br />
                            Seewiesenstraße 18<br />
                            71334 Waiblingen<br /><br />
                            Telefon: +49 170 2847337<br />
                            E-Mail: info@thm-michels.de
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">4. Datenerfassung auf dieser Website</h3>
                        <h4 className="text-white font-bold mt-6 mb-2">Cookies</h4>
                        <p>
                            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten
                            auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                        </p>
                        <p className="mt-4">
                            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                            Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                            ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                        </p>

                        <h4 className="text-white font-bold mt-6 mb-2">Kontaktformular</h4>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white font-display font-bold text-xl uppercase mb-4">5. Ihre Rechte</h3>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                            oder Löschung dieser Daten zu verlangen.
                        </p>
                        <p className="mt-4">
                            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                            jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                            Sie sich jederzeit an uns wenden.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
