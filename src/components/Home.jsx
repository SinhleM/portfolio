// src/components/Home.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
// import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;