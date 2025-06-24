import React, { useEffect } from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import './App.css';

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

function App() {
  return (
    <>
      <URLRedirectHandler />
      <Router>
        <div className="app-container">
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
        </div>
      </Router>
    </>
  );
}

export default App;