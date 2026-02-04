import React, { useEffect } from 'react';
import Hero from '../../components/Hero';
import BentoGrid from '../../components/BentoGrid';
import Process from '../../components/Process';
import CaseStudy from '../../components/CaseStudy';
import About from '../../components/About';
import ProjectPlanner from '../../components/ProjectPlanner';
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

        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <div className="scroll-reveal"><BentoGrid /></div>
            <div className="scroll-reveal"><Process /></div>
            <div className="scroll-reveal"><CaseStudy /></div>
            <div className="scroll-reveal"><About /></div>
            <div id="project-planner-container" className="scroll-reveal"><ProjectPlanner /></div>
            <div className="scroll-reveal">
                <TestimonialsSection
                    title="Vertrauen durch Exzellenz"
                    description="Was unsere Partner über die Zusammenarbeit sagen."
                    testimonials={testimonials}
                />
            </div>
        </main>
    );
};

export default Home;
