import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GlobalMascot from './components/GlobalMascot';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial 2s loading for professional feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-inner" />
          <div className="loader-text">INITIALIZING SYSTEMS...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <CustomCursor />
      
      {/* Interactive Cyber-Grid Background */}
      <InteractiveBackground />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Global Mascot Layer (TEAM AI Popping Assistant) */}
      <GlobalMascot />
    </div>
  );
}

export default App;
