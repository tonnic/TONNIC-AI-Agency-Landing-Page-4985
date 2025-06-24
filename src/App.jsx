import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import AccessibilityPanel from './components/AccessibilityPanel';
import ChatbotEmbed from './components/ChatbotEmbed';
import './App.css';

// Global accessibility state management
class AccessibilityManager {
  constructor() {
    this.fontSize = 100;
    this.highContrast = false;
    this.reducedMotion = false;
    this.listeners = [];
    
    // Load saved settings
    this.loadSettings();
    
    // Apply initial settings
    this.applySettings();
  }
  
  loadSettings() {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedHighContrast = localStorage.getItem('highContrast');
    const savedReducedMotion = localStorage.getItem('reducedMotion');
    
    if (savedFontSize) {
      this.fontSize = parseInt(savedFontSize);
    }
    
    if (savedHighContrast === 'true') {
      this.highContrast = true;
    }
    
    if (savedReducedMotion === 'true') {
      this.reducedMotion = true;
    }
  }
  
  applySettings() {
    // Apply font size
    document.documentElement.style.fontSize = `${this.fontSize}%`;
    
    // Apply high contrast
    if (this.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.body.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (this.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
      document.body.classList.add('reduce-motion');
      this.injectReducedMotionCSS();
    } else {
      document.documentElement.classList.remove('reduce-motion');
      document.body.classList.remove('reduce-motion');
      this.removeReducedMotionCSS();
    }
    
    console.log('Accessibility settings applied:', {
      fontSize: this.fontSize,
      highContrast: this.highContrast,
      reducedMotion: this.reducedMotion
    });
  }
  
  injectReducedMotionCSS() {
    // Remove existing style if it exists
    this.removeReducedMotionCSS();
    
    const style = document.createElement('style');
    style.id = 'accessibility-reduced-motion';
    style.textContent = `
      *, *:before, *:after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        transition-delay: 0ms !important;
        animation-delay: 0ms !important;
        scroll-behavior: auto !important;
        transform: none !important;
      }
      
      /* Disable Framer Motion specifically */
      [data-framer-motion] {
        animation: none !important;
        transition: none !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
    console.log('Reduced motion CSS injected');
  }
  
  removeReducedMotionCSS() {
    const existingStyle = document.getElementById('accessibility-reduced-motion');
    if (existingStyle) {
      existingStyle.remove();
      console.log('Reduced motion CSS removed');
    }
  }
  
  setFontSize(size) {
    this.fontSize = Math.max(75, Math.min(150, size));
    document.documentElement.style.fontSize = `${this.fontSize}%`;
    localStorage.setItem('fontSize', this.fontSize.toString());
    this.notifyListeners();
    console.log('Font size set to:', this.fontSize);
  }
  
  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    
    if (this.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.body.classList.remove('high-contrast');
    }
    
    localStorage.setItem('highContrast', this.highContrast.toString());
    this.notifyListeners();
    console.log('High contrast toggled:', this.highContrast);
  }
  
  toggleReducedMotion() {
    this.reducedMotion = !this.reducedMotion;
    
    if (this.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
      document.body.classList.add('reduce-motion');
      this.injectReducedMotionCSS();
    } else {
      document.documentElement.classList.remove('reduce-motion');
      document.body.classList.remove('reduce-motion');
      this.removeReducedMotionCSS();
    }
    
    localStorage.setItem('reducedMotion', this.reducedMotion.toString());
    this.notifyListeners();
    console.log('Reduced motion toggled:', this.reducedMotion);
  }
  
  reset() {
    this.fontSize = 100;
    this.highContrast = false;
    this.reducedMotion = false;
    
    // Clear localStorage
    localStorage.removeItem('fontSize');
    localStorage.removeItem('highContrast');
    localStorage.removeItem('reducedMotion');
    
    // Apply reset settings
    this.applySettings();
    this.notifyListeners();
    console.log('Accessibility settings reset');
  }
  
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }
  
  notifyListeners() {
    this.listeners.forEach(callback => callback({
      fontSize: this.fontSize,
      highContrast: this.highContrast,
      reducedMotion: this.reducedMotion
    }));
  }
  
  getState() {
    return {
      fontSize: this.fontSize,
      highContrast: this.highContrast,
      reducedMotion: this.reducedMotion
    };
  }
}

// Create global instance
const accessibilityManager = new AccessibilityManager();

// Make it available globally
window.accessibilityManager = accessibilityManager;

// Component to handle URL redirects for non-hash routes (only when needed)
const URLRedirectHandler = () => {
  useEffect(() => {
    const currentPath = window.location.pathname.toLowerCase();
    const currentHash = window.location.hash;
    console.log('App loaded - Current path:', currentPath);
    console.log('App loaded - Current hash:', currentHash);

    // Only handle redirects if we're not on the homepage and don't have a hash
    if (currentPath !== '/' && !currentHash) {
      let redirectHash = '';

      // Handle specific legacy routes that might be bookmarked
      if (currentPath.includes('privacy')) {
        redirectHash = '#/privacy';
      } else if (currentPath.includes('terms')) {
        redirectHash = '#/terms';
      } else if (currentPath.includes('cookie')) {
        redirectHash = '#/cookies';
      }

      // Only redirect if we found a matching route
      if (redirectHash) {
        console.log('Redirecting to:', redirectHash);
        window.location.hash = redirectHash;
      }
    }
  }, []);

  return null;
};

// Skip link component for screen readers
const SkipLink = () => (
  <a href="#main-content" className="skip-link">
    Skip to main content
  </a>
);

// Keyboard shortcuts handler
const KeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Font size shortcuts
      if ((event.ctrlKey || event.metaKey) && event.key === '=') {
        event.preventDefault();
        const currentSize = accessibilityManager.fontSize;
        accessibilityManager.setFontSize(currentSize + 10);
      }

      if ((event.ctrlKey || event.metaKey) && event.key === '-') {
        event.preventDefault();
        const currentSize = accessibilityManager.fontSize;
        accessibilityManager.setFontSize(currentSize - 10);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <URLRedirectHandler />
      <SkipLink />
      <KeyboardShortcuts />
      <Router>
        <div className="app-container">
          <main id="main-content">
            <Routes>
              {/* Main landing page */}
              <Route path="/" element={<LandingPage />} />
              {/* Privacy Policy Routes */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* Terms of Service Routes */}
              <Route path="/terms" element={<TermsOfService />} />
              {/* Cookie Policy Routes */}
              <Route path="/cookies" element={<CookiePolicy />} />
              {/* Explicit 404 route */}
              <Route path="/404" element={<NotFound />} />
              {/* 404 Catch-all route - must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Accessibility Panel on the left */}
          <div className="no-print">
            <AccessibilityPanel />
          </div>

          {/* Chatbot on the right */}
          <div className="no-print">
            <ChatbotEmbed />
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;