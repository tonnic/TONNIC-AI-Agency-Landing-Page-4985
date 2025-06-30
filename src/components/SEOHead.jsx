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
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta name="theme-color" content="#eab308" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="TONNIC AI Agency - AI Solutions for Business" />
      <meta property="og:site_name" content="TONNIC AI Agency" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content="TONNIC AI Agency - AI Solutions for Business" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="TONNIC AI Agency" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="CA" />
      <meta name="geo.country" content="Canada" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="" />
      <meta name="business:contact_data:locality" content="" />
      <meta name="business:contact_data:region" content="Canada" />
      <meta name="business:contact_data:postal_code" content="" />
      <meta name="business:contact_data:country_name" content="Canada" />
      <meta name="business:contact_data:email" content="hello@tonnic.ai" />
      <meta name="business:contact_data:phone_number" content="+1-888-292-5513" />
      <meta name="business:contact_data:website" content="https://tonnic.agency" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com" />
      <link rel="preconnect" href="https://cal.com" />
      <link rel="preconnect" href="https://api1.tonnic.ai" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      
      {/* Resource Hints */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" as="style" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" as="style" />
    </Helmet>
  );
};

export default SEOHead;