import { useEffect, useRef, useState } from 'react';
import './Footer.css';
import { Linkedin, Github, Figma } from 'lucide-react';
import Button from '../shared/Button';
import Magnetic from '../Magnetic';
import ContactModal from '../ContactModal';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // 1. Box Fade & Scale Up
      tl.from('.footer-cta-box', {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      });

      // 2. Links Stagger
      tl.from('.footer-links a', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      }, "-=0.5");

      // 3. Socials Pop
      tl.from('.footer-socials a', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)'
      }, "-=0.4");

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="footer-section" ref={footerRef}>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="footer-container">

        {/* CTA BOX */}
        <div className="footer-cta-box">
          <h2 className="footer-title">
            Let's build something together
          </h2>
          <p className="footer-body">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to chat, feel free to reach out.
          </p>

          {/* MAGNETIC BUTTON */}
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            Get in Touch
          </Button>
        </div>

        {/* MINIMAL FOOTER */}
        <div className="footer-minimal">
          <div className="footer-top">

            <ul className="footer-links">
              <li><a href="#hero" className="hover-underline">Home</a></li>
              <li><a href="#work" className="hover-underline">Work</a></li>
              <li><a href="#about" className="hover-underline">About</a></li>
              <li><a href="#contact" className="hover-underline">Contact</a></li>
              <li><a href="https://drive.google.com/file/d/1ruXN034hbuH3677BZAuj8ReMevv27pgh/view?usp=sharing" target="_blank" className="hover-underline">Resume</a></li>
            </ul>

            <div className="footer-socials">
              <Magnetic>
                <a href="https://www.linkedin.com/in/alipanahi090/" aria-label="LinkedIn" target="_blank"><Linkedin /></a>
              </Magnetic>
              <Magnetic>
                <a href="https://github.com/AliPanahi-ESF" aria-label="GitHub" target="_blank"><Github /></a>
              </Magnetic>
              <Magnetic>
                <a href="https://www.figma.com/design/aoytWMO1rO2tnA5SfIpUMG/Edorado-Dashboard-UI?node-id=13-11&t=2lJMVZGBaUmrTgtD-1" aria-label="Figma" target="_blank"><Figma /></a>
              </Magnetic>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2025 Ali Panahi. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;