import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSettings, FiX, FiPlus, FiMinus, FiEye, FiMousePointer, FiRefreshCw } = FiIcons;

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false
  });

  // Subscribe to accessibility manager changes
  useEffect(() => {
    const manager = window.accessibilityManager;
    if (manager) {
      // Get initial state
      setSettings(manager.getState());

      // Subscribe to changes
      const unsubscribe = manager.subscribe((newSettings) => {
        setSettings(newSettings);
      });

      return unsubscribe;
    }
  }, []);

  // Listen for global ESC key events
  useEffect(() => {
    const handleGlobalEscape = (event) => {
      if (isOpen) {
        console.log('AccessibilityPanel: Received globalEscape event, closing panel');
        setIsOpen(false);
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('globalEscape', handleGlobalEscape);
    return () => document.removeEventListener('globalEscape', handleGlobalEscape);
  }, [isOpen]);

  const adjustFontSize = (increment) => {
    const manager = window.accessibilityManager;
    if (manager) {
      const newSize = settings.fontSize + increment;
      manager.setFontSize(newSize);
    }
  };

  const toggleHighContrast = () => {
    const manager = window.accessibilityManager;
    if (manager) {
      manager.toggleHighContrast();
    }
  };

  const toggleReducedMotion = () => {
    const manager = window.accessibilityManager;
    if (manager) {
      manager.toggleReducedMotion();
    }
  };

  const resetSettings = () => {
    const manager = window.accessibilityManager;
    if (manager) {
      manager.reset();
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-yellow-500 hover:bg-yellow-400 text-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-2 border-white dark:border-slate-800"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 2px rgba(255,255,255,0.8)' }}
      >
        <SafeIcon icon={FiSettings} className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-800 shadow-xl z-50 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="accessibility-panel-title"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 id="accessibility-panel-title" className="text-xl font-bold text-slate-800 dark:text-white">
                    Accessibility Settings
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="Close accessibility settings"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>

                {/* Font Size Control */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiEye} className="w-5 h-5 mr-2 text-yellow-500" />
                    Font Size
                  </h3>
                  <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
                    <button
                      onClick={() => adjustFontSize(-10)}
                      className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                      aria-label="Decrease font size"
                      disabled={settings.fontSize <= 75}
                    >
                      <SafeIcon icon={FiMinus} className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {settings.fontSize}%
                    </span>
                    <button
                      onClick={() => adjustFontSize(10)}
                      className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                      aria-label="Increase font size"
                      disabled={settings.fontSize >= 150}
                    >
                      <SafeIcon icon={FiPlus} className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Adjust text size between 75% and 150%
                  </p>
                </div>

                {/* High Contrast Toggle */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiEye} className="w-5 h-5 mr-2 text-yellow-500" />
                    High Contrast
                  </h3>
                  <button
                    onClick={toggleHighContrast}
                    className={`w-full p-3 rounded-lg border-2 transition-colors ${
                      settings.highContrast
                        ? 'bg-yellow-500 border-yellow-500 text-slate-800'
                        : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    {settings.highContrast ? 'High Contrast On' : 'High Contrast Off'}
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Increases contrast for better readability
                  </p>
                </div>

                {/* Reduced Motion Toggle */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <SafeIcon icon={FiMousePointer} className="w-5 h-5 mr-2 text-yellow-500" />
                    Reduced Motion
                  </h3>
                  <button
                    onClick={toggleReducedMotion}
                    className={`w-full p-3 rounded-lg border-2 transition-colors ${
                      settings.reducedMotion
                        ? 'bg-yellow-500 border-yellow-500 text-slate-800'
                        : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    {settings.reducedMotion ? 'Reduced Motion On' : 'Reduced Motion Off'}
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Reduces animations and motion effects
                  </p>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 p-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiRefreshCw} className="w-4 h-4 mr-2" />
                  Reset to Default
                </button>

                {/* Keyboard Shortcuts Info */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Keyboard Shortcuts
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <div>Tab: Navigate between elements</div>
                    <div>Enter/Space: Activate buttons</div>
                    <div>Esc: Close modals and menus</div>
                    <div>Ctrl/Cmd + Plus: Increase font size</div>
                    <div>Ctrl/Cmd + Minus: Decrease font size</div>
                  </div>
                </div>

                {/* Test Section */}
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Test <span className="force-ai-text">AI</span> Text Rendering
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <div>Regular: AI Technology</div>
                    <div className="force-ai-text">Monospace: AI Technology</div>
                    <div>Status: {settings.highContrast ? 'High Contrast' : 'Normal'}</div>
                    <div>Motion: {settings.reducedMotion ? 'Reduced' : 'Normal'}</div>
                    <div>Font Size: {settings.fontSize}%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityPanel;