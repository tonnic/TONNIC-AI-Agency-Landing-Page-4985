import React, { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    // Set up the chatbot configuration
    window.chatpilotConfig = {
      chatbotId: "83e0adf4c978487aa145197df71c7eaf",
      domain: "https://chat.tonnic.agency"
    };

    // Create and append the chatbot script
    const script = document.createElement('script');
    script.src = 'https://chat.tonnic.agency/embed.min.js';
    script.charset = 'utf-8';
    script.defer = true;
    
    // Add the script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      // Remove the script
      const existingScript = document.querySelector('script[src="https://chat.tonnic.agency/embed.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      // Remove the chatbot configuration
      if (window.chatpilotConfig) {
        delete window.chatpilotConfig;
      }
      
      // Remove any chatbot elements that might have been created
      const chatbotElements = document.querySelectorAll('[id*="chatpilot"], [class*="chatpilot"]');
      chatbotElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatbotEmbed;