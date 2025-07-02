import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';

const { FiArrowLeft, FiLink, FiCalendar, FiX, FiZap, FiExternalLink } = FiIcons;

const APIIntegrations = () => {
  const navigate = useNavigate();
  const [showCalModal, setShowCalModal] = useState(false);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (showCalModal) {
        console.log('APIIntegrations: Received globalEscape event, closing cal modal');
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
    title: "API Integrations",
    subtitle: "n8n Preferred - Connect Your Business Ecosystem",
    description: "Integrate all your business tools and systems with our robust API solutions for seamless data flow and workflow automation. We specialize in n8n as our preferred automation platform, while also supporting Zapier, Make, and Pabbly Connect to meet your specific integration needs.",
    automationPlatforms: [
      {
        name: "n8n",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779813044-n8nfavicon.png",
        url: "https://n8n.io/",
        partnerStatus: "preferred"
      },
      {
        name: "Zapier",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779820203-zapierfavicon.png",
        url: "https://zapier.com/",
        partnerStatus: "solution_partner"
      },
      {
        name: "Make",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779815427-makefavicon.jpg",
        url: "https://www.make.com/en/register?pc=tonnic",
        partnerStatus: "standard"
      },
      {
        name: "Pabbly Connect",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779817990-pablyfavicon.png",
        url: "https://www.pabbly.com/connect/",
        partnerStatus: "standard"
      }
    ],
    preferredPlatform: "n8n",
    benefits: [
      "n8n Expertise - Advanced workflows with our preferred open-source platform",
      "Zapier Solution Partner - Certified expertise for complex automation workflows",
      "Multi-Platform Support - Work with n8n, Zapier, Make, and Pabbly Connect as needed",
      "Unified Data - Single source of truth across all systems",
      "Automated Workflows - Eliminate manual data entry and repetitive tasks",
      "Real-time Sync - Instant updates across all platforms and applications",
      "Scalable Architecture - Grows with your business needs and complexity",
      "Secure Connections - Enterprise-grade security protocols and data protection"
    ],
    howItWorks: [
      "Analyze your current system architecture and integration requirements",
      "Design custom API connections and automated workflows using n8n or other platforms",
      "Implement secure data synchronization between all business systems",
      "Create complex automation chains that trigger across multiple applications",
      "Test and optimize integration performance for reliability and speed",
      "Provide comprehensive documentation and staff training",
      "Deliver ongoing monitoring, maintenance, and support"
    ],
    useCases: [
      "CRM and Marketing Automation - Sync leads, contacts, and campaigns across platforms",
      "E-commerce Platform Integration - Connect inventory, orders, and customer data",
      "Financial System Consolidation - Automate invoicing, payments, and reporting",
      "HR and Employee Management - Connect payroll, time tracking, and performance systems",
      "Customer Support Workflows - Integrate ticketing systems with communication tools",
      "Sales Pipeline Automation - Connect CRM, email, and proposal generation tools",
      "Data Analytics Integration - Centralize data from multiple sources for reporting",
      "Custom Business Application Connections - Link proprietary systems with third-party tools"
    ]
  };

  // Function to get partner status display text
  const getPartnerStatusText = (platform) => {
    switch (platform.partnerStatus) {
      case 'preferred':
        return `${platform.name} (Preferred)`;
      case 'solution_partner':
        return `${platform.name} (Solution Partner)`;
      default:
        return platform.name;
    }
  };

  // Function to get partner status styling
  const getPartnerStatusStyle = (platform, isPreferred) => {
    if (isPreferred) {
      return 'bg-yellow-500 text-slate-800 border-yellow-500';
    }
    switch (platform.partnerStatus) {
      case 'solution_partner':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-600';
      default:
        return 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600';
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "API Integrations",
    "description": "Seamless integration with business systems using n8n, Zapier, Make, and Pabbly Connect for workflow automation",
    "provider": {
      "@type": "Organization",
      "name": "TONNIC AI Agency",
      "url": "https://tonnic.agency"
    },
    "serviceType": "API Integration Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "API Integration Features",
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
        title="API Integrations - TONNIC AI Agency | n8n & Zapier Automation Solutions"
        description="Connect your business ecosystem with robust API integrations. n8n preferred partner with Zapier solution partner expertise for seamless workflow automation."
        keywords="API integrations, n8n automation, Zapier solutions, business automation, workflow integration, system connections"
        canonicalUrl="https://tonnic.agency/#/apiintegrations"
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
                  <SafeIcon icon={FiLink} className="w-8 h-8 text-slate-800" />
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
              {/* Automation Platforms */}
              <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-100/10 rounded-xl transition-colors duration-200">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-yellow-200 mb-4 flex items-center transition-colors duration-200">
                  <SafeIcon icon={FiZap} className="w-6 h-6 mr-3 text-yellow-500" />
                  Automation Platforms
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {serviceData.automationPlatforms.map((platform, index) => {
                    const isPreferred = platform.name === serviceData.preferredPlatform;
                    return (
                      <a
                        key={index}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-3 rounded-lg font-medium border transition-all duration-200 flex items-center hover:scale-105 hover:shadow-md group cursor-pointer min-h-[60px] ${getPartnerStatusStyle(platform, isPreferred)}`}
                        aria-label={`Visit ${platform.name} website (opens in new tab)`}
                      >
                        <img
                          src={platform.favicon}
                          alt={`${platform.name} logo`}
                          className="w-5 h-5 mr-3 flex-shrink-0"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div className="flex-1 min-w-0">
                          <span className="group-hover:opacity-90 transition-opacity duration-200 block truncate">
                            {getPartnerStatusText(platform)}
                          </span>
                        </div>
                        <SafeIcon icon={FiExternalLink} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-3 text-xs text-slate-500 dark:text-yellow-200/80 transition-colors duration-200">
                  <SafeIcon icon={FiExternalLink} className="w-3 h-3 mr-1 inline" aria-hidden="true" />
                  Click any platform to learn more • Solution Partner indicates certified expertise
                </div>
              </div>

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
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book Your API Integration Consultation</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation to discuss your integration needs</p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book an API integration consultation with TONNIC"
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

export default APIIntegrations;