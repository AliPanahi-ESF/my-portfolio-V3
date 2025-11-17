import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // 1. Import ScrollTrigger
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

// 2. Register the plugin
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- This is your existing intro animation (it's perfect) ---
      // 1. Set the initial state
      gsap.set('.navbar-logo a', { opacity: 0, y: -20 });
      gsap.set('.desktop-menu-links li', { opacity: 0, y: -20 });
      gsap.set('.desktop-menu .button-resume', { opacity: 0, y: -20 });

      // 2. Create our timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // 3. Add animations to the timeline
      tl.to('.navbar-logo a', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      tl.to('.desktop-menu-links li', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1
      }, "-=0.2"); 
      tl.to('.desktop-menu .button-resume', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, "-=0.3");
      // --- End of intro animation ---


      // 4. THIS IS THE NEW SCROLLTRIGGER LOGIC
      ScrollTrigger.create({
        start: "top -10px", // Triggers 10px after scrolling past the top
        
        // This tells GSAP to add/remove the 'is-scrolled' class
        // from our <nav> element (the navRef)
        toggleClass: {
          className: 'is-scrolled',
          targets: navRef.current
        },
        // markers: true // Uncomment this to debug
      });

    }, navRef); // <-- We scope this to the <nav>

    return () => ctx.revert(); 
    
  }, []); // <-- This still only runs once

  return (
    <nav 
      className={`navbar ${isMenuOpen ? 'nav-open' : ''}`} 
      ref={navRef}
    >
      
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
              <a href="https://drive.google.com/file/d/1ruXN034hbuH3677BZAuj8ReMevv27pgh/view?usp=sharing" className="button-resume" target="_blank">
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
        <a href="https://drive.google.com/file/d/1ruXN034hbuH3677BZAuj8ReMevv27pgh/view?usp=sharing" className="button-resume" target="_blank">
          View Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;