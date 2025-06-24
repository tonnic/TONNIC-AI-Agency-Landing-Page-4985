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

    // Apply high contrast - PROPERLY FIXED
    if (this.highContrast) {
      this.enableHighContrast();
    } else {
      this.disableHighContrast();
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

  enableHighContrast() {
    // Remove existing high contrast styles first
    this.disableHighContrast();

    // Add classes
    document.documentElement.classList.add('high-contrast');
    document.body.classList.add('high-contrast');

    // Inject PROPERLY WORKING high contrast CSS
    const style = document.createElement('style');
    style.id = 'accessibility-high-contrast';
    style.textContent = `
      /* PROPERLY WORKING HIGH CONTRAST SYSTEM - FINAL FIX */
      
      /* Remove shadows and complex styling for clarity */
      html.high-contrast * {
        box-shadow: none !important;
        text-shadow: none !important;
      }

      /* LIGHT MODE HIGH CONTRAST - Force ALL backgrounds to be WHITE or very light */
      
      /* Force all dark backgrounds to be WHITE in light mode */
      html.high-contrast:not(.dark) .bg-slate-800,
      html.high-contrast:not(.dark) .bg-slate-900,
      html.high-contrast:not(.dark) .bg-slate-700,
      html.high-contrast:not(.dark) .bg-slate-950,
      html.high-contrast:not(.dark) .bg-slate-600 {
        background-color: #ffffff !important;
        color: #000000 !important;
        border: 2px solid #000000 !important;
      }
      
      /* Force gradient backgrounds to solid white in light mode */
      html.high-contrast:not(.dark) .bg-gradient-to-br,
      html.high-contrast:not(.dark) .bg-gradient-to-r,
      html.high-contrast:not(.dark) .bg-gradient-to-l,
      html.high-contrast:not(.dark) .bg-gradient-to-t,
      html.high-contrast:not(.dark) .bg-gradient-to-b {
        background: #ffffff !important;
        background-image: none !important;
        color: #000000 !important;
        border: 2px solid #000000 !important;
      }
      
      /* Fix the specific "Ready to Transform" section */
      html.high-contrast:not(.dark) .from-yellow-500,
      html.high-contrast:not(.dark) .to-yellow-400,
      html.high-contrast:not(.dark) .bg-yellow-500,
      html.high-contrast:not(.dark) .bg-yellow-400,
      html.high-contrast:not(.dark) .bg-yellow-50,
      html.high-contrast:not(.dark) .bg-yellow-100 {
        background: #ffffff !important;
        background-image: none !important;
        background-color: #ffffff !important;
        color: #000000 !important;
        border: 3px solid #000000 !important;
      }

      /* Light gray text becomes BLACK for maximum contrast on light backgrounds */
      html.high-contrast:not(.dark) .text-slate-600,
      html.high-contrast:not(.dark) .text-slate-500,
      html.high-contrast:not(.dark) .text-slate-400,
      html.high-contrast:not(.dark) .text-slate-700,
      html.high-contrast:not(.dark) .text-slate-800,
      html.high-contrast:not(.dark) .text-slate-300,
      html.high-contrast:not(.dark) .text-slate-200,
      html.high-contrast:not(.dark) .text-white {
        color: #000000 !important; /* BLACK text everywhere in light mode */
      }

      /* DARK MODE HIGH CONTRAST - Opposite logic */
      
      html.high-contrast.dark .bg-white,
      html.high-contrast.dark .bg-slate-50,
      html.high-contrast.dark .bg-slate-100,
      html.high-contrast.dark .bg-slate-200 {
        background-color: #000000 !important;
        color: #ffffff !important;
        border: 2px solid #ffffff !important;
      }
      
      html.high-contrast.dark .text-slate-600,
      html.high-contrast.dark .text-slate-500,
      html.high-contrast.dark .text-slate-400,
      html.high-contrast.dark .text-slate-700,
      html.high-contrast.dark .text-slate-800,
      html.high-contrast.dark .text-slate-300,
      html.high-contrast.dark .text-slate-200,
      html.high-contrast.dark .text-black {
        color: #ffffff !important; /* WHITE text everywhere in dark mode */
      }

      /* Handle dark mode classes properly */
      html.high-contrast .dark\\:text-slate-300,
      html.high-contrast .dark\\:text-slate-400,
      html.high-contrast .dark\\:text-slate-600,
      html.high-contrast .dark\\:text-white {
        color: #ffffff !important;
      }
      
      html.high-contrast .dark\\:bg-slate-800,
      html.high-contrast .dark\\:bg-slate-900,
      html.high-contrast .dark\\:bg-slate-700 {
        background-color: #000000 !important;
        color: #ffffff !important;
        border: 2px solid #ffffff !important;
      }

      /* Enhanced borders for better definition */
      html.high-contrast:not(.dark) .border-slate-200,
      html.high-contrast:not(.dark) .border-slate-300,
      html.high-contrast:not(.dark) .border-slate-400,
      html.high-contrast:not(.dark) .border-slate-500,
      html.high-contrast:not(.dark) .border-slate-600,
      html.high-contrast:not(.dark) .border-transparent {
        border-color: #000000 !important; /* Black borders on light backgrounds */
      }
      
      html.high-contrast.dark .border-slate-600,
      html.high-contrast.dark .border-slate-700,
      html.high-contrast.dark .border-slate-400,
      html.high-contrast.dark .border-slate-300,
      html.high-contrast.dark .border-transparent,
      html.high-contrast .dark\\:border-slate-600,
      html.high-contrast .dark\\:border-slate-700 {
        border-color: #ffffff !important; /* White borders on dark backgrounds */
      }

      /* Improve button contrast */
      html.high-contrast button {
        font-weight: 700 !important;
        border-width: 3px !important;
      }
      
      /* Light mode buttons - FORCE white background */
      html.high-contrast:not(.dark) button {
        background-color: #ffffff !important;
        color: #000000 !important;
        border-color: #000000 !important;
      }
      
      html.high-contrast:not(.dark) button:hover,
      html.high-contrast:not(.dark) button:focus {
        background-color: #000000 !important;
        color: #ffffff !important;
        border-color: #000000 !important;
      }
      
      /* Dark mode buttons */
      html.high-contrast.dark button {
        background-color: #000000 !important;
        color: #ffffff !important;
        border-color: #ffffff !important;
      }
      
      html.high-contrast.dark button:hover,
      html.high-contrast.dark button:focus {
        background-color: #ffffff !important;
        color: #000000 !important;
        border-color: #ffffff !important;
      }

      /* Yellow text - make it darker on light, brighter on dark */
      html.high-contrast:not(.dark) .text-yellow-500,
      html.high-contrast:not(.dark) .text-yellow-400,
      html.high-contrast:not(.dark) .text-yellow-600 {
        color: #92400e !important; /* Dark yellow/brown on light backgrounds */
        font-weight: 700 !important;
      }
      
      html.high-contrast.dark .text-yellow-400,
      html.high-contrast.dark .text-yellow-500,
      html.high-contrast .dark\\:text-yellow-400 {
        color: #fbbf24 !important; /* Bright yellow on dark backgrounds */
        font-weight: 700 !important;
      }

      /* Enhance focus indicators */
      html.high-contrast *:focus,
      html.high-contrast *:focus-visible {
        outline: 4px solid #dc2626 !important; /* Red outline for visibility */
        outline-offset: 2px !important;
      }

      /* Improve link visibility */
      html.high-contrast a {
        text-decoration: underline !important;
        font-weight: 700 !important;
      }
      
      html.high-contrast:not(.dark) a {
        color: #1d4ed8 !important; /* Blue links on light backgrounds */
        background-color: #ffffff !important;
      }
      
      html.high-contrast.dark a {
        color: #60a5fa !important; /* Light blue links on dark backgrounds */
        background-color: #000000 !important;
      }

      /* Form elements enhancement */
      html.high-contrast input,
      html.high-contrast textarea,
      html.high-contrast select {
        border-width: 3px !important;
        font-weight: 700 !important;
      }
      
      /* Light mode forms */
      html.high-contrast:not(.dark) input,
      html.high-contrast:not(.dark) textarea,
      html.high-contrast:not(.dark) select {
        background-color: #ffffff !important;
        border-color: #000000 !important;
        color: #000000 !important;
      }
      
      /* Dark mode forms */
      html.high-contrast.dark input,
      html.high-contrast.dark textarea,
      html.high-contrast.dark select {
        background-color: #000000 !important;
        border-color: #ffffff !important;
        color: #ffffff !important;
      }

      /* Enhance card/panel borders for better separation */
      html.high-contrast .rounded-2xl,
      html.high-contrast .rounded-3xl,
      html.high-contrast .rounded-xl {
        border-width: 3px !important;
      }
      
      /* Force ALL rounded elements to have proper backgrounds in light mode */
      html.high-contrast:not(.dark) .rounded-2xl,
      html.high-contrast:not(.dark) .rounded-3xl,
      html.high-contrast:not(.dark) .rounded-xl {
        background-color: #ffffff !important;
        border-color: #000000 !important;
        color: #000000 !important;
      }
      
      html.high-contrast.dark .rounded-2xl,
      html.high-contrast.dark .rounded-3xl,
      html.high-contrast.dark .rounded-xl {
        background-color: #000000 !important;
        border-color: #ffffff !important;
        color: #ffffff !important;
      }

      /* Remove ALL gradients and background images */
      html.high-contrast * {
        background-image: none !important;
        background-gradient: none !important;
        transition-duration: 0.1s !important;
      }
      
      /* Force simple backgrounds everywhere in light mode */
      html.high-contrast:not(.dark) * {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      
      /* Exception for truly dark sections that should stay dark in light mode */
      html.high-contrast:not(.dark) .bg-slate-800,
      html.high-contrast:not(.dark) .bg-slate-900,
      html.high-contrast:not(.dark) .bg-slate-700 {
        background-color: #ffffff !important;
        color: #000000 !important;
        border: 3px solid #000000 !important;
      }
    `;
    
    document.head.appendChild(style);
    console.log('HIGH CONTRAST ENABLED - Final fix applied');
  }

  disableHighContrast() {
    // Remove classes
    document.documentElement.classList.remove('high-contrast');
    document.body.classList.remove('high-contrast');

    // Remove injected styles
    const existingStyle = document.getElementById('accessibility-high-contrast');
    if (existingStyle) {
      existingStyle.remove();
    }

    console.log('HIGH CONTRAST DISABLED - CSS removed');
  }

  injectReducedMotionCSS() {
    // Remove existing style if it exists
    this.removeReducedMotionCSS();

    const style = document.createElement('style');
    style.id = 'accessibility-reduced-motion';
    style.textContent = `
      *,
      *:before,
      *:after {
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
      this.enableHighContrast();
    } else {
      this.disableHighContrast();
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

// Global keyboard shortcuts handler - INCLUDING ESC KEY
const KeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // ESC key handling for modals and menus
      if (event.key === 'Escape') {
        // Dispatch a global escape event that components can listen for
        const escapeEvent = new CustomEvent('globalEscape', {
          bubbles: true,
          cancelable: true
        });
        document.dispatchEvent(escapeEvent);
        console.log('ESC key pressed - dispatched globalEscape event');
      }

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