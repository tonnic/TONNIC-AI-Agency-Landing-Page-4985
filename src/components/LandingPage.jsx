import React from 'react';
import SEOHead from './SEOHead';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import HowItWorks from './HowItWorks';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TONNIC AI Agency",
    "description": "Leading AI solutions provider specializing in voice agents, chatbots, and business automation",
    "url": "https://tonnic.agency",
    "logo": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-292-5513",
      "contactType": "customer service",
      "availableLanguage": "English",
      "hoursAvailable": "Mo-Su 00:00-23:59"
    },
    "sameAs": [
      "https://linkedin.com/company/tonnicagency"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "offers": [
      {
        "@type": "Service",
        "name": "AI Voice Agents",
        "description": "24/7 intelligent voice agents for customer service and business communications"
      },
      {
        "@type": "Service", 
        "name": "AI Chatbots",
        "description": "Multi-platform chatbots for lead generation and customer support"
      },
      {
        "@type": "Service",
        "name": "Business Automation",
        "description": "End-to-end automation solutions for workflow optimization"
      },
      {
        "@type": "Service",
        "name": "Website Design",
        "description": "AI-assisted website design and development services"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <SEOHead 
        title="TONNIC AI Agency - AI Solutions That Make Your Business Buzz"
        description="Transform your business with cutting-edge AI voice agents, chatbots, automation, and website design. 24/7 AI support, 70% faster response times, and unlimited scalability."
        keywords="AI voice agents, AI chatbots, business automation, website design, artificial intelligence, customer service AI, lead generation, TONNIC, Thoughtly partner"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;