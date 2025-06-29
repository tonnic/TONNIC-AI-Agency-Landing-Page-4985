import { useEffect, useRef, useCallback } from 'react';
import analytics, { 
  trackPageView, 
  trackScrollDepth, 
  trackEvent 
} from '../utils/analytics';

// Custom hook for analytics integration
export const useAnalytics = () => {
  const timeOnPageRef = useRef(Date.now());
  const scrollDepthRef = useRef(0);
  const hasTrackedTimeRef = useRef(false);

  // Track page view on mount
  useEffect(() => {
    trackPageView();
    timeOnPageRef.current = Date.now();
    hasTrackedTimeRef.current = false;
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      if (scrollPercentage > scrollDepthRef.current) {
        scrollDepthRef.current = scrollPercentage;
        trackScrollDepth(scrollPercentage);
      }
    };

    const throttledScroll = throttle(handleScroll, 1000);
    window.addEventListener('scroll', throttledScroll);

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Track time on page before unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - timeOnPageRef.current) / 1000);
      if (timeSpent > 10 && !hasTrackedTimeRef.current) {
        analytics.trackEvent('page_exit', {
          time_on_page: timeSpent,
          page_path: window.location.pathname,
          exit_type: 'navigation'
        });
        hasTrackedTimeRef.current = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Track visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - timeOnPageRef.current) / 1000);
        if (timeSpent > 10) {
          analytics.trackEvent('page_hidden', {
            time_on_page: timeSpent,
            page_path: window.location.pathname
          });
        }
      } else {
        timeOnPageRef.current = Date.now();
        analytics.trackEvent('page_visible', {
          page_path: window.location.pathname
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return {
    trackEvent: useCallback((eventName, parameters) => {
      analytics.trackEvent(eventName, parameters);
    }, []),
    trackServiceView: useCallback((serviceName) => {
      analytics.trackServiceView(serviceName);
    }, []),
    trackLeadGeneration: useCallback((source, serviceInterest) => {
      analytics.trackLeadGeneration(source, serviceInterest);
    }, []),
    trackContactFormSubmit: useCallback((formData) => {
      analytics.trackContactFormSubmit(formData);
    }, []),
    trackPhoneCall: useCallback(() => {
      analytics.trackPhoneCall();
    }, []),
    trackCalendarBooking: useCallback((stage) => {
      analytics.trackCalendarBooking(stage);
    }, []),
    trackChatbotInteraction: useCallback((action) => {
      analytics.trackChatbotInteraction(action);
    }, []),
    trackServiceModalOpen: useCallback((serviceName) => {
      analytics.trackServiceModalOpen(serviceName);
    }, []),
    setUserProperty: useCallback((property, value) => {
      analytics.setUserProperty(property, value);
    }, []),
    identifyUser: useCallback((userId, traits) => {
      analytics.identifyUser(userId, traits);
    }, [])
  };
};

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export default useAnalytics;