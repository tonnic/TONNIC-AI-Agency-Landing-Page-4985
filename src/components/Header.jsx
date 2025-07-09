import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from '../hooks/useDarkMode';

const { FiMenu, FiX, FiCalendar, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (isMenuOpen) {
        console.log('Header: Received globalEscape event, closing mobile menu');
        setIsMenuOpen(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on a different page, navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      // We're on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  const openCalModal = () => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, dispatch the event to open the calendar modal
      const event = new CustomEvent('openCalModal');
      window.dispatchEvent(event);
    } else {
      // We're on a different page, navigate to home and then try to open calendar
      navigate('/');
      // Wait for navigation to complete, then try to open calendar
      setTimeout(() => {
        const event = new CustomEvent('openCalModal');
        window.dispatchEvent(event);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 z-50 transition-colors duration-200" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
            aria-label="TONNIC AI Agency - Go to home"
          >
            {/* Light mode logo - new transparent version */}
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png"
              alt="TONNIC AI Agency"
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750770446524-TONNICLogo%20-%20Light.png"
              alt="TONNIC AI Agency"
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 hidden dark:block"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
            >
              Services
            </button>
            
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
            >
              How It Works
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
            >
              About
            </button>

            {/* Dark Mode Toggle */}
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* Contact Us Button */}
            <button
              onClick={scrollToContact}
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full font-medium hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 focus:border-yellow-500 focus:text-yellow-600 dark:focus:border-yellow-400 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200 flex items-center"
            >
              <SafeIcon icon={FiMail} className="w-4 h-4 mr-2" />
              Contact Us
            </button>

            {/* Book Free Consultation Button - FIXED */}
            <button
              onClick={openCalModal}
              className="bg-yellow-500 text-slate-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200 flex items-center"
            >
              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
              Book Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* IMPROVED Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-6 border-t border-gray-200 dark:border-slate-700 transition-colors duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-4">
              {/* Navigation Links */}
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  Services
                </button>
                
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  How It Works
                </button>
                
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  About
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-slate-700 my-4"></div>

              {/* Action Buttons - Stacked with proper spacing */}
              <div className="space-y-3">
                {/* Mobile Contact Us Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-xl font-medium hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 focus:border-yellow-500 focus:text-yellow-600 dark:focus:border-yellow-400 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200 flex items-center justify-center"
                >
                  <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                  Contact Us
                </button>

                {/* Mobile Book Free Consultation Button - FIXED */}
                <button
                  onClick={openCalModal}
                  className="w-full bg-yellow-500 text-slate-800 px-6 py-3 rounded-xl font-medium hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200 flex items-center justify-center"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;