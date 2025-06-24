import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiMessageSquare, FiGlobe, FiShare2, FiLink, FiZap, FiX, FiCalendar, FiArrowRight, FiAward } = FiIcons;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalModal, setShowCalModal] = useState(false);

  // Listen for global calendar modal events
  useEffect(() => {
    const handleOpenCalModal = () => {
      setShowCalModal(true);
    };

    window.addEventListener('openCalModal', handleOpenCalModal);
    return () => {
      window.removeEventListener('openCalModal', handleOpenCalModal);
    };
  }, []);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (selectedService) {
        console.log('Services: Received globalEscape event, closing service modal');
        setSelectedService(null);
        event.preventDefault();
        event.stopPropagation();
      } else if (showCalModal) {
        console.log('Services: Received globalEscape event, closing cal modal');
        setShowCalModal(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [selectedService, showCalModal]);

  const services = [
    {
      icon: FiMic,
      title: "AI Voice Agents",
      description: "Intelligent voice agents that handle calls, appointments, lead qualification, customer service, and business communications with natural, human-like conversations.",
      features: ["24/7 Call Handling", "Natural Conversations", "Multi-Purpose Support"],
      detailedContent: {
        title: "AI Voice Agents",
        subtitle: "Thoughtly Premier Partner - Advanced Voice AI Solutions",
        description: "Transform your phone communications with advanced AI voice agents powered by industry-leading platforms including Thoughtly, Retell, Vapi, and ElevenLabs. As a Thoughtly Premier Partner, we deliver enterprise-grade voice solutions with natural, human-like conversations tailored to your specific industry and requirements.",
        techStack: [
          { name: "Thoughtly", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779526113-thoughtlyfavicon.png" },
          { name: "Retell", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779529709-retellfavicon.png" },
          { name: "Vapi", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779532754-vapifavicon.png" },
          { name: "ElevenLabs", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779535711-elevenlabsfavicon.png" }
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
      }
    },
    {
      icon: FiMessageSquare,
      title: "AI Chatbots",
      description: "Intelligent chatbots that engage customers across multiple platforms, provide instant support, qualify leads, and deliver personalized experiences 24/7.",
      features: ["Multi-Platform Integration", "Smart Qualification", "Instant Response"],
      detailedContent: {
        title: "AI Chatbots",
        subtitle: "Intelligent Conversations Across Every Platform",
        description: "Deploy sophisticated AI chatbots that engage customers across websites, Facebook, WhatsApp, Pinterest, Instagram, and more with contextual, personalized conversations that drive results. Integrated with n8n automation for seamless workflow connections.",
        chatbotPlatforms: [
          { name: "Facebook", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780429350-facebookfavicon.png", capabilities: "Messenger Integration" },
          { name: "WhatsApp", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780449215-whatsappfavicon.png", capabilities: "Business API" },
          { name: "Pinterest", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780457500-pinterestfavicon.png", capabilities: "Pin Interactions" },
          { name: "Instagram", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780487572-instagramfavicon.png", capabilities: "DM Automation" },
          { name: "Website", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png", capabilities: "Live Chat Widget" }
        ],
        benefits: [
          "Multi-Platform Reach - Deploy on websites, Facebook, WhatsApp, Pinterest, Instagram",
          "Instant Engagement - Connect with visitors the moment they arrive",
          "Lead Qualification - Identify and nurture high-quality prospects",
          "24/7 Availability - Never miss a customer inquiry or opportunity",
          "Personalized Experience - Tailored conversations based on user behavior",
          "n8n Integration - Advanced automation workflows and system connections",
          "Cost Reduction - Reduce support costs by up to 70%",
          "Analytics & Insights - Detailed conversation analytics and performance metrics"
        ],
        howItWorks: [
          "AI analyzes visitor behavior and engagement patterns",
          "Initiates contextual conversations based on user intent",
          "Provides personalized responses and recommendations",
          "Qualifies leads and captures relevant information",
          "Integrates with your CRM and business systems via n8n automation",
          "Triggers automated workflows based on conversation outcomes",
          "Continuously learns and improves from interactions"
        ],
        useCases: [
          "Recruitment Chatbots - Present open positions, answer job-specific questions, and guide qualified candidates through application process",
          "Lead Generation - Qualify website visitors and convert them into sales opportunities",
          "Customer Support - Handle common inquiries, troubleshooting, and account assistance",
          "E-commerce Sales - Product recommendations, order assistance, and purchase support",
          "Real Estate - Property inquiries, virtual tours, and appointment scheduling",
          "Healthcare - Symptom checking, appointment booking, and patient support",
          "SaaS Support - Feature explanations, billing inquiries, and technical assistance",
          "Professional Services - Service inquiries, consultation booking, and client onboarding"
        ]
      }
    },
    {
      icon: FiGlobe,
      title: "Website Design & Hosting",
      description: "AI-assisted website design and development with modern, responsive designs, business integrations, and scalable hosting solutions tailored to your needs.",
      features: ["Fast Launch", "Mobile Responsive", "Business Integrations"],
      detailedContent: {
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
      }
    },
    {
      icon: FiShare2,
      title: "Social Media AI",
      description: "AI-powered content creation and automated posting across Facebook, Instagram, LinkedIn, X (Twitter), Pinterest, TikTok, and Google Business to maximize your social media presence and engagement.",
      features: ["Multi-Platform Posting", "AI Content Generation", "Automated Scheduling"],
      detailedContent: {
        title: "Social Media AI",
        subtitle: "Automate Your Social Media Success Across All Platforms",
        description: "Transform your social media presence with AI-powered content creation and automated posting across Facebook, Instagram (posts & stories), LinkedIn (personal & company pages), X (Twitter), Pinterest, TikTok, and Google Business Profile. Create engaging, platform-optimized content that resonates with your audience and drives results.",
        socialPlatforms: [
          { name: "Facebook", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780429350-facebookfavicon.png", capabilities: "Posts, Images, Videos" },
          { name: "Instagram", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780487572-instagramfavicon.png", capabilities: "Posts & Stories" },
          { name: "LinkedIn", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780083679-linkedinfavicon.png", capabilities: "Personal & Company Pages" },
          { name: "X (Twitter)", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780080709-xfavicon.png", capabilities: "Tweets, Threads" },
          { name: "Pinterest", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780457500-pinterestfavicon.png", capabilities: "Pins & Boards" },
          { name: "TikTok", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750780086756-tiktokfavicon.png", capabilities: "Short-form Videos" },
          { name: "Google Business", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750781038097-googlebusinessfavicon.png", capabilities: "Business Updates & Posts" }
        ],
        benefits: [
          "Multi-Platform Reach - Automatically post to Facebook, Instagram, LinkedIn, X, Pinterest, TikTok, and Google Business",
          "Platform Optimization - Content tailored for each platform's unique audience and format",
          "Instagram Versatility - Post to both Instagram feed and Instagram Stories",
          "LinkedIn Flexibility - Manage both personal profiles and company pages",
          "Pinterest Strategy - Pin optimization for discovery and traffic generation",
          "Google Business Presence - Keep your business profile active with regular updates",
          "Consistent Posting - Never miss a scheduled post across any platform",
          "AI Content Creation - Generate engaging, platform-specific content automatically",
          "Time Efficiency - Save 20+ hours per week on social media management",
          "Performance Analytics - Track engagement and optimize content across all platforms"
        ],
        howItWorks: [
          "AI analyzes your brand voice, industry, and target audience across platforms",
          "Generates platform-optimized content for all 7 major social platforms",
          "Customizes content format for each platform (Instagram Stories, Pinterest pins, etc.)",
          "Schedules posts at optimal times for maximum engagement on each platform",
          "Monitors performance metrics and adjusts content strategy automatically",
          "Provides detailed cross-platform analytics and insights",
          "Continuously learns from engagement data to improve content quality"
        ],
        useCases: [
          "Personal Branding - Build thought leadership across LinkedIn personal profiles and other platforms",
          "Company Marketing - Manage corporate presence on LinkedIn company pages, Facebook, and Instagram",
          "E-commerce Brands - Showcase products on Instagram posts/stories, Pinterest, and Facebook",
          "Content Creators - Maximize reach across all platforms with optimized posting strategies",
          "Professional Services - Build authority on LinkedIn while engaging audiences on other platforms",
          "Restaurants & Retail - Visual marketing on Instagram, Pinterest, and Google Business with local engagement",
          "Real Estate Agents - Property showcases across Instagram Stories, Facebook, Pinterest, and Google Business",
          "Marketing Agencies - Manage multiple client accounts across all major social platforms"
        ]
      }
    },
    {
      icon: FiLink,
      title: "API Integrations",
      description: "Seamless integration with your existing systems and tools, ensuring smooth workflow and data synchronization across your entire business ecosystem.",
      features: ["Custom APIs", "System Integration", "Data Sync"],
      detailedContent: {
        title: "API Integrations",
        subtitle: "n8n Preferred - Connect Your Business Ecosystem",
        description: "Integrate all your business tools and systems with our robust API solutions for seamless data flow and workflow automation. We specialize in n8n as our preferred automation platform, while also supporting Zapier, Make, and Pabbly to meet your specific integration needs.",
        automationPlatforms: [
          { name: "n8n", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779813044-n8nfavicon.png" },
          { name: "Zapier", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779820203-zapierfavicon.png" },
          { name: "Make", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779815427-makefavicon.jpg" },
          { name: "Pabbly", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779817990-pablyfavicon.png" }
        ],
        preferredPlatform: "n8n",
        benefits: [
          "n8n Expertise - Advanced workflows with our preferred open-source platform",
          "Multi-Platform Support - Work with Zapier, Make, and Pabbly as needed",
          "Unified Data - Single source of truth across all systems",
          "Automated Workflows - Eliminate manual data entry and repetitive tasks",
          "Real-time Sync - Instant updates across all platforms and applications",
          "Scalable Architecture - Grows with your business needs and complexity",
          "Secure Connections - Enterprise-grade security protocols and data protection",
          "Cost-Effective Solutions - Optimize automation costs with open-source options"
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
      }
    },
    {
      icon: FiZap,
      title: "Business Automation",
      description: "End-to-end automation solutions including HR processes, workflow optimization, and business operations to increase productivity while reducing costs significantly.",
      features: ["Workflow Automation", "HR Process Integration", "ROI Tracking"],
      detailedContent: {
        title: "Business Automation",
        subtitle: "n8n Powered - Transform Your Business Operations",
        description: "Automate complex business processes including HR workflows, operations, and administrative tasks to increase efficiency, reduce costs, and improve accuracy across your organization. We leverage n8n as our preferred automation platform, complemented by Zapier, Make, and Pabbly for comprehensive automation solutions.",
        automationPlatforms: [
          { name: "n8n", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779813044-n8nfavicon.png" },
          { name: "Zapier", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779820203-zapierfavicon.png" },
          { name: "Make", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779815427-makefavicon.jpg" },
          { name: "Pabbly", favicon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750779817990-pablyfavicon.png" }
        ],
        preferredPlatform: "n8n",
        benefits: [
          "n8n Specialization - Advanced automation with our preferred open-source platform",
          "Platform Flexibility - Choose from n8n, Zapier, Make, or Pabbly based on your needs",
          "Productivity Boost - Increase efficiency by up to 300% with intelligent automation",
          "Cost Reduction - Reduce operational costs by 40-60% through process optimization",
          "Error Elimination - Minimize human errors in critical business processes",
          "Scalability - Easily handle increased workload without additional hiring",
          "ROI Tracking - Measure and optimize automation impact with detailed analytics",
          "HR Streamlining - Automate employee onboarding, scheduling, and management workflows",
          "Compliance Management - Automated tracking and reporting for regulatory requirements",
          "Employee Satisfaction - Faster response times and self-service automation options"
        ],
        howItWorks: [
          "Comprehensive process mapping and workflow analysis across all departments",
          "Identify automation opportunities in operations, HR, and administrative tasks",
          "Design and implement custom automation solutions using n8n or other platforms",
          "Integrate HR systems for seamless employee management and onboarding",
          "Automate scheduling, document processing, approvals, and notifications",
          "Create complex multi-step workflows that span multiple business systems",
          "Monitor performance continuously and optimize automation effectiveness",
          "Provide comprehensive training and ongoing technical support"
        ],
        useCases: [
          "Invoice Processing - Automated accounts payable and approval workflows",
          "Customer Onboarding - Streamlined lifecycle management and welcome sequences",
          "Employee Onboarding - Complete HR workflow automation from hire to productivity",
          "Inventory Management - Automated ordering, tracking, and restocking processes",
          "Performance Management - Automated review cycles and feedback collection",
          "Leave Management - Streamlined approval workflows and calendar integration",
          "Compliance Reporting - Automated regulatory tracking and document generation",
          "Training Programs - Automated course delivery and progress tracking systems",
          "Sales Process Automation - Lead qualification to deal closure workflows",
          "Customer Support Automation - Ticket routing and response management"
        ]
      }
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const openCalModal = () => {
    setShowCalModal(true);
  };

  const closeCalModal = () => {
    setShowCalModal(false);
  };

  return (
    <>
      <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
              Comprehensive AI solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl hover:shadow-xl dark:hover:shadow-slate-700/20 transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-yellow-300 dark:hover:border-yellow-500 group overflow-hidden h-full flex flex-col"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-1 text-sm transition-colors duration-200">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="w-full bg-slate-800 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-slate-800 dark:hover:bg-yellow-500 dark:hover:text-slate-800 focus:bg-yellow-500 focus:text-slate-800 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
                  >
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss which AI solution is perfect for your business needs
              </p>
              <button
                onClick={openCalModal}
                className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 flex items-center mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transition-colors duration-200"
          >
            <button
              onClick={closeServiceModal}
              className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-full transition-colors duration-200"
              aria-label="Close service details"
            >
              <SafeIcon icon={FiX} className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                  <SafeIcon icon={selectedService.icon} className="w-8 h-8 text-slate-800" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h2 id="service-modal-title" className="text-3xl font-bold text-slate-800 dark:text-white mr-4 transition-colors duration-200">
                      {selectedService.detailedContent.title}
                    </h2>
                    {selectedService.detailedContent.partnerBadge && (
                      <img
                        src={selectedService.detailedContent.partnerBadge}
                        alt="Thoughtly Premier Partner"
                        className="h-12 w-auto"
                      />
                    )}
                  </div>
                  <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold transition-colors duration-200">
                    {selectedService.detailedContent.subtitle}
                  </p>
                </div>
              </div>

              {/* Tech Stack for AI Voice Agents with favicons */}
              {selectedService.detailedContent.techStack && (
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiAward} className="w-5 h-5 mr-2 text-yellow-500" />
                    Powered by Industry Leaders
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.detailedContent.techStack.map((tech, index) => (
                      <span key={index} className="bg-white dark:bg-slate-600 px-4 py-2 rounded-lg font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-500 transition-colors duration-200 flex items-center">
                        <img
                          src={tech.favicon}
                          alt={`${tech.name} logo`}
                          className="w-4 h-4 mr-2 flex-shrink-0"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Chatbot Platforms for AI Chatbots with favicons */}
              {selectedService.detailedContent.chatbotPlatforms && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiMessageSquare} className="w-5 h-5 mr-2 text-green-500" />
                    Supported Chatbot Platforms
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedService.detailedContent.chatbotPlatforms.map((platform, index) => (
                      <div key={index} className="bg-white dark:bg-slate-600 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-500 transition-colors duration-200">
                        <div className="flex items-center mb-2">
                          <img
                            src={platform.favicon}
                            alt={`${platform.name} logo`}
                            className="w-5 h-5 mr-2 flex-shrink-0"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <span className="font-medium text-slate-700 dark:text-slate-200 transition-colors duration-200">
                            {platform.name}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-200">
                          {platform.capabilities}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Media Platforms for Social Media AI with favicons */}
              {selectedService.detailedContent.socialPlatforms && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiShare2} className="w-5 h-5 mr-2 text-purple-500" />
                    Supported Social Media Platforms
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedService.detailedContent.socialPlatforms.map((platform, index) => (
                      <div key={index} className="bg-white dark:bg-slate-600 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-500 transition-colors duration-200">
                        <div className="flex items-center mb-2">
                          <img
                            src={platform.favicon}
                            alt={`${platform.name} logo`}
                            className="w-5 h-5 mr-2 flex-shrink-0"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <span className="font-medium text-slate-700 dark:text-slate-200 transition-colors duration-200">
                            {platform.name}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-200">
                          {platform.capabilities}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Automation Platforms for API Integrations and Business Automation with favicons */}
              {selectedService.detailedContent.automationPlatforms && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiZap} className="w-5 h-5 mr-2 text-blue-500" />
                    Automation Platforms
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.detailedContent.automationPlatforms.map((platform, index) => (
                      <span key={index} className={`px-4 py-2 rounded-lg font-medium border transition-colors duration-200 flex items-center ${
                        platform.name === selectedService.detailedContent.preferredPlatform
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-500'
                      }`}>
                        <img
                          src={platform.favicon}
                          alt={`${platform.name} logo`}
                          className="w-4 h-4 mr-2 flex-shrink-0"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        {platform.name === selectedService.detailedContent.preferredPlatform ? `${platform.name} (Preferred)` : platform.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-200">
                {selectedService.detailedContent.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.detailedContent.benefits.map((benefit, index) => (
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
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
                    How It Works
                  </h3>
                  <ol className="space-y-3">
                    {selectedService.detailedContent.howItWorks.map((step, index) => (
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
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
                  Perfect For
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.detailedContent.useCases.map((useCase, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg transition-colors duration-200">
                      <span className="text-slate-700 dark:text-slate-300 transition-colors duration-200">
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
                  onClick={closeServiceModal}
                  className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-full transition-colors duration-200"
              aria-label="Close booking modal"
            >
              <SafeIcon icon={FiX} className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 transition-colors duration-200">
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                Book a Meeting
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">
                Schedule a 30-minute consultation with our AI experts
              </p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a meeting with TONNIC"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Services;