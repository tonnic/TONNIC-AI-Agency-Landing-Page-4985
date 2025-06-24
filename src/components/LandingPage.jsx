import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import HowItWorks from './HowItWorks';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;