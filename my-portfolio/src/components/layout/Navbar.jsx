import { useState, useEffect, useRef } from 'react'; // GSAP: Import useEffect and useRef
import gsap from 'gsap'; // GSAP: Import gsap
import './Navbar.css';

// --- Icon components (no change) ---
const IconHamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
// --- End Icon components ---


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // GSAP: Create a ref for the whole <nav> element

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // GSAP: This useEffect will run once when the component mounts
  useEffect(() => {
    // This is a "GSAP Context" - it's the modern, safe way to 
    // run GSAP animations in React and clean them up automatically.
    const ctx = gsap.context(() => {
      
      // 1. Set the initial state of the elements
      // We set them to be invisible and slightly up
      gsap.set('.navbar-logo a', { opacity: 0, y: -20 });
      gsap.set('.desktop-menu-links li', { opacity: 0, y: -20 });
      gsap.set('.desktop-menu .button-resume', { opacity: 0, y: -20 });

      // 2. Create our timeline
      const tl = gsap.timeline({
        // Add a small delay so we can see it
        delay: 0.5 
      });

      // 3. Add animations to the timeline
      // We animate "from" our invisible state "to" the visible one
      
      // Step 1: Animate the logo
      tl.to('.navbar-logo a', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Step 2: Animate the links
      // The "stagger" property is GSAP magic. 
      // It animates each 'li' one by one with a 0.1s delay.
      tl.to('.desktop-menu-links li', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1
      }, 
      "-=0.2" // This makes the links start 0.2s *before* the logo finishes
      ); 

      // Step 3: Animate the button
      tl.to('.desktop-menu .button-resume', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, 
      "-=0.3" // This starts the button animation slightly before the links finish
      );

    }, navRef); // <-- We scope this GSAP context to our <nav> element

    // GSAP: Cleanup function
    return () => ctx.revert(); 
    
  }, []); // <-- The empty array means this runs only once on mount

  return (
    // GSAP: We attach our ref to the <nav>
    <nav className={`navbar ${isMenuOpen ? 'nav-open' : ''}`} ref={navRef}>
      
      <div className="navbar-top-bar">
        
        <div className="navbar-logo">
          <a href="/">Ali Panahi</a>
        </div>
        
        <button className="navbar-toggle-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <IconX /> : <IconHamburger />}
        </button>
        
        <div className="desktop-menu">
          <ul className="desktop-menu-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="/resume.pdf" className="button-resume">
                View Resume
              </a>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="mobile-menu">
        <ul className="mobile-menu-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/resume.pdf" className="button-resume">
          View Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;