import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiSettings, FiZap, FiTrendingUp } = FiIcons;

const HowItWorks = () => {
  const steps = [
    {
      icon: FiSearch,
      title: "Discovery",
      description: "We analyze your business needs and identify automation opportunities to maximize efficiency."
    },
    {
      icon: FiSettings,
      title: "Integration",
      description: "Seamless integration of AI solutions with your existing systems and workflows."
    },
    {
      icon: FiZap,
      title: "Automation",
      description: "Deploy intelligent automation that works 24/7 to streamline your business processes."
    },
    {
      icon: FiTrendingUp,
      title: "Results",
      description: "Monitor performance and enjoy increased productivity with measurable business outcomes."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-800 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures successful AI implementation and maximum ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-yellow-500 text-slate-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="bg-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={step.icon} className="w-10 h-10 text-slate-800" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-yellow-500/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;