import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const { FiArrowLeft, FiShield, FiEye, FiLock, FiPhone, FiMic, FiGlobe, FiUsers, FiAlertTriangle, FiClock, FiSettings } = FiIcons;

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

                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-500 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center">
                    <SafeIcon icon={FiMic} className="w-5 h-5 mr-2 text-red-500" />
                    Voice & Call Data (Important Notice)
                  </h3>
                  <ul className="space-y-2 text-red-700 dark:text-red-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Voice Recordings:</strong> When you call our AI voice agents at 1-888-442-BUZZ (1-888-442-2899) or interact with our voice services, ALL conversations are recorded and processed for service delivery, quality assurance, and AI training purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Call Metadata:</strong> Phone numbers, call duration, timestamps, call routing information, and caller ID details</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Conversation Transcripts:</strong> AI-generated text transcriptions of all voice interactions for analysis, service improvement, and record-keeping</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Voice Patterns:</strong> Voice characteristics and patterns may be analyzed for service optimization (not used for biometric identification)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>AI Platform Sharing:</strong> Voice data is processed by our AI service providers including Thoughtly, Retell, Vapi, and ElevenLabs under strict confidentiality agreements</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm font-semibold">
                      🎙️ CONSENT NOTICE: By calling our AI voice services, you explicitly consent to voice recording and processing. If you do not consent, please do not use our voice services.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiGlobe} className="w-5 h-5 mr-2 text-yellow-500" />
                    Digital Interaction Data
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Website Usage:</strong> IP address, browser type, device type, operating system, pages visited, timestamps, and navigation patterns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Chatbot Interactions:</strong> All messages, queries, and responses from AI chatbot conversations on our website</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Cookies & Tracking:</strong> Session cookies, preference cookies, analytics cookies, and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Payment & Transaction Data</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Payment details are collected and processed by trusted third-party payment processors. We do not store full payment card details on our servers. Transaction records and billing information are retained for accounting and legal purposes.
                  </p>
                </div>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiLock} className="w-6 h-6 mr-3 text-yellow-500" />
                2. How We Use Your Information
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2 text-blue-500" />
                    Voice Services & AI Operations
                  </h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Service Delivery:</strong> Provide AI voice agent services, handle customer inquiries, and process voice-based requests</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>AI Training:</strong> Use anonymized voice data to train and improve AI models for better conversation quality and accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Quality Assurance:</strong> Monitor call quality, review conversations, and ensure service standards are met</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Analytics:</strong> Generate insights for business optimization and service improvement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Compliance:</strong> Maintain records for regulatory compliance and dispute resolution</span>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Service Delivery:</strong> Provide, maintain, and enhance all our AI-driven solutions, phone-based services, and digital offerings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Communication:</strong> Send service notifications, respond to inquiries, and with consent, send marketing communications (CASL compliant)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Personalization:</strong> Customize user experiences and optimize our services based on usage patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Legal Compliance:</strong> Meet legal, regulatory, or law enforcement requirements and protect our rights</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiSettings} className="w-6 h-6 mr-3 text-yellow-500" />
                3. AI Service Providers & Third-Party Sharing
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">AI Platform Partners</h3>
                  <p className="text-purple-700 dark:text-purple-300 mb-3">
                    We work with industry-leading AI service providers who process your voice data under strict contractual obligations:
                  </p>
                  <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Thoughtly:</strong> AI voice conversation processing and management (Premier Partner)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Retell:</strong> Voice AI infrastructure and real-time conversation handling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Vapi:</strong> Voice AI orchestration and call management services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>ElevenLabs:</strong> AI voice synthesis and speech generation technology</span>
                    </li>
                  </ul>
                  <p className="text-purple-600 dark:text-purple-400 text-sm mt-3">
                    All partners are contractually bound to protect your data and use it solely for providing AI voice services.
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Service Providers:</strong> Hosting, analytics, payment processing, and technical infrastructure providers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Business Transactions:</strong> Information may be transferred in mergers, acquisitions, or asset sales with equivalent privacy protections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Legal Requirements:</strong> Disclosure when required by law, court order, or to protect legal rights</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiClock} className="w-6 h-6 mr-3 text-yellow-500" />
                4. Data Retention & Storage
              </h2>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 mb-8 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-4">Voice Data Retention Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-orange-700 dark:text-orange-300 font-semibold">Voice Recordings: </span>
                      <span className="text-orange-600 dark:text-orange-400">Retained for up to 2 years for service improvement and quality assurance</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-orange-700 dark:text-orange-300 font-semibold">Call Transcripts: </span>
                      <span className="text-orange-600 dark:text-orange-400">Retained for up to 2 years for analysis and training purposes</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-orange-700 dark:text-orange-300 font-semibold">Call Metadata: </span>
                      <span className="text-orange-600 dark:text-orange-400">Retained for up to 3 years for business and compliance purposes</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-orange-700 dark:text-orange-300 font-semibold">Personal Information: </span>
                      <span className="text-orange-600 dark:text-orange-400">Retained as long as necessary for service delivery and legal requirements</span>
                    </div>
                  </div>
                </div>
                <p className="text-orange-600 dark:text-orange-400 text-sm mt-4">
                  You may request earlier deletion of your voice data by contacting hello@tonnic.ai
                </p>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 mr-3 text-yellow-500" />
                5. Canadian Legal Basis (PIPEDA & CASL)
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-8 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Under PIPEDA, we collect, use, and disclose personal information with appropriate consent or as otherwise permitted by law:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Implied Consent:</strong> For clearly communicated purposes when you voluntarily provide information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Express Consent:</strong> Required for voice recording and marketing communications (CASL compliant)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Withdrawal Rights:</strong> You can withdraw consent at any time (may limit service access)</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 mr-3 text-yellow-500" />
                6. Your Rights & Choices
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">Voice Data Rights</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Access:</strong> Request copies of your voice recordings and transcripts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Deletion:</strong> Request deletion of your voice recordings and related data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Opt-Out:</strong> Stop using voice services to prevent future voice data collection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Correction:</strong> Request correction of inaccurate transcripts or personal information</span>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Marketing Opt-Out:</strong> Unsubscribe from emails or SMS by following unsubscribe instructions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Cookie Management:</strong> Control cookies through browser settings (may affect functionality)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Complaint Rights:</strong> Contact Privacy Commissioner of Canada if concerns are not resolved</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">7. International Transfers & Security</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your data. While our operations are primarily in Canada, some AI service providers may process data outside Canada. We ensure appropriate safeguards through contractual protections and compliance with Canadian privacy requirements.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">8. Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Our services are not intended for individuals under 18. We do not knowingly collect personal information from minors. If you believe we have collected data from a child, please contact us immediately for deletion.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">9. Policy Updates</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be posted with an updated "Last Updated" date. Continued use of our services after updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Us</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  For questions, concerns, or requests about this Privacy Policy or your personal information:
                </p>
                <div className="space-y-2">
                  <p className="text-slate-700 dark:text-slate-300 font-semibold">TONNIC AI Agency</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Email: <a href="mailto:hello@tonnic.ai" className="text-yellow-500 hover:text-yellow-600 underline">hello@tonnic.ai</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Phone: <a href="tel:+18884422899" className="text-yellow-500 hover:text-yellow-600 underline">1-888-442-BUZZ (1-888-442-2899)</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">Website: https://tonnic.agency</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                  We respond to privacy inquiries promptly and in accordance with Canadian privacy laws.
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