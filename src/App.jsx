import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Privacy Policy Routes - Multiple paths for compatibility */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          {/* Terms of Service Routes - Multiple paths for compatibility */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms-of-service/" element={<TermsOfService />} />
          {/* Cookie Policy Routes - Multiple paths for compatibility */}
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          {/* 404 Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;