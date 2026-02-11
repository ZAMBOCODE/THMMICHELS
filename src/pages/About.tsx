import React, { useEffect } from 'react';
import AboutComponent from '../../components/About';
import SEO from '../../components/SEO';

const AboutPage: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-20 bg-[#0F0F0F] min-h-screen">
            <SEO
                title="Über uns | THM Michels aus Waiblingen"
                description="Lerne THM Michels kennen: Maxim Michels baut seit 2020 individuelle Container und Event-Trailer in Waiblingen. Handwerkskunst, Leidenschaft und persönliche Beratung."
            />
            <AboutComponent />
        </div>
    );
};

export default AboutPage;
