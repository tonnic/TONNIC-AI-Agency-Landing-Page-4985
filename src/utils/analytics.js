// Advanced Analytics Utility for TONNIC AI Agency
// Supports Google Analytics 4, Facebook Pixel, and custom event tracking

class AnalyticsManager {
  constructor() {
    this.isInitialized = false;
    this.debug = process.env.NODE_ENV === 'development';
    this.events = [];
    this.userProperties = {};
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    
    // Analytics configuration
    this.config = {
      googleAnalytics: {
        measurementId: 'G-XXXXXXXXXX', // Replace with your GA4 Measurement ID
        enabled: true
      },
      facebookPixel: {
        pixelId: 'XXXXXXXXXXXXXXXXX', // Replace with your Facebook Pixel ID
        enabled: true
      },
      customAnalytics: {
        endpoint: 'https://api1.tonnic.ai/analytics',
        enabled: true
      }
    };

    this.init();
  }

  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  init() {
    if (this.isInitialized) return;

    // Initialize Google Analytics 4
    if (this.config.googleAnalytics.enabled) {
      this.initGoogleAnalytics();
    }

    // Initialize Facebook Pixel
    if (this.config.facebookPixel.enabled) {
      this.initFacebookPixel();
    }

    // Track initial page view
    this.trackPageView();

    // Track session start
    this.trackEvent('session_start', {
      session_id: this.sessionId,
      timestamp: new Date().toISOString()
    });

    this.isInitialized = true;
    this.log('Analytics initialized');
  }

  initGoogleAnalytics() {
    try {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalytics.measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', this.config.googleAnalytics.measurementId, {
        send_page_view: false, // We'll handle page views manually
        custom_map: {
          custom_parameter_1: 'lead_source',
          custom_parameter_2: 'service_interest'
        }
      });

