import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "TONNIC AI Agency - AI Solutions That Make Your Business Buzz",
  description = "Transform your business with cutting-edge AI voice agents, chatbots, automation, and website design services. 24/7 AI support, faster response times, and scalable solutions.",
  keywords = "AI voice agents, AI chatbots, business automation, website design, artificial intelligence, voice AI, customer service AI, lead generation, TONNIC",
  canonicalUrl = "https://tonnic.agency",
  ogImage = "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png",
  schemaData = null
}) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TONNIC AI Agency",
    "description": "AI solutions including voice agents, chatbots, and business automation",
    "url": "https://tonnic.agency",
    "logo": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-292-5513",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/tonnicagency"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI Business Solutions",
        "description": "AI voice agents, chatbots, website design, and business automation services"
      }
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="TONNIC AI Agency" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="TONNIC AI Agency" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com" />
    </Helmet>
  );
};

export default SEOHead;