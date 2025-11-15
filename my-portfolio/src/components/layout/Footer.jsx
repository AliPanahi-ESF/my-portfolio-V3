import { useEffect, useRef } from 'react';
import './Footer.css';
import { Linkedin, Github, Figma } from 'lucide-react';

// Import GSAP + ScrollTrigger
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  // NEW: 3-step animation timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%', // Start when the top of the footer is 80% in view
          once: true,
        },
      });

      // Step 1: Animate the CTA Box
      tl.from('.footer-cta-box', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Step 2: Animate the new footer links/socials
      tl.from('.footer-top', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, 
      "-=0.5" // Overlap with the box animation
      );

      // Step 3: Animate the copyright
      tl.from('.footer-bottom', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, 
      "-=0.4" // Overlap with the links animation
      );

    }, footerRef); // Scope to the footer section

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="footer-section" ref={footerRef}>
      <div className="footer-container">
        {/* The CTA Box (from our previous version) */}
        <div className="footer-cta-box">
          <h2 className="footer-title">
            Let's build something together
          </h2>
          <p className="footer-body">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to chat, feel free to reach
            out.
          </p>
          <a href="mailto:alipanahi090@gmail.com" className="button-primary">
            Get in Touch
          </a>
        </div>

        {/* The new minimal footer (from your screenshot) */}
        <div className="footer-minimal">
          <div className="footer-top">
            {/* Page Links */}
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
            {/* Social Icons */}
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="#" aria-label="Figma" target="_blank" rel="noopener noreferrer">
                <Figma />
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="footer-bottom">
            <p>© 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;