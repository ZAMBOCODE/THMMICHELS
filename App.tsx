import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import ErrorBoundary from './components/ErrorBoundary';
import FloatingButtons from './components/FloatingButtons';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

// Lazy-loaded pages for code splitting
const Home = React.lazy(() => import('./src/pages/Home'));
const EventContainer = React.lazy(() => import('./src/pages/services/EventContainer'));
const OfficeContainer = React.lazy(() => import('./src/pages/services/OfficeContainer'));
const NudieContainer = React.lazy(() => import('./src/pages/services/NudieContainer'));
const TrailerRental = React.lazy(() => import('./src/pages/services/TrailerRental'));
const Gallery = React.lazy(() => import('./src/pages/Gallery'));
const ProjectStory = React.lazy(() => import('./src/pages/ProjectStory'));
const Partner = React.lazy(() => import('./src/pages/Partner'));
const AboutPage = React.lazy(() => import('./src/pages/About'));
const Contact = React.lazy(() => import('./src/pages/Contact'));
const ConfiguratorPage = React.lazy(() => import('./src/pages/Configurator'));
const Impressum = React.lazy(() => import('./src/pages/Impressum'));
const Datenschutz = React.lazy(() => import('./src/pages/Datenschutz'));
const Blog = React.lazy(() => import('./src/pages/Blog'));
const BlogPost = React.lazy(() => import('./src/pages/BlogPost'));
const NotFound = React.lazy(() => import('./src/pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#D97706] border-t-transparent rounded-full animate-spin"></div>
      <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-widest">Laden...</span>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="relative bg-[#0F0F0F] min-h-screen text-white">
            <ScrollToTop />
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leistungen/event-container" element={<EventContainer />} />
                <Route path="/leistungen/office-container" element={<OfficeContainer />} />
                <Route path="/leistungen/nudie-container" element={<NudieContainer />} />
                <Route path="/leistungen/anhaenger-mieten" element={<TrailerRental />} />
                <Route path="/galerie" element={<Gallery />} />
                <Route path="/galerie/:slug" element={<ProjectStory />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/ueber-uns" element={<AboutPage />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/konfigurator" element={<ConfiguratorPage />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
            <CookieBanner />
            <FloatingButtons />
            <BackToTop />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