      this.log('Google Analytics initialized');
    } catch (error) {
      this.log('Error initializing Google Analytics:', error);
    }
  }

  initFacebookPixel() {
    try {
      // Facebook Pixel initialization
      !function(f,b,e,v,n,t,s) {
        if(f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
        };
        if(!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', this.config.facebookPixel.pixelId);
      window.fbq('track', 'PageView');

      this.log('Facebook Pixel initialized');
    } catch (error) {
      this.log('Error initializing Facebook Pixel:', error);
    }
  }

  // Track page views
  trackPageView(page = null) {
    const pageData = {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      page: page || window.location.pathname,
      timestamp: new Date().toISOString(),
      session_id: this.sessionId,
      user_agent: navigator.userAgent,
      referrer: document.referrer
    };

    // Google Analytics
    if (window.gtag && this.config.googleAnalytics.enabled) {
      window.gtag('event', 'page_view', pageData);
    }

    // Facebook Pixel
    if (window.fbq && this.config.facebookPixel.enabled) {
      window.fbq('track', 'PageView', {
        content_name: pageData.page_title,
        content_category: 'page_view'
      });
    }

    // Custom analytics
    this.sendCustomEvent('page_view', pageData);
    this.log('Page view tracked:', pageData);
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    const eventData = {
      event_name: eventName,
      timestamp: new Date().toISOString(),
      session_id: this.sessionId,
      page_path: window.location.pathname,
      ...parameters
    };

    // Store event locally
    this.events.push(eventData);

    // Google Analytics
    if (window.gtag && this.config.googleAnalytics.enabled) {
      window.gtag('event', eventName, parameters);
    }

    // Facebook Pixel - map to Facebook events
    if (window.fbq && this.config.facebookPixel.enabled) {
      this.trackFacebookEvent(eventName, parameters);
    }

    // Custom analytics
    this.sendCustomEvent(eventName, eventData);
    this.log('Event tracked:', eventData);
  }

  // Map custom events to Facebook Pixel events
  trackFacebookEvent(eventName, parameters) {
    const fbEventMap = {
      'lead_generated': 'Lead',
      'contact_form_submit': 'Contact',
      'phone_call_initiated': 'Contact',
      'calendar_booking_started': 'InitiateCheckout',
      'calendar_booking_completed': 'Purchase',
      'service_viewed': 'ViewContent',
      'chat_initiated': 'Contact',
      'email_signup': 'CompleteRegistration'
    };

    const fbEvent = fbEventMap[eventName] || 'CustomEvent';
    
    try {
      window.fbq('track', fbEvent, {
        content_name: parameters.service || parameters.content || eventName,
        content_category: 'ai_services',
        value: parameters.value || 0,
        currency: 'USD',
        ...parameters
      });
    } catch (error) {
      this.log('Error tracking Facebook event:', error);
    }
  }

  // Send events to custom analytics endpoint
  async sendCustomEvent(eventName, eventData) {
    if (!this.config.customAnalytics.enabled) return;

    try {
      await fetch(this.config.customAnalytics.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer dvn1;cCR7Pf5',
          'X-Source': 'TONNIC-Analytics'
        },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          website: 'tonnic.agency',
          source: 'website_analytics'
        })
      });
    } catch (error) {
      this.log('Error sending custom analytics:', error);
    }
  }

  // Business-specific tracking methods
  trackServiceView(serviceName) {
    this.trackEvent('service_viewed', {
      service_name: serviceName,
      service_category: 'ai_services',
      engagement_type: 'service_detail_view'
    });
  }

  trackLeadGeneration(source, serviceInterest = null) {
    this.trackEvent('lead_generated', {
      lead_source: source,
      service_interest: serviceInterest,
      lead_quality: 'qualified',
      conversion_type: 'lead'
    });
  }

  trackContactFormSubmit(formData) {
    this.trackEvent('contact_form_submit', {
      form_type: 'contact',
      service_interest: formData.service || 'general',
      has_company: !!formData.company,
      has_phone: !!formData.phone,
      lead_source: 'contact_form',
      conversion_value: 100 // Estimated lead value
    });
  }

  trackPhoneCall() {
    this.trackEvent('phone_call_initiated', {
      call_type: 'ai_voice_agent',
      phone_number: '1-888-292-5513',
      conversion_type: 'phone_lead',
      conversion_value: 150
    });
  }

  trackCalendarBooking(stage = 'started') {
    const eventName = stage === 'completed' ? 'calendar_booking_completed' : 'calendar_booking_started';
    this.trackEvent(eventName, {
      booking_type: 'consultation',
      booking_stage: stage,
      service_type: 'ai_consultation',
      conversion_value: stage === 'completed' ? 200 : 50
    });
  }

  trackChatbotInteraction(action) {
    this.trackEvent('chatbot_interaction', {
      chat_action: action,
      chat_type: 'ai_chatbot',
      engagement_channel: 'website_chat'
    });
  }

  trackServiceModalOpen(serviceName) {
    this.trackEvent('service_modal_opened', {
      service_name: serviceName,
      engagement_type: 'detailed_view',
      funnel_stage: 'consideration'
    });
  }

  trackScrollDepth(percentage) {
    // Only track at 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(percentage)) {
      this.trackEvent('scroll_depth', {
        scroll_percentage: percentage,
        page_path: window.location.pathname,
        engagement_type: 'scroll'
      });
    }
  }

  trackTimeOnPage() {
    const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
    
    // Track significant time milestones
    if ([30, 60, 120, 300].includes(timeSpent)) {
      this.trackEvent('time_on_page', {
        time_seconds: timeSpent,
        page_path: window.location.pathname,
        engagement_depth: timeSpent > 120 ? 'high' : timeSpent > 60 ? 'medium' : 'low'
      });
    }
  }

  trackAccessibilityUsage(feature) {
    this.trackEvent('accessibility_feature_used', {
      accessibility_feature: feature,
      user_needs: 'accessibility',
      inclusive_design: true
    });
  }

  trackDownload(fileName, fileType) {
    this.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
      download_source: 'website'
    });
  }

  trackSocialShare(platform, content) {
    this.trackEvent('social_share', {
      social_platform: platform,
      shared_content: content,
      share_source: 'website'
    });
  }

  trackError(errorType, errorMessage) {
    this.trackEvent('website_error', {
      error_type: errorType,
      error_message: errorMessage,
      page_path: window.location.pathname,
      user_agent: navigator.userAgent
    });
  }

  // Set user properties
  setUserProperty(property, value) {
    this.userProperties[property] = value;
    
    if (window.gtag) {
      window.gtag('config', this.config.googleAnalytics.measurementId, {
        user_properties: {
          [property]: value
        }
      });
    }
  }

  // Identify user (for authenticated users)
  identifyUser(userId, traits = {}) {
    this.setUserProperty('user_id', userId);
    
    Object.keys(traits).forEach(key => {
      this.setUserProperty(key, traits[key]);
    });

    this.trackEvent('user_identified', {
      user_id: userId,
      ...traits
    });
  }

  // Get analytics data
  getAnalyticsData() {
    return {
      events: this.events,
      userProperties: this.userProperties,
      sessionId: this.sessionId,
      sessionDuration: Date.now() - this.startTime
    };
  }

  // Debug logging
  log(...args) {
    if (this.debug) {
      console.log('[Analytics]', ...args);
    }
  }
}

// Create global instance
const analytics = new AnalyticsManager();

// Export for use in components
export default analytics;

// Convenience functions
export const trackPageView = (page) => analytics.trackPageView(page);
export const trackEvent = (eventName, parameters) => analytics.trackEvent(eventName, parameters);
export const trackServiceView = (serviceName) => analytics.trackServiceView(serviceName);
export const trackLeadGeneration = (source, serviceInterest) => analytics.trackLeadGeneration(source, serviceInterest);
export const trackContactFormSubmit = (formData) => analytics.trackContactFormSubmit(formData);
export const trackPhoneCall = () => analytics.trackPhoneCall();
export const trackCalendarBooking = (stage) => analytics.trackCalendarBooking(stage);
export const trackChatbotInteraction = (action) => analytics.trackChatbotInteraction(action);
export const trackServiceModalOpen = (serviceName) => analytics.trackServiceModalOpen(serviceName);
export const trackScrollDepth = (percentage) => analytics.trackScrollDepth(percentage);
export const trackAccessibilityUsage = (feature) => analytics.trackAccessibilityUsage(feature);
export const setUserProperty = (property, value) => analytics.setUserProperty(property, value);
export const identifyUser = (userId, traits) => analytics.identifyUser(userId, traits);