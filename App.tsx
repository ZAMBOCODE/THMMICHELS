import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './src/pages/Home';
import EventContainer from './src/pages/services/EventContainer';
import OfficeContainer from './src/pages/services/OfficeContainer';
import NudieContainer from './src/pages/services/NudieContainer';
import TrailerRental from './src/pages/services/TrailerRental';
import Gallery from './src/pages/Gallery';
import Partner from './src/pages/Partner';
import AboutPage from './src/pages/About';
import Contact from './src/pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to ensure pages start at top
const ScrollHandler = () => {
  return <ScrollToTop />;
};

function App() {
  return (
    <Router>
      <div className="relative bg-[#0F0F0F] min-h-screen text-white">
        <ScrollHandler />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen/event-container" element={<EventContainer />} />
          <Route path="/leistungen/office-container" element={<OfficeContainer />} />
          <Route path="/leistungen/nudie-container" element={<NudieContainer />} />
          <Route path="/leistungen/anhaenger-mieten" element={<TrailerRental />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
