import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMail, FiZap, FiTrendingUp, FiUsers, FiDollarSign, FiX, FiTarget, FiBolt, FiArrowUp } = FiIcons;

// Enhanced Honeycomb Background Component
const HoneycombBackground = () => {
  // Generate truly random positions on each render
  const generateRandomPosition = () => ({
    top: `${Math.random() * 70 + 10}%`,
    left: `${Math.random() * 70 + 10}%`,
  });

  // Value proposition words - positions will be generated fresh each time
  const valueWordsText = [
    "24/7 Automation",
    "Cost Reduction", 
    "Smart Integration",
    "Voice AI",
    "Lead Generation",
    "Workflow Optimization",
    "Customer Support",
    "Business Growth",
    "AI Chatbots",
    "Instant Response"
  ];

  // Generate fresh random positions and delays for each word on every render
  const valueWords = valueWordsText.map(text => ({
    text,
    position: generateRandomPosition(), // Fresh random position each time
    delay: Math.random() * 3 // Fresh random delay each time
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Honeycomb Pattern */}
      <div className="absolute inset-0 opacity-4 dark:opacity-2">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Enhanced honeycomb pattern */}
            <pattern id="honeycomb-enhanced" x="0" y="0" width="120" height="140" patternUnits="userSpaceOnUse">
              {/* Multiple hexagons with stroke width 1 */}
              <polygon 
                points="60,20 85,35 85,65 60,80 35,65 35,35" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.15"
              />
              <polygon 
                points="25,85 50,100 50,130 25,145 0,130 0,100" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.1"
              />
              <polygon 
                points="95,85 120,100 120,130 95,145 70,130 70,100" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.1"
              />
            </pattern>
            
            {/* Subtle gradient */}
            <radialGradient id="honeycombGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          {/* Apply the enhanced pattern */}
          <rect width="100%" height="100%" fill="url(#honeycomb-enhanced)" />
          
          {/* Subtle glow */}
          <motion.circle
            cx="50%" cy="40%"
            r="300"
            fill="url(#honeycombGlow)"
            animate={{
              r: [250, 350, 250],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Single floating hexagon cluster */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-8 dark:opacity-4">
            <polygon 
              points="30,10 42,17 42,33 30,40 18,33 18,17" 
              fill="none" 
              stroke="#eab308" 
              strokeWidth="1" 
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </div>

      {/* 5 Bees flying across the screen with curved paths */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, index) => {
          // Generate random curve parameters for each bee
          const startY = Math.random() * 60 + 10; // Random start Y position
          const amplitude = (Math.random() * 40 + 20) * (Math.random() > 0.5 ? 1 : -1); // Random curve amplitude
          const frequency = Math.random() * 2 + 1; // Random curve frequency
          
          return (
            <motion.div
              key={`bee-${index}`}
              className="absolute"
              style={{ top: `${startY}%` }}
              animate={{
                x: ['-100px', 'calc(100vw + 100px)'],
                y: [
                  0, 
                  amplitude * Math.sin(Math.PI * 0.25 * frequency),
                  amplitude * Math.sin(Math.PI * 0.5 * frequency),
                  amplitude * Math.sin(Math.PI * 0.75 * frequency),
                  amplitude * Math.sin(Math.PI * frequency),
                  amplitude * Math.sin(Math.PI * 1.25 * frequency),
                  amplitude * Math.sin(Math.PI * 1.5 * frequency),
                  amplitude * Math.sin(Math.PI * 1.75 * frequency),
                  0
                ]
              }}
              transition={{
                duration: 20 + index * 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 5
              }}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{ 
                    duration: 0.8 + index * 0.1, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-yellow-500 text-lg opacity-60"
                >
                  🐝
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Value proposition words with TRULY RANDOM positions on each render */}
      <div className="absolute inset-0">
        {valueWords.map((word, i) => (
          <motion.div
            key={`value-${i}-${Date.now()}`} // Unique key to force re-render with new positions
            className="absolute font-semibold text-yellow-600/70 dark:text-yellow-400/60 text-sm whitespace-nowrap"
            style={word.position} // Fresh random position each time component renders
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.8, 1.1, 1.1, 0.8],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 12,
              ease: "easeInOut",
              delay: word.delay // Fresh random delay each time
            }}
          >
            <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-yellow-400/20 shadow-sm">
              {word.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 12 Floating particles with random movement */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const randomX = Math.random() * 80 + 10;
          const randomY = Math.random() * 70 + 15;
          const randomDelay = Math.random() * 5;
          const randomDuration = 6 + Math.random() * 8;
          
          return (
            <motion.div
              key={`pollen-${i}`}
              className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                y: [0, -30, 10, -20, 0],
                x: [0, 15, -10, 5, 0],
                opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
                scale: [0.8, 1.2, 0.9, 1.1, 0.8]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: randomDelay
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Hero = () => {
  const [showCalModal, setShowCalModal] = useState(false);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (showCalModal) {
        console.log('Hero: Received globalEscape event, closing cal modal');
        setShowCalModal(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [showCalModal]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalModal = () => {
    setShowCalModal(true);
  };

  const closeCalModal = () => {
    setShowCalModal(false);
  };

  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200 relative overflow-hidden">
        {/* Enhanced Honeycomb Background */}
        <HoneycombBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ICP Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto transition-colors duration-200">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
                Perfect for Forward-Thinking Businesses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg transition-colors duration-200">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm transition-colors duration-200">
                      Growing Companies
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
                      Scale without hiring
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg transition-colors duration-200">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm transition-colors duration-200">
                      Cost-Conscious
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
                      Reduce overhead 40-70%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg transition-colors duration-200">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm transition-colors duration-200">
                      Customer-Focused
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
                      Never miss opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-yellow-100/80 dark:bg-yellow-900/30 backdrop-blur-sm text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-200">
                <SafeIcon icon={FiZap} className="w-4 h-4 mr-2" />
                <span className="force-ai-text">AI</span>-Powered Business Solutions
              </div>
              
              {/* Main heading */}
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight transition-colors duration-200 relative z-10">
                  <span className="force-ai-text">AI</span> Solutions That Make
                  <span className="text-yellow-500 block">Your Business Buzz</span>
                </h1>
              </div>
              
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
                onClick={openCalModal}
                className="bg-yellow-500 text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-10"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Book an Appointment Now
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-400 focus:border-yellow-500 focus:text-yellow-600 dark:focus:border-yellow-400 dark:focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 flex items-center relative z-10"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Hero Stats - Updated with Customer Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {/* Card 1 - Never Miss a Lead */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-slate-800" />
              </div>
              <div className="text-xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                Never Miss a Lead
              </div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                Your <span className="force-ai-text">AI</span> assistant handles every inquiry, even after hours, so you capture more opportunities.
              </div>
            </div>

            {/* Card 2 - Instant Replies */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiBolt} className="w-6 h-6 text-slate-800" />
              </div>
              <div className="text-xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                Instant Replies
              </div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                Impress your customers with real-time answers and convert interest into action around the clock.
              </div>
            </div>

            {/* Card 3 - Grows With You */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiArrowUp} className="w-6 h-6 text-slate-800" />
              </div>
              <div className="text-xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                Grows With You
              </div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                Start small or scale up. TONNIC adapts to your business, no matter the stage.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <SafeIcon icon={FiX} className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
            </button>
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 transition-colors duration-200">
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book Your AI Consultation</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation with our AI experts to discuss your business needs</p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book an AI consultation with TONNIC"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Hero;