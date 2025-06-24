import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Get initial theme from cookie or default to light
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = document.cookie
        .split('; ')
        .find(row => row.startsWith('theme='))
        ?.split('=')[1];
      
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      
      // Check system preference as fallback
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Save theme to cookie
  const saveThemeToCookie = (theme) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Expire in 1 year
    document.cookie = `theme=${theme}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  };

  // Toggle theme
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    saveThemeToCookie(newTheme ? 'dark' : 'light');
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Apply theme on mount and when changed
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only update if no saved preference exists
      const savedTheme = document.cookie
        .split('; ')
        .find(row => row.startsWith('theme='))
        ?.split('=')[1];
      
      if (!savedTheme) {
        setIsDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;