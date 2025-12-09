// src/hooks/useMediaQuery.js

import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 1. Get the media query list
    const media = window.matchMedia(query);
    
    // 2. A function to update our state
    const updateMatch = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };
    
    // 3. Run it once on load
    updateMatch();

    // 4. Add a listener to watch for changes (like resizing the window)
    media.addEventListener('change', updateMatch);

    // 5. Cleanup the listener when the component unmounts
    return () => media.removeEventListener('change', updateMatch);
  }, [query, matches]);

  return matches;
}