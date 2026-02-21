import { useEffect, useRef, useState } from 'react';
import './About.css';
import {
  MapPin, Coffee, Dumbbell, Sparkles,
  Globe, Lightbulb
} from 'lucide-react';
import ProfilePhoto from '../assets/images/profile-photo.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. MAIN ENTRANCE ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Floating Orbs
      gsap.to('.about-orb-1', { y: -30, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut' });
      gsap.to('.about-orb-2', { y: 30, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1 });
      gsap.to('.about-badge-1', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut' });
      gsap.to('.about-badge-2', { y: 10, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1 });

      // Master Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true
        }
      });

      // Left Card
      tl.from('.about-visual-card', {
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out'
      });

      // Right Text (Header + Paragraphs)
      tl.from(['.about-text-header', '.bio-item'], {
        opacity: 0, x: 50, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      }, "-=0.6");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 2. HOVER INTERACTION (Profile Reveal)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isHovered) {
        gsap.to('.about-visual-content', { opacity: 0, duration: 0.3, ease: 'power2.in' });
        gsap.to('.about-profile-photo', { opacity: 1, scale: 1.05, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to('.about-profile-photo', { opacity: 0, scale: 1, duration: 0.3, ease: 'power2.in' });
        gsap.to('.about-visual-content', { opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isHovered]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-orb-1"></div>
      <div className="about-orb-2"></div>

      <div className="about-container">
        <div className="about-grid">

          {/* LEFT SIDE (Unchanged) */}
          <div
            className="about-visual-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
          >
            <div className="about-badge about-badge-1">
              <MapPin className="w-4 h-4" />
              <span>NL</span>
            </div>
            <div className="about-badge about-badge-2">
              <Sparkles className="w-4 h-4" />
              <span>Self-taught</span>
            </div>

            <div className="about-visual-card-inner">
              <img src={ProfilePhoto} alt="Ali Panahi" className="about-profile-photo" />
              <div className="about-visual-content">
                <div className="about-hobby-line">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span>Reading</span>
                  <span className="dot">•</span>
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Light Designer</span>
                </div>
                <div className="about-hobby-line">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  <span>Gym Enthusiast</span>
                  <span className="dot">•</span>
                  <span>Overthinker</span>
                </div>
                <div className="about-orb-center">
                  <div className="about-orb-center-1"></div>
                  <div className="about-orb-center-2"></div>
                  <div className="about-orb-questionmark">?</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="about-text-content">
            <div className="about-text-header">
              <div className="glass-badge">
                <Sparkles className="glass-badge-icon" />
                <span>The Person Behind The Pixels</span>
              </div>
              <h2 className="about-title">
                Who I am
                <span className="about-subtitle">(and why that matters)</span>
              </h2>
            </div>

            {/* NEW BIO STRUCTURE WITH ICONS */}
            <div className="about-bio">

              {/* Paragraph 1: Location / Background */}
              <div className="bio-item">
                <div className="bio-icon-wrapper">
                  <Globe className="bio-icon" />
                </div>
                <p>
                  Based in the <span className="text-highlight">Netherlands</span>. A Product Designer + Front-End Developer graduate.
                  I work at the intersection of UX thinking and clean front-end execution,
                  building products that feel thoughtful, intentional, and actually usable.
                  Most of what I know comes from teaching myself (and of course university), breaking things, fixing them again,
                  and staying endlessly curious about how systems behave. <span className="text-primary italic">Self-taught, self-doubted, and self-corrected</span> — still here. Still building.
                </p>
              </div>

              {/* Paragraph 2: Philosophy */}
              <div className="bio-item">
                <div className="bio-icon-wrapper">
                  <Lightbulb className="bio-icon" />
                </div>
                <p>
                  My design philosophy is simple: <span className="text-highlight">clarity</span> first. Good design isn’t just beautiful pixels; it’s when the user’s mind relaxes because everything makes sense.
                  Whether I’m redesigning a flow, building a component system, or polishing the small interactions, my goal is always the same:
                  reduce cognitive load, <span className="text-primary font-medium">make the user breathe easier</span>, and let the product speak for itself.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;