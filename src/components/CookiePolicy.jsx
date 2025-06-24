import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const { FiArrowLeft, FiSettings, FiInfo, FiToggleLeft } = FiIcons;

const CookiePolicy = () => {
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
                <SafeIcon icon={FiSettings} className="w-8 h-8 text-slate-800" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                Cookie Policy
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-200">
              Learn how we use cookies to improve your experience on our website.
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
                <SafeIcon icon={FiInfo} className="w-6 h-6 mr-3 text-yellow-500" />
                What Are Cookies?
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Essential Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    These cookies are necessary for our website to function properly. They enable core functionality such as page navigation, access to secure areas, and basic website operations. These cookies cannot be disabled.
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Preference Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    These cookies remember your preferences and settings, such as your preferred language, dark/light mode selection, and other customization options to enhance your user experience.
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Analytics Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Marketing Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. They may also be used to limit the number of times you see an advertisement.
                  </p>
                </div>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiToggleLeft} className="w-6 h-6 mr-3 text-yellow-500" />
                Managing Your Cookie Preferences
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                You have several options for managing cookies:
              </p>
              
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Opt-Out Tools:</strong> You can use industry opt-out tools for advertising cookies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Contact Us:</strong> Reach out to us directly to discuss your cookie preferences
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Third-Party Cookies</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We may use third-party services that place cookies on your device. These services include analytics providers, advertising networks, and social media platforms. Each third-party service has its own privacy policy and cookie practices.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Cookie Retention</h2>
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Session Cookies:</strong> Deleted when you close your browser
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      <strong>Preference Cookies:</strong> Stored for up to 1 year to remember your settings
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Updates to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at{' '}
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

export default CookiePolicy;