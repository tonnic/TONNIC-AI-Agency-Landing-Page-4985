import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMail, FiZap, FiTrendingUp, FiUsers, FiDollarSign, FiX } = FiIcons;

// Honeycomb & Bee-Themed Background Component
const HoneycombBackground = () => {
  // Value proposition words that appear and disappear
  const valueWords = [
    { text: "Streamlined Workflows", position: { top: "15%", left: "10%" }, delay: 0 },
    { text: "Productivity Boost", position: { top: "25%", right: "15%" }, delay: 1.5 },
    { text: "24/7 Automation", position: { bottom: "30%", left: "20%" }, delay: 3 },
    { text: "Cost Reduction", position: { top: "40%", right: "25%" }, delay: 4.5 },
    { text: "Instant Response", position: { bottom: "20%", right: "10%" }, delay: 6 },
    { text: "Smart Integration", position: { top: "60%", left: "15%" }, delay: 7.5 },
    { text: "Scalable Solutions", position: { bottom: "45%", right: "30%" }, delay: 9 },
    { text: "Buzz-worthy Results", position: { top: "30%", left: "25%" }, delay: 10.5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 opacity-8 dark:opacity-4">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Honeycomb Pattern */}
            <pattern id="honeycomb" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon 
                points="30,2 45,10 45,26 30,34 15,26 15,10" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.2"
              />
              <polygon 
                points="0,18 15,26 15,42 0,50 -15,42 -15,26" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.15"
              />
              <polygon 
                points="60,18 75,26 75,42 60,50 45,42 45,26" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                opacity="0.15"
              />
            </pattern>
            
            {/* Animated Honeycomb Gradient */}
            <radialGradient id="honeycombGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.05"/>
            </radialGradient>
          </defs>
          
          {/* Honeycomb Pattern */}
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
          
          {/* Animated Glow Effect */}
          <motion.circle
            cx="50%" cy="40%"
            r="200"
            fill="url(#honeycombGlow)"
            animate={{
              r: [150, 250, 150],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating Hexagonal Cells */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${15 + (i * 12) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polygon 
                points="12,2 18,6 18,14 12,18 6,14 6,6" 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1.5"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Animated Bees */}
      <div className="absolute inset-0">
        {/* Bee 1 - Flying across */}
        <motion.div
          className="absolute top-1/4"
          animate={{
            x: ['-100px', 'calc(100vw + 100px)'],
            y: [0, -30, 10, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        >
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              className="text-yellow-500 text-lg"
            >
              🐝
            </motion.div>
            <motion.div
              className="ml-2 text-xs text-yellow-600 font-mono opacity-60"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              buzzing...
            </motion.div>
          </div>
        </motion.div>

        {/* Bee 2 - Different path */}
        <motion.div
          className="absolute top-3/4"
          animate={{
            x: ['calc(100vw + 100px)', '-100px'],
            y: [0, 20, -15, 25, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 8
          }}
        >
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4, repeat: Infinity }}
              className="text-yellow-500 text-lg transform scale-x-[-1]"
            >
              🐝
            </motion.div>
            <motion.div
              className="mr-2 text-xs text-yellow-600 font-mono opacity-60 order-first"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              working...
            </motion.div>
          </div>
        </motion.div>

        {/* Bee 3 - Circular pattern */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '0 0' }}
        >
          <motion.div
            className="relative"
            style={{ transform: 'translate(150px, -75px)' }}
            animate={{
              rotate: [0, -360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="text-yellow-500 text-sm">🐝</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Value Proposition Words */}
      <div className="absolute inset-0">
        {valueWords.map((word, i) => (
          <motion.div
            key={`value-${i}`}
            className="absolute font-semibold text-yellow-600/80 dark:text-yellow-400/80 text-sm md:text-base whitespace-nowrap"
            style={word.position}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeInOut",
              delay: word.delay
            }}
          >
            <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/30">
              {word.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Honeycomb Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0.4"/>
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        
        {/* Connecting Lines that pulse */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${15 + i * 12}%`}
            y1={`${20 + (i % 3) * 25}%`}
            x2={`${25 + i * 10}%`}
            y2={`${35 + (i % 4) * 20}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </svg>

      {/* Floating Pollen Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`pollen-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 10, -30, 0],
              x: [0, 15, -10, 20, 0],
              opacity: [0, 0.8, 0.4, 0.9, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Hive Structure Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg className="absolute top-10 right-10 w-32 h-32" viewBox="0 0 100 100">
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <polygon
                key={i}
                points="50,15 65,25 65,40 50,50 35,40 35,25"
                fill="none"
                stroke="#eab308"
                strokeWidth="1"
                opacity="0.4"
                transform={`rotate(${i * 60} 50 32.5) translate(0 ${i * 5})`}
              />
            ))}
          </motion.g>
        </svg>

        <svg className="absolute bottom-20 left-10 w-24 h-24" viewBox="0 0 100 100">
          <motion.g
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <polygon
                key={i}
                points="50,20 60,27 60,38 50,45 40,38 40,27"
                fill="none"
                stroke="#eab308"
                strokeWidth="1.5"
                opacity="0.3"
                transform={`rotate(${i * 90} 50 32.5) scale(${1 + i * 0.2})`}
              />
            ))}
          </motion.g>
        </svg>
      </div>

      {/* Buzzing Text Effect */}
      <div className="absolute inset-0 font-mono text-xs opacity-8 dark:opacity-12">
        <motion.div
          className="absolute top-16 left-1/4 text-yellow-600"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          buzz.efficiency++
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-1/3 text-yellow-600"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
        >
          hive.productivity = MAX
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-yellow-600"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 4 }}
        >
          swarm.intelligence.active()
        </motion.div>
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
        {/* Honeycomb & Bee Background */}
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
                    <div className="font-semibold text-slate-700 dark:text-slate-slate-300 text-sm transition-colors duration-200">
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
              
              {/* Main heading with enhanced backdrop */}
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

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                <span className="force-ai-text">AI</span> Support Available
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="text-3xl font-bold text-yellow-500 mb-2">70%</div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Faster Response Times</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-slate-700/10 border border-transparent dark:border-slate-700 transition-colors duration-200">
              <div className="text-3xl font-bold text-yellow-500 mb-2">∞</div>
              <div className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Scalable Solutions</div>
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