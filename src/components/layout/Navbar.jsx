import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

// FIX: Use standard imports for your local project
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Icons (SVG) ---
const IconHamburger = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // 1. Toggle & Scroll Lock
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Freeze background
    } else {
      document.body.style.overflow = ''; // Unfreeze
    }
  }, [isMenuOpen]);

  // 2. Desktop Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Intro Animation (Logo + Desktop Links ONLY)
      // We deliberately DO NOT animate the hamburger button to prevent glitches
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo('.navbar-logo', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
      tl.fromTo('.desktop-menu li', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3");

      // Smart Hide/Show on Scroll
      const showAnim = gsap.from(navRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "power3.inOut"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === -1) showAnim.play();
          else if (self.direction === 1 && self.scrollY > 100) showAnim.reverse();
        }
      });

      // Glass Effect
      ScrollTrigger.create({
        start: "top -50",
        toggleClass: { targets: navRef.current, className: "is-scrolled" }
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  // 3. Mobile Menu Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        // Open: Slide Down
        gsap.to(menuRef.current, { y: '0%', duration: 0.5, ease: 'power3.out' });
        // Stagger Links In
        gsap.fromTo('.mobile-menu-link', 
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
        );
      } else {
        // Close: Slide Up
        gsap.to(menuRef.current, { y: '-100%', duration: 0.5, ease: 'power3.in' });
      }
    }, navRef); // Scope to navRef
    return () => ctx.revert();
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      
      {/* Top Bar (Always Visible) */}
      <div className="navbar-top-bar">
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Ali Panahi</Link>
        </div>
        
        {/* Hamburger Button - Visible only on Mobile */}
        <button 
          className="navbar-toggle-button" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IconX /> : <IconHamburger />}
        </button>
        
        {/* Desktop Links - Hidden on Mobile */}
        <div className="desktop-menu">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1NodNHKvpjYFp-7Eibc7wki0wUK4h-fJh/view?usp=sharing" className="button-resume" target="_blank">Resume</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div className="mobile-menu" ref={menuRef}>
        <ul className="mobile-menu-links">
          <li><a href="#work" className="mobile-menu-link" onClick={toggleMenu}>Work</a></li>
          <li><a href="#about" className="mobile-menu-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" className="mobile-menu-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <a href="https://drive.google.com/file/d/1NodNHKvpjYFp-7Eibc7wki0wUK4h-fJh/view?usp=sharing" className="button-resume mobile-menu-link" target="_blank">View Resume</a>
      </div>

    </nav>
  );
}

export default Navbar;