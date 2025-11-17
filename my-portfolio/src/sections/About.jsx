import { useEffect, useRef, useState } from 'react'; // We need useState
import './About.css';
import { MapPin, Coffee, Dumbbell, Sparkles } from 'lucide-react';


// Import your profile photo
import ProfilePhoto from '../assets/images/profile-photo.png'; // <-- (Change if your name is different)

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // For the photo hover

  // This is your main ScrollTrigger animation timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // ... (floating orb/badge animations) ...
      gsap.to('.about-orb-1', { y: -30, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut' });
      gsap.to('.about-orb-2', { y: 30, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1 });
      gsap.to('.about-badge-1', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'easeInOut' });
      gsap.to('.about-badge-2', { y: 10, duration: 4, repeat: -1, yoyo: true, ease: 'easeInOut', delay: 1 });

      // Create ONE master timeline for the scroll-in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // This is the fix for the "disappearing text"
          once: true
        }
      });
      
      tl.from('.about-visual-card', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
      });

      tl.from(['.glass-badge', '.about-title', '.about-bio p'], {
        opacity: 0,
        x: 50,
        duration: 0.6,
        stagger: 0.1, 
        ease: 'power3.out'
      }, "-=0.6");
      


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // This is the hover animation logic
  useEffect(() => {
    const tlIn = gsap.timeline({ paused: true });
    const tlOut = gsap.timeline({ paused: true });

    tlIn.to('.about-visual-content', { 
           opacity: 0, 
           duration: 0.3, 
           ease: 'power2.in' 
         })
         .to('.about-profile-photo', { 
           opacity: 1, 
           duration: 0.4, 
           ease: 'power2.out' 
         });

    tlOut.to('.about-profile-photo', { 
           opacity: 0, 
           duration: 0.3, 
           ease: 'power2.in' 
         })
         .to('.about-visual-content', { 
           opacity: 1, 
           duration: 0.4, 
           ease: 'power2.out' 
         });

    if (isHovered) {
      tlOut.reverse();
      tlIn.play();
    } else {
      tlIn.reverse();
      tlOut.play();
    }
  }, [isHovered]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* ... orbs ... */}
      <div className="about-orb-1"></div>
      <div className="about-orb-2"></div>

      <div className="about-container">
        <div className="about-grid">
          
          {/* Left side - Visual */}
          <div 
            className="about-visual-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Badges stay on the outside */}
            <div className="about-badge about-badge-1">
              <MapPin className="w-4 h-4" />
              <span>NL</span>
            </div>
            <div className="about-badge about-badge-2">
              <Sparkles className="w-4 h-4" />
              <span>Self-taught</span>
            </div>
            
            {/* THIS IS THE NEW INNER WRAPPER */}
            <div className="about-visual-card-inner">
              
              {/* Photo is now INSIDE the wrapper */}
              <img 
                src={ProfilePhoto} 
                alt="A photo of Ali Panahi" 
                className="about-profile-photo"
              />

              {/* Content is now INSIDE the wrapper */}
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
              
            </div> {/* <-- End of new inner wrapper */}
          </div>

          {/* Right side - Text */}
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

            {/* Bio paragraphs (THE FIX IS HERE) */}
            <div className="about-bio">
              <p>
                Based in the{" "}
                <span className="text-highlight">Netherlands</span>. A Product Designer + Front-End Developer graduate.
                 I work at the intersection of UX thinking and clean front-end execution,
                  building products that feel thoughtful, intentional, and actually usable. 
                  Most of what I know comes from teaching myself (and ofcourse university), breaking things, fixing them again, 
                  and staying endlessly curious about how systems behave.. <span className="text-primary italic">Self-taught, self-doubted, and self-corrected</span> — still here. Still building.
              </p> {/* <-- WAS </pre> */}
              <p>
               My design philosophy is simple:{" "}
                <span className="text-highlight">clarity</span> first. Good design isn’t just beautiful pixels; it’s when the user’s mind relaxes because everything makes sense.
                 Whether I’m redesigning a flow, building a component system, or polishing the small interactions, my goal is always the same
                reduce cognitive load,
                <span className="text-primary font-medium">make the user breathe easier</span>.and let the product speak for itself.{" "}
              </p> {/* <-- WAS </pre> */}
              <p>
                Outside my desk work, I keep my  
                <span className="text-highlight italic"> creativity</span> and
                <span className="text-highlight italic"> discipline</span> sharp through the things I enjoy like playing football, reading books.
                I build with intention. I design with clarity. And I like creating things that feel good to use.{" "}

              </p> {/* <-- WAS </pre> */}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;