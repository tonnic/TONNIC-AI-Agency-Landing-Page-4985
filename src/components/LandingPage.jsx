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
    "alternateName": "TONNIC",
    "description": "Leading AI solutions provider specializing in voice agents, chatbots, and business automation",
    "url": "https://tonnic.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png",
      "width": 512,
      "height": 512
    },
    "image": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-292-5513",
      "contactType": "customer service",
      "availableLanguage": ["English"],
      "hoursAvailable": "Mo-Su 00:00-23:59"
    },
    "sameAs": [
      "https://linkedin.com/company/tonnicagency"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
    "knowsAbout": ["Artificial Intelligence", "Voice Agents", "Chatbots", "Business Automation", "Website Design"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6532,
        "longitude": -79.3832
      },
      "geoRadius": "global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Business Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "24/7 intelligent voice agents for customer service and business communications",
            "provider": {
              "@type": "Organization",
              "name": "TONNIC AI Agency"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots",
            "description": "Multi-platform chatbots for lead generation and customer support",
            "provider": {
              "@type": "Organization",
              "name": "TONNIC AI Agency"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "End-to-end automation solutions for workflow optimization",
            "provider": {
              "@type": "Organization",
              "name": "TONNIC AI Agency"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Hosting", 
            "description": "AI-assisted website design and development services",
            "provider": {
              "@type": "Organization",
              "name": "TONNIC AI Agency"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEOHead
        title="TONNIC AI Agency - AI Solutions That Make Your Business Buzz"
        description="Transform your business with cutting-edge AI voice agents, chatbots, and business automation. 24/7 AI support, 70% faster response times, and unlimited scalability."
        keywords="AI voice agents, AI chatbots, business automation, website design, artificial intelligence, voice AI, customer service AI, lead generation, TONNIC, Thoughtly partner"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main">
          <Hero />
          <Services />
          <HowItWorks />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;