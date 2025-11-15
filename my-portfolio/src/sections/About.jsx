import { useEffect, useRef } from 'react';
import './About.css';
import { MapPin, Coffee, Dumbbell, Sparkles } from 'lucide-react';
import TraitsCarousel from '../components/shared/TraitsCarousel.jsx'; // 1. Import your carousel

// Import GSAP + ScrollTrigger
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  // 2. THIS IS THE NEW, SEQUENTIAL ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // We'll keep the floating orbs and badges
      gsap.to('.about-orb-1', {
        y: -30, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut'
      });
      gsap.to('.about-orb-2', {
        y: 30, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1
      });
      gsap.to('.about-badge-1', {
        y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut'
      });
      gsap.to('.about-badge-2', {
        y: 10, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1
      });

      // 3. Create ONE master timeline for the scroll-in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%', // Start when the top hits 60% of the viewport
          once: true
        }
      });
      
      // 4. "Number 1 loads first"
      tl.from('.about-visual-card', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
      });

      // 5. "then the number two fade in first texts"
      // We target all the text elements at once
      tl.from(['.glass-badge', '.about-title', '.about-bio p'], {
        opacity: 0,
        x: 50,
        duration: 0.6,
        stagger: 0.1, // Animate them one after another
        ease: 'power3.out'
      }, 
      "-=0.6" // Overlap with the card animation
      );
      
      // 6. "then the stack cards"
      tl.from('.about-carousel-container', {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power3.out'
      }, 
      "-=0.3" // Overlap with the text animation
      );

    }, sectionRef); // Scope all animations to this section

    return () => ctx.revert(); // Cleanup!
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* ... orbs ... */}
      <div className="about-orb-1"></div>
      <div className="about-orb-2"></div>

      <div className="about-container">
        <div className="about-grid">
          
          {/* Left side - Visual (Number 1) */}
          <div className="about-visual-card">
            {/* ... badges ... */}
            <div className="about-badge about-badge-1">
              <MapPin className="w-4 h-4" />
              <span>NL</span>
            </div>
            <div className="about-badge about-badge-2">
              <Sparkles className="w-4 h-4" />
              <span>Self-taught</span>
            </div>
            {/* ... visual content ... */}
            <div className="about-visual-content">
              {/* ... hobby lines ... */}
              <div className="about-hobby-line">
                <Coffee className="w-5 h-5 text-primary" />
                <span>Bartender</span>
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
              {/* ... orb questionmark ... */}
              <div className="about-orb-center">
                <div className="about-orb-center-1"></div>
                <div className="about-orb-center-2"></div>
                <div className="about-orb-questionmark">?</div>
              </div>
            </div>
          </div>

          {/* Right side - Text (Number 2) */}
          <div className="about-text-content">
            <div className="about-text-header">
              <div className="glass-badge">
                <Sparkles className="glass-badge-icon" />
                <span>The Person Behind The Pixels</span>
              </div>
              <h2 className="about-title">
                Who I am
                <span className="about-subtitle">
                  (and why that matters)
                </span>
              </h2>
            </div>

            {/* Bio paragraphs (the "texts") */}
            <div className="about-bio">
              <p>
                From <span className="text-highlight">Iran</span>, based in the{" "}
                <span className="text-highlight">Netherlands</span>. A design graduate...
              </p>
              <p>
                I believe good design isn't about clean pixels, it's about{" "}
                <span className="text-highlight">clarity</span>...
              </p>
              <p>
                When not designing, you'll find me behind a bar pouring drinks...
              </p>
            </div>

            {/* The "stack cards" */}
            <div className="about-carousel-container">
              <TraitsCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;