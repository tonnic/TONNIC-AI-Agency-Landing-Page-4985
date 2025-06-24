import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiMessageSquare, FiGlobe, FiShare2, FiLink, FiZap, FiX, FiCalendar, FiArrowRight, FiAward } = FiIcons;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalModal, setShowCalModal] = useState(false);

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
        techStack: ["Thoughtly", "Retell", "Vapi", "ElevenLabs"],
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
          "Recruitment & HR - Candidate screening and initial interviews",
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
        description: "Deploy sophisticated AI chatbots that engage customers across websites, SMS, social media, and messaging platforms with contextual, personalized conversations that drive results.",
        benefits: [
          "Multi-Platform Reach - Deploy on websites, SMS, Facebook, Instagram, WhatsApp",
          "Instant Engagement - Connect with visitors the moment they arrive",
          "Lead Qualification - Identify and nurture high-quality prospects",
          "24/7 Availability - Never miss a customer inquiry or opportunity",
          "Personalized Experience - Tailored conversations based on user behavior",
          "Seamless Handoffs - Smooth transitions to human agents when needed",
          "Cost Reduction - Reduce support costs by up to 70%",
          "Analytics & Insights - Detailed conversation analytics and performance metrics"
        ],
        howItWorks: [
          "AI analyzes visitor behavior and engagement patterns",
          "Initiates contextual conversations based on user intent",
          "Provides personalized responses and recommendations",
          "Qualifies leads and captures relevant information",
          "Integrates with your CRM and business systems",
          "Escalates complex issues to human agents",
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
        subtitle: "Modern Websites Built for Growth",
        description: "Create stunning, high-performance websites with AI-assisted design and development. From concept to launch, we build modern, responsive websites tailored to your business needs with integrated tools and scalable hosting.",
        benefits: [
          "Fast Launch - Get your website live in days, not months",
          "Modern Design - Contemporary, professional designs that convert visitors",
          "Mobile Responsive - Perfect performance across all devices and screen sizes",
          "Business Tool Integrations - Seamless connection with CRM, analytics, and marketing tools",
          "Flexible Database Options - Custom data management solutions for your specific needs",
          "Secure Payment Solutions - Integrated e-commerce and payment processing",
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
          "E-commerce Stores - Full-featured online stores with payment processing",
          "Portfolio Sites - Creative showcases for agencies, artists, and professionals",
          "SaaS Platforms - Custom web applications with user management and billing",
          "Real Estate Sites - Property listings with search and contact features",
          "Healthcare Portals - Patient portals with appointment booking and secure messaging",
          "Educational Platforms - Learning management systems and course delivery",
          "Restaurant & Hospitality - Online ordering, reservations, and menu management"
        ]
      }
    },
    {
      icon: FiShare2,
      title: "Social Media AI",
      description: "AI-powered content creation and scheduling for your social media presence, boosting engagement automatically and maximizing your digital marketing impact.",
      features: ["Content Generation", "Auto Scheduling", "Performance Analytics"],
      detailedContent: {
        title: "Social Media AI",
        subtitle: "Automate Your Social Media Success",
        description: "Create engaging content, schedule posts, and analyze performance with our AI-powered social media management platform.",
        benefits: [
          "Consistent Posting - Never miss a scheduled post",
          "Engaging Content - AI-generated posts that resonate with your audience",
          "Time Efficiency - Save 10+ hours per week on social media",
          "Performance Optimization - AI learns what works best for your brand",
          "Multi-Platform Management - Manage all social accounts from one place"
        ],
        howItWorks: [
          "AI analyzes your brand voice and audience preferences",
          "Generates relevant, engaging content for each platform",
          "Optimizes posting times for maximum engagement",
          "Monitors performance and adjusts strategy",
          "Provides detailed analytics and insights"
        ],
        useCases: [
          "Small businesses looking to scale social media presence",
          "Marketing agencies managing multiple clients",
          "E-commerce brands driving sales through social media",
          "Personal brands building thought leadership"
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
        automationPlatforms: ["n8n", "Zapier", "Make", "Pabbly"],
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
        automationPlatforms: ["n8n", "Zapier", "Make", "Pabbly"],
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

                  {/* Add Thoughtly Premier Partner badge for AI Voice Agents */}
                  {service.title === "AI Voice Agents" && (
                    <div className="flex items-center mb-4">
                      <img
                        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750734772981-partner-badge.png"
                        alt="Thoughtly Premier Partner"
                        className="h-8 w-auto mr-3"
                      />
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 px-3 py-1 rounded-full transition-colors duration-200">
                        Premier Partner
                      </span>
                    </div>
                  )}

                  {/* Add n8n Preferred badge for API Integrations and Business Automation */}
                  {(service.title === "API Integrations" || service.title === "Business Automation") && (
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full transition-colors duration-200">
                        n8n Preferred
                      </span>
                    </div>
                  )}

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
                    className="w-full bg-slate-800 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 group-hover:bg-yellow-500 group-hover:text-slate-800 transition-all duration-300 flex items-center justify-center transform group-hover:-translate-y-1"
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

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transition-colors duration-200"
          >
            <button
              onClick={closeServiceModal}
              className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-full transition-colors duration-200"
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
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mr-4 transition-colors duration-200">{selectedService.detailedContent.title}</h2>
                    {selectedService.detailedContent.partnerBadge && (
                      <img
                        src={selectedService.detailedContent.partnerBadge}
                        alt="Thoughtly Premier Partner"
                        className="h-10 w-auto"
                      />
                    )}
                  </div>
                  <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold transition-colors duration-200">{selectedService.detailedContent.subtitle}</p>
                </div>
              </div>

              {/* Tech Stack for AI Voice Agents */}
              {selectedService.detailedContent.techStack && (
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiAward} className="w-5 h-5 mr-2 text-yellow-500" />
                    Powered by Industry Leaders
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.detailedContent.techStack.map((tech, index) => (
                      <span key={index} className="bg-white dark:bg-slate-600 px-4 py-2 rounded-lg font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-500 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Automation Platforms for API Integrations and Business Automation */}
              {selectedService.detailedContent.automationPlatforms && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center transition-colors duration-200">
                    <SafeIcon icon={FiZap} className="w-5 h-5 mr-2 text-blue-500" />
                    Automation Platforms
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.detailedContent.automationPlatforms.map((platform, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg font-medium border transition-colors duration-200 ${
                          platform === selectedService.detailedContent.preferredPlatform
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-500'
                        }`}
                      >
                        {platform === selectedService.detailedContent.preferredPlatform ? `${platform} (Preferred)` : platform}
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
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">Key Benefits</h3>
                  <ul className="space-y-3">
                    {selectedService.detailedContent.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">How It Works</h3>
                  <ol className="space-y-3">
                    {selectedService.detailedContent.howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">Perfect For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.detailedContent.useCases.map((useCase, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg transition-colors duration-200">
                      <span className="text-slate-700 dark:text-slate-300 transition-colors duration-200">{useCase}</span>
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

      {showCalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative transition-colors duration-200"
          >
            <button
              onClick={closeCalModal}
              className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 p-2 rounded-full transition-colors duration-200"
            >
              <SafeIcon icon={FiX} className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>

            <div className="p-6 border-b border-slate-200 dark:border-slate-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book a Meeting</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation with our AI experts</p>
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