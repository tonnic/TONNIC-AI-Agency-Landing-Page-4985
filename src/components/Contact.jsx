import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiCalendar, FiX, FiMic, FiUser, FiMessageSquare, FiSend, FiCheck, FiAlertCircle, FiLinkedin, FiGlobe, FiBuilding } = FiIcons;

const Contact = () => {
  const [showCalModal, setShowCalModal] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    // Company Info
    company: '',
    website: '',
    service: 'General Inquiry', // Default value
    message: '',
    // Consent
    optInConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [webhookResponse, setWebhookResponse] = useState(null);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (showCalModal) {
        console.log('Contact: Received globalEscape event, closing cal modal');
        setShowCalModal(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [showCalModal]);

  // Listen for global calendar modal events
  useEffect(() => {
    const handleOpenCalModal = () => {
      setShowCalModal(true);
    };

    window.addEventListener('openCalModal', handleOpenCalModal);
    return () => window.removeEventListener('openCalModal', handleOpenCalModal);
  }, []);

  const openCalModal = () => {
    setShowCalModal(true);
  };

  const closeCalModal = () => {
    setShowCalModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if consent is given
    if (!formData.optInConsent) {
      setSubmitError('You must provide consent to communications in order to submit this form.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const webhookUrl = 'https://api1.tonnic.ai/webhook/6af91990-0957-4380-a771-3609fe8cb4d6';
      const payload = {
        // Personal Info
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin || '',
        // Company Info
        company: formData.company || '',
        website: formData.website || '',
        service: formData.service,
        message: formData.message,
        // Consent
        opt_in_consent: formData.optInConsent,
        consent_timestamp: new Date().toISOString(),
        consent_text: "I consent to receive communications from TONNIC AI Agency via email, SMS, or phone calls regarding my inquiry and related services.",
        timestamp: new Date().toISOString(),
        source: 'website_contact_form'
      };

      console.log('Submitting form with payload:', payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer dvn1;cCR7Pf5',
          'X-Source': 'TONNIC-Website',
          'User-Agent': 'TONNIC-ContactForm/1.0'
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Try to parse response regardless of status
      let responseData;
      const responseText = await response.text();
      console.log('Raw response text:', responseText);

      try {
        responseData = JSON.parse(responseText);
        console.log('Parsed response data:', responseData);
      } catch (parseError) {
        console.log('Failed to parse JSON, using raw text as message');
        responseData = { message: responseText };
      }

      setWebhookResponse(responseData);

      // Consider it successful if we got a response (even with error status)
      setIsSubmitted(true);

      // Reset form after 10 seconds to allow reading the response
      setTimeout(() => {
        setIsSubmitted(false);
        setWebhookResponse(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          linkedin: '',
          company: '',
          website: '',
          service: 'General Inquiry', // Reset to default
          message: '',
          optInConsent: false
        });
      }, 10000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error sending your message. Please try again or call us directly at 1-888-442-BUZZ (1-888-442-2899).');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'General Inquiry',
    'AI Voice Agents',
    'AI Chatbots',
    'Website Design & Hosting',
    'Social Media AI',
    'API Integrations',
    'Business Automation'
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-slate-800 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our AI experts and discover how TONNIC can revolutionize your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Custom Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 transition-colors duration-200"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                Send us a message
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-200">
                <em>(We'll have our AI call you right back!)</em>
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                    <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-200">
                    Message Sent Successfully!
                  </h4>
                  
                  {/* Display webhook response */}
                  {webhookResponse && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 mb-4 text-left transition-colors duration-200">
                      <h5 className="font-semibold text-slate-800 dark:text-white mb-2 transition-colors duration-200">
                        System Response:
                      </h5>
                      
                      {/* Handle different response formats */}
                      {typeof webhookResponse === 'string' ? (
                        <p className="text-slate-700 dark:text-slate-300 transition-colors duration-200">
                          {webhookResponse}
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {webhookResponse.message && (
                            <p className="text-slate-700 dark:text-slate-300 transition-colors duration-200">
                              <strong>Message:</strong> {webhookResponse.message}
                            </p>
                          )}
                          {webhookResponse.details && (
                            <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
                              <strong>Details:</strong> {webhookResponse.details}
                            </p>
                          )}
                          {webhookResponse.status && (
                            <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
                              <strong>Status:</strong> {webhookResponse.status}
                            </p>
                          )}
                          {webhookResponse.error && (
                            <p className="text-red-600 dark:text-red-400 text-sm transition-colors duration-200">
                              <strong>Error:</strong> {webhookResponse.error}
                            </p>
                          )}
                          
                          {/* Debug info - show all response fields */}
                          <details className="mt-2">
                            <summary className="text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                              View full response (debug)
                            </summary>
                            <pre className="text-xs text-slate-500 dark:text-slate-400 mt-2 p-2 bg-slate-100 dark:bg-slate-700 rounded overflow-auto">
                              {JSON.stringify(webhookResponse, null, 2)}
                            </pre>
                          </details>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500 transition-colors duration-200">
                    <p className="text-blue-800 dark:text-blue-200 text-sm transition-colors duration-200">
                      <strong>⚡ Next Steps:</strong> Our AI voice agent will automatically call you back within the next few minutes to discuss your inquiry. 
                      If you miss the call, don't worry - you can also reach us directly at{' '}
                      <a href="tel:+18884422899" className="underline hover:text-blue-600 dark:hover:text-blue-300">
                        1-888-442-BUZZ (1-888-442-2899)
                      </a>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start transition-colors duration-200"
                    >
                      <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 dark:text-red-300 text-sm transition-colors duration-200">{submitError}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center transition-colors duration-200">
                        <SafeIcon icon={FiUser} className="w-5 h-5 mr-2 text-yellow-500" />
                        Personal Information
                      </h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              Full Name *
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="John Doe"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              Email Address *
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              LinkedIn Profile
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiLinkedin} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="linkedin.com/in/yourprofile"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Information Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center transition-colors duration-200">
                        <SafeIcon icon={FiBuilding} className="w-5 h-5 mr-2 text-yellow-500" />
                        Company Information
                      </h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              Company Name
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="Your Company"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                              Company Website
                            </label>
                            <div className="relative">
                              <SafeIcon icon={FiGlobe} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                              <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                                placeholder="https://yourcompany.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                            Service Interest *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200"
                          >
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Section */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-200">
                        Message *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 resize-vertical"
                          placeholder="Tell us about your project and how we can help..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Consent Checkbox - Twilio Compliance */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border-l-4 border-yellow-500 transition-colors duration-200">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="optInConsent"
                          name="optInConsent"
                          required
                          checked={formData.optInConsent}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-slate-300 rounded"
                        />
                        <label htmlFor="optInConsent" className="ml-3 text-sm text-slate-700 dark:text-slate-300 transition-colors duration-200">
                          <span className="font-semibold text-slate-800 dark:text-white">Communication Consent Required *</span>
                          <br />
                          By submitting this form, I consent to receive communications from TONNIC AI Agency via email, SMS text messages, or phone calls regarding my inquiry and related AI services. I understand that message and data rates may apply, and I can opt out at any time by replying STOP to SMS messages or unsubscribing from emails.
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.optInConsent}
                      className="w-full bg-yellow-500 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-slate-800 border-t-transparent rounded-full animate-spin mr-2"></div>
                      ) : (
                        <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl transition-colors duration-200">
                <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
                  <strong>Note:</strong> For immediate assistance, call our AI Voice Agent at{' '}
                  <a
                    href="tel:+18884422899"
                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 underline focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 dark:focus:ring-offset-slate-800 rounded transition-colors duration-200"
                  >
                    1-888-442-BUZZ (1-888-442-2899)
                  </a>
                  {' '}who can answer questions and connect you with our team.
                </p>
              </div>

              {/* Alternative Contact Methods */}
              <div className="mt-6 grid grid-cols-1 gap-4">
                <button
                  onClick={openCalModal}
                  className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus:bg-slate-200 dark:focus:bg-slate-600 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 p-3 rounded-xl transition-colors duration-200"
                  aria-label="Schedule a call"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-slate-600 dark:text-slate-300" aria-hidden="true" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-200">Schedule Call</span>
                </button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in touch
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Ready to revolutionize your business with AI? Our team of experts is here to help you implement the perfect solution for your needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMic} className="w-6 h-6 text-slate-800" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">AI Voice Agent</div>
                    <a
                      href="tel:+18884422899"
                      className="text-slate-300 hover:text-yellow-400 focus:text-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 rounded transition-colors duration-200 text-lg font-semibold"
                      aria-label="Call our AI Voice Agent at 1-888-442-BUZZ"
                    >
                      1-888-442-BUZZ
                    </a>
                    <div className="text-slate-400 text-sm mt-1">
                      (1-888-442-2899)
                    </div>
                    <p className="text-slate-400 text-sm mt-2">
                      Talk to our AI assistant 24/7 - ask questions, get information, or request to speak with our team
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-slate-800" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Contact Form</div>
                    <div className="text-slate-300">
                      Use our contact form for detailed inquiries and get an AI callback
                    </div>
                  </div>
                </div>
              </div>

              {/* Book a Meeting Button */}
              <div className="pt-4">
                <button
                  onClick={openCalModal}
                  className="w-full bg-slate-700 dark:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-600 dark:hover:bg-slate-700 focus:bg-slate-600 dark:focus:bg-slate-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all duration-200 flex items-center justify-center border-2 border-yellow-500 hover:border-yellow-400 focus:border-yellow-400"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" aria-hidden="true" />
                  Book a Meeting
                </button>
              </div>

              <div className="bg-slate-700 dark:bg-slate-800 rounded-2xl p-6 transition-colors duration-200">
                <h4 className="text-white font-semibold mb-4">Why work with us?</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" aria-hidden="true"></div>
                    Free consultation and needs assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" aria-hidden="true"></div>
                    Custom AI solutions tailored to your business
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" aria-hidden="true"></div>
                    Ongoing support and optimization
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
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
              <h3 id="cal-modal-title" className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-200">Book a Meeting</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-200">Schedule a 30-minute consultation with our AI experts to discuss your business needs</p>
            </div>
            <div className="h-[600px]">
              <iframe
                src="https://cal.com/tonnic/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a meeting with TONNIC"
                className="rounded-b-2xl"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Contact;