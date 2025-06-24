import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const { FiArrowLeft, FiShield, FiEye, FiLock, FiPhone, FiMic, FiGlobe, FiUsers } = FiIcons;

const PrivacyPolicy = () => {
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
                <SafeIcon icon={FiShield} className="w-8 h-8 text-slate-800" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-200">
                Privacy Policy
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-200">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
              Last updated: February 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Introduction */}
              <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500 transition-colors duration-200">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-0 transition-colors duration-200">
                  TONNIC AI Agency ("we," "us," "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard personal data when you use our website (https://tonnic.agency), our services (including AI-driven tools and phone-based solutions), or otherwise interact with us. We primarily comply with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada's Anti-Spam Legislation (CASL).
                </p>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiEye} className="w-6 h-6 mr-3 text-yellow-500" />
                1. Information We Collect
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 mr-2 text-yellow-500" />
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Contact Details:</strong> Name, email address, phone number, and other details you provide when filling out forms, signing up for communications, or using our AI/chatbot services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Business Information:</strong> Company name, role/title, or other relevant corporate details (if applicable)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiMic} className="w-5 h-5 mr-2 text-yellow-500" />
                    AI Interaction & Voice Data
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Voice Recordings:</strong> When you interact with our AI voice agents, we may record and process voice conversations to provide services, improve AI responses, and ensure quality control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Call Metadata:</strong> Phone numbers, call duration, timestamps, and call routing information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Conversation Transcripts:</strong> AI-generated transcriptions of voice interactions for analysis and service improvement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Chatbot Interactions:</strong> Messages, queries, and responses from AI chatbot conversations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Usage Data</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Information about how you navigate or use our website, including IP address, browser type, device type, operating system, pages visited, and timestamps. We use this data to improve user experience and site functionality.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Payment Information</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    When you purchase our services, payment details may be collected and processed by our trusted third-party payment processors. We do not store full payment details on our servers.
                  </p>
                </div>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiLock} className="w-6 h-6 mr-3 text-yellow-500" />
                2. How We Use Your Information
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2 text-yellow-500" />
                    Voice & AI Services
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span>Provide AI voice agent services and handle customer inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span>Train and improve AI models for better conversation quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span>Monitor call quality and ensure service standards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span>Generate analytics and insights for business optimization</span>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Service Delivery:</strong> Provide, maintain, and enhance our AI-driven solutions, phone-based services, and other offerings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Communication:</strong> Send service-related notifications, respond to inquiries, and with your consent, send marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Personalization:</strong> Tailor user experiences and optimize our website and services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Legal Compliance:</strong> Meet legal, regulatory, or law enforcement requirements</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 mr-3 text-yellow-500" />
                3. Canadian Legal Basis (PIPEDA & CASL)
              </h2>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-8 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Under PIPEDA, we collect, use, and disclose personal information with consent or as otherwise permitted or required by law. We ensure our collection and use are reasonable and appropriate in the circumstances:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Implied Consent:</strong> May apply where the purpose of collection or use is clear and you voluntarily provide information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Express Consent:</strong> Required for certain data uses (e.g., marketing messages under CASL). You can withdraw consent at any time</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">4. Voice Recording & AI Processing</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">Important Notice About Voice Recordings</h3>
                <ul className="space-y-3 text-red-700 dark:text-red-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span><strong>Recording Consent:</strong> By using our AI voice services, you consent to the recording and processing of your voice conversations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span><strong>Retention Period:</strong> Voice recordings are retained for service improvement and quality assurance purposes as outlined in our data retention policy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span><strong>AI Training:</strong> Anonymized voice data may be used to train and improve our AI models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span><strong>Opt-Out:</strong> You may request deletion of your voice recordings by contacting hello@tonnic.ai</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">5. Data Sharing & Third-Party Services</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">AI & Phone Service Partners</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We work with trusted AI and telecommunications providers (including Thoughtly, Retell, Vapi, ElevenLabs) who are contractually obligated to protect your information and only use it to perform their specific services.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Service Providers:</strong> Third-party providers for hosting, analytics, payment processing bound by confidentiality agreements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Business Transactions:</strong> Information may be transferred in mergers, acquisitions, or asset sales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Legal Requirements:</strong> Disclosure when required by law or to protect our legal rights</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">6. Data Security & International Transfers</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We implement reasonable technical and organizational measures to protect personal information from unauthorized access, disclosure, or misuse. While our primary operations may be located in Canada, certain service providers (e.g., cloud hosting, AI platforms) could be based outside of Canada. We ensure appropriate safeguards through contractual clauses to protect personal information, consistent with Canadian privacy requirements.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">7. Your Rights & Choices</h2>
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Access & Correction:</strong> Request access to and correction of your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Consent Withdrawal:</strong> Withdraw consent for data use (may limit service access)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Voice Recording Deletion:</strong> Request deletion of voice recordings and transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Marketing Opt-Out:</strong> Unsubscribe from marketing communications at any time</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">8. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Voice recordings and transcripts are typically retained for up to 2 years for service improvement and quality assurance, unless you request earlier deletion.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">9. Note for U.S. Residents</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                While we are a Canadian company, we also serve customers located in the United States. We strive to comply with relevant U.S. data-protection requirements as applicable. If you have questions about how your data is handled under specific U.S. regulations (e.g., California Consumer Privacy Act), please contact us.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Us</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-slate-700 dark:text-slate-300 font-semibold">TONNIC AI Agency</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Email: <a href="mailto:hello@tonnic.ai" className="text-yellow-500 hover:text-yellow-600 underline">hello@tonnic.ai</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Phone: <a href="tel:+18882925513" className="text-yellow-500 hover:text-yellow-600 underline">1-888-292-5513</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">Website: https://tonnic.agency</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                  We will make every reasonable effort to address your inquiry promptly and in accordance with applicable Canadian privacy laws.
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

export default PrivacyPolicy;