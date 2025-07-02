import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLinkedin, FiMic } = FiIcons;

const Footer = () => {
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
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      // We're on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-16 transition-colors duration-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center mb-6 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded"
              aria-label="Go to top of page"
            >
              {/* Light mode logo - normal logo with dark text */}
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750776734784-tonnic%20ai%20agency.png"
                alt="TONNIC AI Agency"
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 dark:hidden"
              />
              {/* Dark mode logo - light logo */}
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750770446524-TONNICLogo%20-%20Light.png"
                alt="TONNIC AI Agency"
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 hidden dark:block"
              />
            </button>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses with intelligent AI solutions. From voice agents to automation, we help companies work smarter, not harder.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/tonnicagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-slate-900 p-3 rounded-xl hover:bg-yellow-500 hover:text-slate-800 focus:bg-yellow-500 focus:text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black transition-colors duration-200"
                aria-label="Visit our LinkedIn company page"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services Links - FOR SEO */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <nav aria-label="Service links">
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate('/aivoiceagents')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    AI Voice Agents
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/aichatbots')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    AI Chatbots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/websitedesign')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    Website Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/socialmediaai')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    Social Media AI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/apiintegrations')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    API Integrations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/businessautomation')}
                    className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200 text-left"
                  >
                    Business Automation
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact Info - Simplified without booking section */}
        <div className="border-t border-slate-800 dark:border-slate-800 mt-12 pt-8">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="flex items-start space-x-3">
              <SafeIcon icon={FiMic} className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="text-slate-200 font-medium text-sm">AI Voice Agent</div>
                <a
                  href="tel:+18882925513"
                  className="text-slate-300 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                  aria-label="Call our AI Voice Agent at 1-888-292-5513"
                >
                  1-888-292-5513
                </a>
                <div className="text-slate-400 text-xs mt-1">Available 24/7</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 dark:border-slate-800 pt-8">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 TONNIC AI Agency. All rights reserved.
            </div>
            <nav aria-label="Legal links">
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-slate-400 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => navigate('/terms')}
                  className="text-slate-400 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => navigate('/cookies')}
                  className="text-slate-400 hover:text-yellow-500 focus:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-black rounded transition-colors duration-200"
                >
                  Cookie Policy
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;