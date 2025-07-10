// src/App.js (or similar main layout file)
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications'; // NEW: Import Certifications
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Header /> 
        <Hero />
        <Skills />
        <Projects />
        <Certifications /> {/* NEW: Add Certifications component here */}
        <Contact />
      <Footer />
    </div>
  );
}

export default App;