import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';

const { FiArrowLeft, FiMic, FiCalendar, FiX, FiAward, FiExternalLink } = FiIcons;

const AIVoiceAgents = () => {
  const navigate = useNavigate();
  const [showCalModal, setShowCalModal] = useState(false);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (showCalModal) {
        console.log('AIVoiceAgents: Received globalEscape event, closing cal modal');
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
    title: "AI Voice Agents",
    subtitle: "Thoughtly Premier Partner - Advanced Voice AI Solutions",
    description: "Transform your phone communications with advanced AI voice agents powered by industry-leading platforms including Retell, Vapi, ElevenLabs, and Thoughtly. As a Thoughtly Premier Partner, we deliver enterprise-grade voice solutions with natural, human-like conversations tailored to your specific industry and requirements.",
    techStack: [
      {
        name: "Retell",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779529709-retellfavicon.png",
        url: "https://dashboard.retellai.com/?ref=tonnic"
      },
      {
        name: "Vapi",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779532754-vapifavicon.png",
        url: "https://vapi.ai/?aff=tonnic"
      },
      {
        name: "ElevenLabs",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779535711-elevenlabsfavicon.png",
        url: "https://try.elevenlabs.io/tonnic"
      },
      {
        name: "Thoughtly",
        favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779526113-thoughtlyfavicon.png",
        url: "https://thoughtly.com/?ref=tonnic"
      }
    ],
    partnerBadge: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750734772981-partner-badge.png",
    benefits: [
      "24/7 Availability - Never miss a call or opportunity",
      "Consistent Service - Deliver the same high-quality experience every time",
      "Scalable Solution - Handle unlimited calls simultaneously",
      "Cost Effective - Reduce staffing costs by up to 70%",
      "Instant Response - Connect with customers immediately",
      "Multi-Language Support - Serve diverse customer bases",
      "Premier Partnership - Access to latest Thoughtly features and priority support",
      "Advanced Voice Quality - Crystal-clear conversations with ElevenLabs AI voices"
    ],
    howItWorks: [
      "Customer calls your dedicated AI voice agent number",
      "AI identifies caller intent and routing requirements using advanced NLP",
      "Conducts natural conversation based on your business rules and training",
      "Captures relevant information and updates your systems in real-time",
      "Schedules follow-ups or transfers to human agents as needed",
      "Provides detailed call reports and analytics through partner dashboards"
    ],
    useCases: [
      "Recruitment & HR - Candidate screening & Exit Interviews",
      "Speed-to-Lead - Instant response to sales inquiries and lead qualification",
      "Customer Service - Handle common inquiries, troubleshooting, and support",
      "Appointment Booking - Schedule meetings, consultations, and service calls",
      "Real Estate - Virtual assistant for property inquiries and showings",
      "Healthcare - Patient intake, appointment scheduling, and follow-ups",
      "E-commerce - Order support, product inquiries, and customer assistance",
      "Professional Services - Initial consultations and service inquiries"
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Voice Agents",
    "description": "24/7 intelligent voice agents for customer service and business communications with natural, human-like conversations",
    "provider": {
      "@type": "Organization",
      "name": "TONNIC AI Agency",
      "url": "https://tonnic.agency"
    },
    "serviceType": "AI Voice Agent Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Voice Agent Features",
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
        title="AI Voice Agents - TONNIC AI Agency | 24/7 Intelligent Voice Solutions"
        description="Transform your business with AI voice agents. 24/7 availability, natural conversations, and enterprise-grade solutions. Thoughtly Premier Partner with advanced voice AI technology."
        keywords="AI voice agents, voice AI, customer service automation, Thoughtly partner, Retell, Vapi, ElevenLabs, business phone automation"
        canonicalUrl="https://tonnic.agency/#/aivoiceagents"
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
                  <SafeIcon icon={FiMic} className="w-8 h-8 text-slate-800" />
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mr-4 transition-colors duration-200">
                      {serviceData.title}
                    </h1>
                    {serviceData.partnerBadge && (
                      <img src={serviceData.partnerBadge} alt="Thoughtly Premier Partner" className="h-12 w-auto" />
                    )}
                  </div>
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
              {/* Tech Stack */}
              <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-100/10 rounded-xl transition-colors duration-200">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-yellow-200 mb-4 flex items-center transition-colors duration-200">
                  <SafeIcon icon={FiAward} className="w-6 h-6 mr-3 text-yellow-500" />
                  Powered by Industry Leaders
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {serviceData.techStack.map((tech, index) => (
                    <a
                      key={index}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-yellow-200/20 px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-yellow-100 border border-yellow-200 dark:border-yellow-300/30 transition-all duration-200 flex items-center hover:bg-yellow-100 dark:hover:bg-yellow-200/30 hover:border-yellow-300 dark:hover:border-yellow-300/50 hover:scale-105 hover:shadow-md group cursor-pointer"
                      aria-label={`Visit ${tech.name} website (opens in new tab)`}
                    >
                      <img
                        src={tech.favicon}
                        alt={`${tech.name} logo`}
                        className="w-5 h-5 mr-3 flex-shrink-0"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="group-hover:text-slate-800 dark:group-hover:text-yellow-50 transition-colors duration-200">
                        {tech.name}
                      </span>
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-500 dark:text-yellow-300" />
                    </a>
                  ))}
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
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book Your AI Voice Agent Consultation</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation to discuss your voice AI needs</p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book an AI Voice Agent consultation with TONNIC"
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

export default AIVoiceAgents;