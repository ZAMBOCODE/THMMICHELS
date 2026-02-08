import React, { useEffect } from 'react';
import AboutComponent from '../../components/About'; // Renaming to avoid conflict

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
            <AboutComponent />
        </div>
    );
};

export default AboutPage;
