import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate, useLocation} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const {FiHome,FiArrowLeft,FiSearch,FiPhone,FiMail} = FiIcons;

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Log the current path for debugging
  React.useEffect(() => {
    console.log('404 Component - Current hash location:', location.pathname);
    console.log('404 Component - Full location:', window.location.href);
  }, [location]);

  const scrollToSection = (sectionId) => {
    // Navigate to home first, then scroll
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const obfuscatedEmail = 'hello' + '@' + 'tonnic' + '.' + 'ai';

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 404 Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center">
                <SafeIcon icon={FiSearch} className="w-10 h-10 text-slate-800" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-6 transition-colors duration-200">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-200">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Debug info for development */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Debug:</strong> Hash route: <code>{location.pathname}</code>
                  <br />
                  <strong>Full URL:</strong> <code>{window.location.href}</code>
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => navigate('/')}
                className="bg-yellow-500 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiHome} className="w-5 h-5 mr-2" />
                Go Home
              </button>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 focus:border-yellow-500 focus:text-yellow-600 dark:focus:border-yellow-400 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 flex items-center"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-200">
                Looking for something specific?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    Our Services
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • AI Voice Agents
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • AI Chatbots
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • Website Design & Hosting
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • Business Automation
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    Quick Links
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • About Us
                    </button>
                    <button
                      onClick={() => scrollToSection('how-it-works')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • How It Works
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • Contact Us
                    </button>
                    <button
                      onClick={() => navigate('/privacy')}
                      className="block text-left text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                    >
                      • Privacy Policy
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-6 transition-colors duration-200">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 transition-colors duration-200">
                  Need Help?
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+18882925513"
                    className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus:bg-slate-200 dark:focus:bg-slate-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 p-3 rounded-xl transition-colors duration-200"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-200">
                      1-888-292-5513
                    </span>
                  </a>
                  <button
                    onClick={() => window.location.href = `mailto:${obfuscatedEmail}`}
                    className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus:bg-slate-200 dark:focus:bg-slate-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 p-3 rounded-xl transition-colors duration-200"
                  >
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-200">
                      Email Us
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;