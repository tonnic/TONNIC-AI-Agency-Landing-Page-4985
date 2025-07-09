import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const { 
  FiArrowLeft, 
  FiFileText, 
  FiCheckCircle, 
  FiAlertTriangle, 
  FiShield, 
  FiUsers, 
  FiSettings, 
  FiDollarSign, 
  FiLock, 
  FiEye, 
  FiInfo, 
  FiBookOpen, 
  FiCpu
} = FiIcons;

const TermsOfService = () => {
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
                <SafeIcon icon={FiFileText} className="w-8 h-8 text-slate-800" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-200">
              Everything you need to know about working with us
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
              Last updated: February 2025
            </p>
          </motion.div>

          {/* Introduction Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-10 border-l-4 border-yellow-500 transition-colors duration-200"
          >
            <h2 className="text-xl font-bold text-slate-800 dark:text-yellow-400 mb-4 flex items-center">
              <SafeIcon icon={FiInfo} className="w-5 h-5 mr-2 text-yellow-500" />
              Welcome to TONNIC AI Agency
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              This page explains how we work with our clients, what you can expect from us, and what we need from you to create a successful partnership. These terms are designed to create clarity and set expectations, not to burden you with legal jargon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              {/* SECTION 1: WORKING TOGETHER */}
              <section id="working-together">
                <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 mr-3 text-yellow-500" />
                  Working Together
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  A successful partnership requires clarity on both sides. Here's how we approach our client relationships:
                </p>
                
                {/* Project Process */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiSettings} className="w-5 h-5 mr-2 text-yellow-500" />
                    Our Project Process
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-4">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-white">Discovery & Scoping</span>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            We start with a clear definition of what we'll build, including deliverables, timelines, and pricing. This becomes our shared roadmap.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-white">Development & Integration</span>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            We build your solution according to the agreed scope, keeping you updated throughout the process.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-white">Testing & Refinement</span>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            We test thoroughly and make adjustments to ensure everything works as expected.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-yellow-500 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-white">Launch & Support</span>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            We deploy your solution and provide ongoing support and optimization.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      <strong>Change Requests:</strong> Need something beyond the original scope? No problem! We handle changes through a simple, transparent process. We'll discuss the impact on timeline and budget before proceeding.
                    </p>
                  </div>
                </div>
                
                {/* Payment & Refunds */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 mr-2 text-yellow-500" />
                    Payment & Refund Policy
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-4">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      We believe in transparent pricing and fair policies:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Custom Work:</strong> Our services are tailored specifically to your business. Because we begin investing our time and expertise immediately, all sales are final and non-refundable.</span>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Payment Terms:</strong> We'll agree on payment milestones in advance, typically with a deposit to start work and remaining payments tied to project milestones.</span>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Third-Party Costs:</strong> Subscriptions to platforms like Thoughtly, n8n, NocoDB, Zapier, Make, or other third-party services are typically paid directly by you and remain under your control.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-purple-800 dark:text-purple-300 text-sm">
                      <strong>Why No Refunds?</strong> Unlike physical products, custom professional services begin consuming our resources immediately. We invest in understanding your business, planning solutions, and dedicating our team's expertise to your project from day one.
                    </p>
                  </div>
                </div>
                
                {/* Roles & Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2 text-yellow-500" />
                    Our Roles & Responsibilities
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">What We'll Do</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Design and build solutions that meet your business needs</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Implement according to agreed specifications and timelines</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Provide guidance on best practices and platform selection</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Troubleshoot issues within our implementation</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Assist with third-party platform challenges to the best of our ability</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Recommend workarounds for platform limitations where possible</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">What We Need From You</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Timely communication and feedback throughout the project</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Accurate, complete data for AI training and system setup</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Management of your third-party platform subscriptions and appropriate plan selection</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Compliance with relevant laws and regulations</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Prompt payment according to agreed terms</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-1.5"></div>
                          <span className="text-slate-600 dark:text-slate-400">Understanding of third-party platform limitations and constraints</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Third-Party Services and Limitations */}
                <section id="third-party-services">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiCpu} className="w-5 h-5 mr-2 text-yellow-500" />
                    Third-Party Services & Limitations
                  </h3>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Important: Client Responsibility for Service Plans</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm mb-4">
                      Our solutions often rely on third-party platforms like NocoDB, n8n, Zapier, Make, and other services that have their own subscription plans, usage limits, and rate limitations. It is your responsibility to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-red-700 dark:text-red-300 text-sm"><strong>Select Appropriate Plans:</strong> Choose subscription tiers that align with your expected usage volume and feature requirements.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-red-700 dark:text-red-300 text-sm"><strong>Monitor Usage:</strong> Regularly monitor your usage to prevent unexpected service disruptions or additional charges.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-red-700 dark:text-red-300 text-sm"><strong>Understand Limitations:</strong> Be aware of platform-specific constraints like API rate limits, memory usage, storage limits, and concurrent operations.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-red-700 dark:text-red-300 text-sm"><strong>Upgrade When Necessary:</strong> Be prepared to upgrade plans as your usage grows to maintain service quality.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Common Third-Party Limitations</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Different platforms have different constraints that may affect your solution:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">API Rate Limits</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Services like NocoDB (5 API calls/second) or other platforms impose limits on how frequently API requests can be made. When these limits are reached, operations may be delayed or fail.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Memory & Resource Constraints</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Automation platforms like n8n hold workflows in memory. Complex workflows with wait states or long operations may consume significant resources, potentially exceeding plan limits on cloud-hosted instances.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Operations Quotas</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Zapier, Make, and similar platforms limit operations per month. High-volume workflows may quickly consume these quotas, requiring plan upgrades.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Execution Time Limits</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Some platforms impose maximum execution times for workflows, which may affect complex processes with multiple steps or external dependencies.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl mb-6">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">Our Approach to Platform Limitations</h4>
                    <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">
                      While we can't change third-party platform limitations, here's how we work with them:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-amber-700 dark:text-amber-300 text-sm"><strong>Workaround Implementation:</strong> When possible, we'll design workarounds like implementing wait timers or batch processing to manage rate limits.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-amber-700 dark:text-amber-300 text-sm"><strong>Architectural Optimization:</strong> We'll architect solutions to minimize resource usage and optimize for your chosen plan's constraints.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-amber-700 dark:text-amber-300 text-sm"><strong>Plan Recommendations:</strong> We'll recommend appropriate service plans based on your expected usage and requirements.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-amber-700 dark:text-amber-300 text-sm"><strong>Technical Limitations Transparency:</strong> We'll clearly communicate when we encounter platform limitations that cannot be circumvented and discuss alternative approaches.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded-lg mt-4">
                      <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                        <strong>Important Note:</strong> Some platform limitations (like NocoDB's API rate limits) cannot be fully mitigated if the platform doesn't provide API access to check or wait for rate limit status. In these cases, we'll implement best-effort solutions, but you should be aware of the inherent limitations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 dark:text-blue-300 text-sm">
                      <strong>Our Commitment:</strong> We'll work with you to make the most of your chosen platforms within their constraints. If limitations become problematic, we'll help you evaluate alternative solutions or plan upgrades to better meet your needs.
                    </p>
                  </div>
                </section>
                
                {/* AI Expectations */}
                <div className="mb-8 mt-8">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 mr-2 text-yellow-500" />
                    Setting AI Expectations
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Artificial Intelligence is powerful but has natural limitations:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Continuous Learning:</strong> AI systems improve over time but may occasionally produce unexpected or imperfect results.</span>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Data Dependency:</strong> AI quality depends significantly on the data provided. More accurate and comprehensive data typically leads to better performance.</span>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-400"><strong>Ongoing Optimization:</strong> AI systems benefit from regular monitoring and refinement based on real-world performance.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* SECTION 2: DATA SECURITY */}
              <section id="data-security">
                <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <SafeIcon icon={FiLock} className="w-6 h-6 mr-3 text-yellow-500" />
                  Data Security & Privacy
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  We take the security and privacy of your data seriously:
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        <SafeIcon icon={FiLock} className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-white">Encryption & Security</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          We implement industry-standard encryption and security measures to protect your data during transmission and storage.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        <SafeIcon icon={FiEye} className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-white">Privacy Practices</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          We only collect and use data necessary for providing our services. For complete details, please review our <a href="/privacy" className="text-yellow-600 dark:text-yellow-400 hover:underline">Privacy Policy</a>.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        <SafeIcon icon={FiShield} className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-white">Data Handling</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          We maintain appropriate data retention policies and secure deletion practices. We don't sell your data to third parties.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500 mb-8">
                  <p className="text-indigo-800 dark:text-indigo-300 text-sm">
                    <strong>Voice Data Notice:</strong> When using our AI voice agent services, calls are recorded and processed for service delivery and quality assurance. By using these services, you consent to call recording and processing. For details, see our <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </section>
              
              {/* SECTION 3: LEGAL ESSENTIALS */}
              <section>
                <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <SafeIcon icon={FiBookOpen} className="w-6 h-6 mr-3 text-yellow-500" />
                  Legal Essentials
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  While we prefer plain language, certain legal provisions are necessary to protect both parties:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Intellectual Property</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      We retain ownership of our pre-existing tools, frameworks, and methodologies. You own your data and the custom solutions we create specifically for you.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Limitation of Liability</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Our liability is limited to the amount paid for our services. We're not liable for indirect or consequential damages, third-party service failures, or issues caused by inaccurate client data.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Warranties</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      We warrant our services will be performed professionally and according to industry standards. However, we don't guarantee specific business outcomes or third-party platform performance.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Governing Law</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      These terms are governed by Canadian law. Disputes will be resolved through arbitration in Canada, except for intellectual property claims which may go to court.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-xl mb-8">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-600 pb-2">Changes to These Terms</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    We may update these terms occasionally. We'll notify you of significant changes 30 days before they take effect. Continued use of our services after changes indicates your acceptance of the updated terms.
                  </p>
                </div>
              </section>
              
              {/* ACCEPTANCE */}
              <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border-t-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Acceptance of Terms</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  By using TONNIC AI Agency's services, you accept and agree to these terms. If you have questions or concerns, please contact us before proceeding.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
                  Last updated: February 2025
                </p>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;