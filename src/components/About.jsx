import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiShield, FiEye, FiUsers, FiAward} = FiIcons;

const About = () => {
  const trustFactors = [
    {
      icon: FiShield,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: FiEye,
      title: "Privacy First",
      description: "Your data remains private and secure. We never share or sell your information to third parties."
    },
    {
      icon: FiUsers,
      title: "Human Oversight",
      description: "AI-powered with human supervision to ensure quality, accuracy, and ethical decision-making."
    },
    {
      icon: FiAward,
      title: "Proven Technology",
      description: "Built on industry-leading AI platforms with cutting-edge technology and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-200">
              Why Choose TONNIC?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-200">
              At TONNIC, we believe in the power of AI to transform businesses while maintaining the highest standards of security, privacy, and ethical practices. Our solutions are designed to augment human capabilities, not replace them.
            </p>
            <div className="space-y-6">
              {trustFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: index * 0.1}}
                  viewport={{once: true}}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={factor.icon} className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                      {factor.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 transition-colors duration-200">
                      {factor.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="relative"
          >
            <div className="bg-slate-800 dark:bg-slate-700 rounded-3xl p-8 text-center transition-colors duration-200">
              <div className="bg-yellow-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750775863529-tonnicaiagencytall-whitespace.png" 
                  alt="TONNIC AI" 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-300 mb-6">
                Join forward-thinking businesses that are embracing AI to unlock new possibilities and drive growth.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-700 dark:bg-slate-600 rounded-xl p-4 transition-colors duration-200">
                  <div className="text-lg font-semibold text-yellow-500 mb-1">Cost Reduction</div>
                  <div className="text-sm text-slate-300">Save 40-70% on operational costs</div>
                </div>
                <div className="bg-slate-700 dark:bg-slate-600 rounded-xl p-4 transition-colors duration-200">
                  <div className="text-lg font-semibold text-yellow-500 mb-1">24/7 Operations</div>
                  <div className="text-sm text-slate-300">Never miss opportunities or customer needs</div>
                </div>
                <div className="bg-slate-700 dark:bg-slate-600 rounded-xl p-4 transition-colors duration-200">
                  <div className="text-lg font-semibold text-yellow-500 mb-1">Instant Scalability</div>
                  <div className="text-sm text-slate-300">Handle unlimited growth without hiring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;