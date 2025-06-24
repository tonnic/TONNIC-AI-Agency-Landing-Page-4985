import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const { FiArrowLeft, FiFileText, FiCheckCircle, FiAlertTriangle } = FiIcons;

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
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
                <SafeIcon icon={FiFileText} className="w-8 h-8 text-slate-800" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                Terms of Service
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-200">
              Please read these terms carefully before using our AI services.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
              Last updated: January 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 mr-3 text-yellow-500" />
                Acceptance of Terms
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                By accessing and using TONNIC AI Agency's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Service Description</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                TONNIC AI Agency provides artificial intelligence solutions including but not limited to:
              </p>
              
              <div className="space-y-3 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">AI Voice Agents for customer service and business communications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">AI Chatbots for lead generation and customer support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Website design and development services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Business automation and API integrations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Social media AI management</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">User Responsibilities</h2>
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Providing accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Maintaining the security of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Using our services in compliance with applicable laws</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Not misusing our AI services for harmful or illegal purposes</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 mr-3 text-yellow-500" />
                Service Availability
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                While we strive to provide 24/7 availability, we do not guarantee uninterrupted service. We may temporarily suspend or restrict access to our services for maintenance, updates, or other operational reasons. We will provide reasonable notice when possible.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Payment Terms</h2>
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Payment is due according to the agreed-upon terms in your service agreement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Late payments may result in service suspension</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Refunds are handled on a case-by-case basis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">You are responsible for any applicable taxes</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                All content, features, and functionality of our services are owned by TONNIC AI Agency and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written permission.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                TONNIC AI Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Termination</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Either party may terminate the service agreement with appropriate notice as specified in your individual service contract. Upon termination, your access to our services will cease, and any outstanding payments will become due immediately.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:hello@tonnic.ai" className="text-yellow-500 hover:text-yellow-600 underline">
                  hello@tonnic.ai
                </a>
                {' '}or call our AI Voice Agent at{' '}
                <a href="tel:+18882925513" className="text-yellow-500 hover:text-yellow-600 underline">
                  1-888-292-5513
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;