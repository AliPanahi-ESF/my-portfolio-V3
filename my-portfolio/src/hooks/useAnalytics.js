import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Get the Measurement ID from environment variables
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize GA4
    if (MEASUREMENT_ID) {
      // Only initialize if we haven't already (ReactGA handles this internally usually, but good to be safe)
      if (!window.ga4Initialized) {
        ReactGA.initialize(MEASUREMENT_ID);
        window.ga4Initialized = true;
        console.log('GA4 Initialized with ID:', MEASUREMENT_ID);
      }
    } else {
      console.warn('GA4 Measurement ID not found in environment variables (VITE_GA_MEASUREMENT_ID). Analytics disabled.');
    }
  }, []);

  useEffect(() => {
    // 2. Track Page Views
    if (MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  // 3. Helper for Custom Events
  const trackEvent = (category, action, label) => {
    if (MEASUREMENT_ID) {
      ReactGA.event({
        category,
        action,
        label,
      });
    } else {
      console.log(`[Analytics Dev] Event: ${category} - ${action} - ${label}`);
    }
  };

  return { trackEvent };
};
