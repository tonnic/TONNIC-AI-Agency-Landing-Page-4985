import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from '../hooks/useDarkMode';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

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
            {/* Light mode logo */}
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750721335201-tonnic%20ai%20agency%20-%20white%20bg.png"
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
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
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

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 text-slate-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700 transition-colors duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-600 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 focus:text-yellow-500 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-yellow-500 text-slate-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-200 w-fit"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;