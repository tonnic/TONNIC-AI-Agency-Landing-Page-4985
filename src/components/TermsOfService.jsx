import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from './Header';
import Footer from './Footer';

const {FiArrowLeft, FiFileText, FiCheckCircle, FiAlertTriangle, FiShield, FiUsers, FiSettings} = FiIcons;

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
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
              Please read these terms carefully before using our AI services.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
              Last updated: February 2025
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-slate-700/20 transition-colors duration-200"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 mr-3 text-yellow-500" />
                Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                By accessing and using TONNIC AI Agency's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Service Description</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                TONNIC AI Agency provides artificial intelligence solutions including but not limited to:
              </p>
              <div className="space-y-3 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">AI Voice Agents for customer service and business communications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">AI Chatbots for lead generation and customer support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Website design and development services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Business automation and API integrations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Social media AI management</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 mr-3 text-red-500" />
                Third-Party Service Dependencies
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 mb-8 border-l-4 border-red-500 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4">Critical Service Notice</h3>
                <p className="text-red-700 dark:text-red-300 mb-4 leading-relaxed">
                  Our AI services rely on third-party platforms and APIs including but not limited to OpenAI, Anthropic, Google Cloud, Amazon Web Services, Thoughtly, Retell, Vapi, ElevenLabs, and other AI service providers. 
                </p>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-red-700 dark:text-red-300"><strong>Service Interruptions:</strong> We are not liable for service outages, downtime, or performance issues caused by third-party providers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-red-700 dark:text-red-300"><strong>API Limitations:</strong> Third-party rate limits, policy changes, or service restrictions may affect our service delivery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-red-700 dark:text-red-300"><strong>Data Processing:</strong> Your data may be processed by third-party AI providers under their respective terms and privacy policies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-red-700 dark:text-red-300"><strong>Force Majeure:</strong> We are not responsible for failures due to circumstances beyond our control, including third-party service disruptions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiShield} className="w-6 h-6 mr-3 text-yellow-500" />
                Client Compliance Responsibilities
              </h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 mb-8 border-l-4 border-orange-500 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-4">Legal and Regulatory Compliance</h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4 leading-relaxed">
                  You are solely responsible for ensuring your use of our AI services complies with all applicable laws, regulations, and industry standards:
                </p>
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-orange-700 dark:text-orange-300"><strong>Outbound Communications:</strong> You must obtain explicit consent before using AI services for outbound calls, SMS, or emails. Compliance with TCPA, CAN-SPAM, CASL, GDPR, and local regulations is your responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-orange-700 dark:text-orange-300"><strong>Data Protection:</strong> You are responsible for compliance with privacy laws including GDPR, CCPA, PIPEDA, and other applicable data protection regulations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-orange-700 dark:text-orange-300"><strong>Industry Regulations:</strong> Healthcare (HIPAA), financial services (SOX, PCI DSS), and other industry-specific compliance requirements are your responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-orange-700 dark:text-orange-300"><strong>Recording Consent:</strong> You must obtain proper consent for call recording and voice data processing in jurisdictions where required</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-orange-700 dark:text-orange-300"><strong>Do Not Call Lists:</strong> You must maintain and respect Do Not Call registries and opt-out requests</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">User Responsibilities & Acceptable Use</h2>
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Providing accurate and complete information for service setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Maintaining the security of your account credentials and access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Using our services in compliance with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Not using our AI services for illegal, harmful, or unethical purposes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Obtaining proper consent for all data collection and communication activities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Implementing appropriate safeguards for sensitive or regulated data</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiSettings} className="w-6 h-6 mr-3 text-yellow-500" />
                Service Availability & Performance
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  While we strive to provide reliable service, we cannot guarantee:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>100% Uptime:</strong> Service may be interrupted for maintenance, updates, or due to third-party provider issues</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>AI Accuracy:</strong> AI responses are generated using machine learning and may not always be 100% accurate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Third-Party Availability:</strong> Our services depend on external AI providers and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Performance Variations:</strong> Response times and quality may vary based on system load and complexity</span>
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                  We will provide reasonable notice for planned maintenance and work to minimize service disruptions.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Payment Terms</h2>
              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Payment is due according to the agreed-upon terms in your service agreement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Late payments may result in service suspension or termination</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Refunds are handled on a case-by-case basis and may be prorated</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">You are responsible for any applicable taxes and third-party fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400">Additional usage beyond agreed limits may incur extra charges</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                All content, features, and functionality of our services are owned by TONNIC AI Agency and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written permission. You retain ownership of your data and content provided to our services.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Limitation of Liability</h2>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-8 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  TONNIC AI Agency's liability is limited as follows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Direct Damages:</strong> Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Indirect Damages:</strong> We are not liable for indirect, incidental, special, consequential, or punitive damages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Third-Party Issues:</strong> We are not liable for damages caused by third-party service failures, data breaches, or policy changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>Compliance Issues:</strong> We are not liable for regulatory fines, penalties, or legal issues arising from your use of our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-slate-600 dark:text-slate-400"><strong>AI Decisions:</strong> We are not liable for decisions made by AI systems or their consequences</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
                <SafeIcon icon={FiUsers} className="w-6 h-6 mr-3 text-yellow-500" />
                Indemnification
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                You agree to indemnify and hold harmless TONNIC AI Agency from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from: (1) your use of our services, (2) your violation of these terms, (3) your violation of applicable laws or regulations, (4) your failure to obtain proper consent for communications, (5) any compliance violations in your industry or jurisdiction, or (6) any third-party claims related to your use of our AI services.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Termination</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Either party may terminate the service agreement with appropriate notice as specified in your individual service contract. We may immediately suspend or terminate services for: (1) non-payment, (2) violation of these terms, (3) illegal or harmful use, (4) compliance violations, or (5) if required by third-party service providers. Upon termination, your access to our services will cease, any outstanding payments will become due immediately, and we may delete your data according to our data retention policies.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Governing Law & Dispute Resolution</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                These terms are governed by Canadian law. Any disputes will be resolved through binding arbitration in Canada, except for claims related to intellectual property which may be pursued in court. You waive any right to participate in class action lawsuits.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Changes to Terms</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We may update these Terms of Service at any time. Material changes will be communicated via email or service notifications at least 30 days before taking effect. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 transition-colors duration-200">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  For questions about these Terms of Service:
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