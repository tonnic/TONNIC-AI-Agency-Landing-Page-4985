import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';

const { FiArrowLeft, FiGlobe, FiCalendar, FiX } = FiIcons;

const WebsiteDesign = () => {
  const navigate = useNavigate();
  const [showCalModal, setShowCalModal] = useState(false);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (showCalModal) {
        console.log('WebsiteDesign: Received globalEscape event, closing cal modal');
        setShowCalModal(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [showCalModal]);

  const openCalModal = () => {
    setShowCalModal(true);
  };

  const closeCalModal = () => {
    setShowCalModal(false);
  };

  const serviceData = {
    title: "AI-Assisted Website Design",
    subtitle: "Modern Business Websites Built for Growth",
    description: "Create stunning, high-performance business websites with AI-assisted design and development. From concept to launch, we build modern, responsive websites tailored to your business needs with integrated tools and scalable hosting.",
    benefits: [
      "Fast Launch - Get your website live in days, not months",
      "Modern Design - Contemporary, professional designs that convert visitors",
      "Mobile Responsive - Perfect performance across all devices and screen sizes",
      "Business Tool Integrations - Seamless connection with CRM, analytics, and marketing tools",
      "Flexible Database Options - Custom data management solutions for your specific needs",
      "Secure Payment Solutions - Integrated payment processing for services",
      "Scalable Hosting - Reliable, high-performance hosting that grows with your business",
      "SEO Optimized - Built-in search engine optimization for better visibility"
    ],
    howItWorks: [
      "Consultation to understand your business goals and requirements",
      "AI-assisted design generation based on your brand and industry",
      "Custom development with modern frameworks and best practices",
      "Integration with your existing business tools and systems",
      "Comprehensive testing across devices and browsers",
      "Launch with scalable hosting and ongoing support",
      "Continuous optimization and performance monitoring"
    ],
    useCases: [
      "Business Websites - Professional corporate sites with lead generation capabilities",
      "Portfolio Sites - Creative showcases for agencies, artists, and professionals",
      "Service Companies - Professional service websites with booking and contact features",
      "Consulting Firms - Authority-building websites with case studies and testimonials",
      "Marketing Agencies - Showcase portfolios and client success stories",
      "Professional Practices - Medical, legal, and financial service websites",
      "Non-Profit Organizations - Mission-driven websites with donation capabilities",
      "Small Business Sites - Local business websites with location and contact information"
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Assisted Website Design",
    "description": "Modern business websites with AI-assisted design, responsive layouts, and integrated business tools",
    "provider": {
      "@type": "Organization",
      "name": "TONNIC AI Agency",
      "url": "https://tonnic.agency"
    },
    "serviceType": "Website Design Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Features",
      "itemListElement": serviceData.benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit.split(" - ")[0],
          "description": benefit
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Website Design & Hosting - TONNIC AI Agency | AI-Assisted Web Development"
        description="Create stunning, high-performance business websites with AI-assisted design. Modern, responsive websites with integrated tools and scalable hosting solutions."
        keywords="website design, AI-assisted web development, responsive websites, business websites, web hosting, modern web design"
        canonicalUrl="https://tonnic.agency/#/websitedesign"
        schemaData={schemaData}
      />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header />
        <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 mb-6 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
              >
                <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
                Back to Home
              </button>

              <div className="flex items-center justify-center mb-6">
                <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <SafeIcon icon={FiGlobe} className="w-8 h-8 text-slate-800" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                    {serviceData.title}
                  </h1>
                  <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold transition-colors duration-200">
                    {serviceData.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-200">
                {serviceData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-200">
                    Key Benefits
                  </h2>
                  <ul className="space-y-4">
                    {serviceData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-200">
                    How It Works
                  </h2>
                  <ol className="space-y-4">
                    {serviceData.howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-200">
                  Perfect For
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.useCases.map((useCase, index) => (
                    <div key={index} className="bg-yellow-50 dark:bg-yellow-100/10 p-4 rounded-lg transition-colors duration-200">
                      <span className="text-slate-700 dark:text-yellow-100 transition-colors duration-200">
                        {useCase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openCalModal}
                  className="flex-1 bg-yellow-500 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book a Meeting
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 transition-all duration-200"
                >
                  View All Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Cal.com Modal */}
      {showCalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="cal-modal-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative transition-colors duration-200"
          >
            <button
              onClick={closeCalModal}
              className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus:bg-slate-200 dark:focus:bg-slate-600 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 p-2 rounded-full transition-colors duration-200"
              aria-label="Close booking modal"
            >
              <SafeIcon icon={FiX} className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 transition-colors duration-200">
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book Your Website Design Consultation</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation to discuss your website needs</p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a website design consultation with TONNIC"
                className="rounded-b-2xl"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WebsiteDesign;