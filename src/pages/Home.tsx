import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import BentoGrid from '../../components/BentoGrid';
import Process from '../../components/Process';
import CaseStudy from '../../components/CaseStudy';
import About from '../../components/About';
import FAQ from '../../components/FAQ';
import { TestimonialsSection } from '../../components/testimonials-marquee';

const testimonials = [
    {
        author: {
            name: "Hans Weber",
            handle: "Logistikleiter, DHL Express",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "Die Transformation unserer alten Seecontainer in mobile Büroeinheiten war ein voller Erfolg. THM Michels hat unsere Erwartungen übertroffen.",
    },
    {
        author: {
            name: "Sarah Müller",
            handle: "CEO, EventSpace Berlin",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "Einzigartiges Design und kompromisslose Qualität. Unsere Event-Container sind jetzt das Highlight jeder Veranstaltung.",
    },
    {
        author: {
            name: "Marcus Schmidt",
            handle: "Architekt",
            avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=face"
        },
        text: "Als Architekt schätze ich die präzise Umsetzung und das Auge fürs Detail. Eine echte Aufwertung für jedes modulare Bauprojekt.",
    },
    {
        author: {
            name: "Julia Bauer",
            handle: "Start-up Gründerin",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "Von der Planung bis zur Auslieferung lief alles perfekt. Mein Pop-up Store Container ist ein absoluter Kundenmagnet.",
    }
];

const Home: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.scroll-reveal, .scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <SEO
                title="Individuelle Container & Event-Trailer aus Waiblingen"
                description="THM Michels baut individuelle Event-Container, Office-Container und Gastronomie-Trailer in Waiblingen. Maßanfertigung, 3D-Konfigurator, persönliche Beratung. Made in Germany, 2 Jahre Garantie."
                canonical="https://thm-michels.de/"
            />
            <Hero />
            <div className="scroll-animate"><BentoGrid /></div>
            <div className="scroll-animate"><Process /></div>
            <div className="scroll-animate"><CaseStudy /></div>
            <div className="scroll-animate"><About /></div>
            {/* Office Container CTA - Hero Style */}
            <div className="scroll-animate">
              <section className="relative min-h-[50dvh] md:min-h-[70dvh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/Prefabricated-Office-Container.webp"
                    alt="Vollausgestatteter Office-Container – dein Büro, überall"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  {isDark && <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0F0F0F]/50 to-[#0F0F0F]/90 z-10"></div>}
                  {isDark && <div className="absolute inset-0 bg-[#0F0F0F]/20 z-[5]"></div>}
                  {isDark && <div className="absolute inset-0 blueprint-grid opacity-20 z-20 pointer-events-none"></div>}
                </div>

                <div className="relative z-30 w-full px-6 md:px-12 lg:px-20 text-white">
                  <div className="max-w-xl">
                    <div className="inline-block px-4 py-1 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                      <span className="font-mono text-xs text-[#D97706] uppercase tracking-[0.3em] font-bold">Office-Container</span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none mb-6 uppercase tracking-tighter text-white">
                      Dein Büro.<br />
                      <span className="text-[#D97706] drop-shadow-[0_10px_10px_rgba(217,119,6,0.2)]">Überall.</span>
                    </h3>

                    <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-8 max-w-md">
                      Vollausgestattete Office-Container mit Küche, Klimaanlage und WC &ndash; schlüsselfertig geliefert, sofort bezugsbereit.
                    </p>

                    <Link
                      to="/leistungen/office-container"
                      className="btn-press inline-block bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 md:px-10 md:py-5 font-black text-xs md:text-sm uppercase tracking-widest transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)]"
                    >
                      Mehr erfahren
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 hidden lg:block z-30 opacity-50 font-mono text-[10px]">
                  <div className="mb-2">[ OFFICE_MODULE ]</div>
                  <div>READY_TO_DEPLOY</div>
                </div>
              </section>
            </div>
            {/* Configurator CTA - Hero Style */}
            <div className="scroll-animate">
              <section id="configurator" className="relative min-h-[60dvh] md:min-h-[80dvh] flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/configurator-hero.png"
                    alt="THM Michels interaktiver 3D Container Konfigurator – Größe, Farbe und Ausstattung wählen"
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover object-left"
                  />
                  {isDark && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F0F0F]/40 to-[#0F0F0F]/90 z-10"></div>}
                  {isDark && <div className="absolute inset-0 bg-[#0F0F0F]/30 z-[5]"></div>}
                  {isDark && <div className="absolute inset-0 blueprint-grid opacity-20 z-20 pointer-events-none"></div>}
                </div>

                {/* Content - Right Aligned */}
                <div className="relative z-30 w-full px-6 md:px-12 lg:px-20 text-white">
                  <div className="ml-auto max-w-xl text-right">
                    <div className="inline-block px-4 py-1 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                      <span className="font-mono text-xs text-[#D97706] uppercase tracking-[0.3em] font-bold">3D Konfigurator</span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none mb-6 md:mb-8 uppercase tracking-tighter text-white">
                      Bau deinen<br />eigenen<br />
                      <span className="text-[#D97706] drop-shadow-[0_10px_10px_rgba(217,119,6,0.2)]">Container.</span>
                    </h3>

                    <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-8 ml-auto max-w-md">
                      Nutze unseren interaktiven 3D-Konfigurator und stelle deinen Traumcontainer zusammen – Größe, Farbe und Ausstattung, alles nach deinen Wünschen.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Link
                        to="/konfigurator"
                        className="btn-press bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 md:px-10 md:py-5 font-black text-xs md:text-sm uppercase tracking-widest transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)] text-center"
                      >
                        Jetzt konfigurieren
                      </Link>
                      <Link
                        to="/kontakt"
                        className="btn-press px-6 py-3 md:px-10 md:py-5 border border-white/20 hover:border-white/40 font-black text-xs md:text-sm uppercase tracking-widest transition-[border-color,background-color] duration-300 bg-white/5 backdrop-blur-sm text-center"
                      >
                        Beratung anfragen
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blueprint Labels */}
                <div className="absolute bottom-8 left-8 hidden lg:block z-30 opacity-50 font-mono text-[10px]">
                  <div className="mb-2">[ INTERACTIVE_3D_MODEL ]</div>
                  <div>KONFIGURATOR_V2.0</div>
                </div>
                <div className="absolute bottom-8 right-8 hidden lg:block z-30 opacity-50 font-mono text-[10px] text-right">
                  <div className="mb-2">SPEC: CUSTOM_BUILD</div>
                  <div>MODE: REALTIME_RENDER</div>
                </div>
              </section>
            </div>
            <TestimonialsSection
                    title="Vertrauen durch Exzellenz"
                    description="Was unsere Partner über die Zusammenarbeit sagen."
                    testimonials={testimonials}
                />
            <div className="scroll-animate"><FAQ /></div>
        </main>
    );
};

export default Home;
