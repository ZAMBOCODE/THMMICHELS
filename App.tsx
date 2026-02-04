
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import ProjectPlanner from './components/ProjectPlanner';
import Footer from './components/Footer';

function App() {
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
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <div className="scroll-reveal"><BentoGrid /></div>
        <div className="scroll-reveal"><Process /></div>
        <div className="scroll-reveal"><CaseStudy /></div>
        <div className="scroll-reveal"><About /></div>
        <div id="project-planner-container" className="scroll-reveal"><ProjectPlanner /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
