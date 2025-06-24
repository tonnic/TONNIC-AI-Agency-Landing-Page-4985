import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiZap } = FiIcons;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-200">
              <SafeIcon icon={FiZap} className="w-4 h-4 mr-2" />
              <span className="force-ai-text">AI</span>-Powered Business Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight transition-colors duration-200">
              <span className="force-ai-text">AI</span> Solutions That Make <span className="text-yellow-500 block">Your Business Buzz</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-200">
              TONNIC provides cutting-edge <span className="force-ai-text">AI</span> voice agents, intelligent chatbots, and automation services designed to streamline your business operations and boost productivity across all departments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-yellow-500 text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 transition-all duration-200"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
              <span className="force-ai-text">AI</span> Support Available
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
            <div className="text-3xl font-bold text-yellow-500 mb-2">70%</div>
            <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Faster Response Times</div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
            <div className="text-3xl font-bold text-yellow-500 mb-2">∞</div>
            <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Scalable Solutions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;