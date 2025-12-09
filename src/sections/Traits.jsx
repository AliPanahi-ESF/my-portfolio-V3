import React, { useEffect, useRef, useState } from 'react';
import './Traits.css';
import { traits } from '../data/traits.js';
import { Sparkles, Code, Dumbbell, Heart, Rocket, ChevronDown } from 'lucide-react'; // <-- Added ChevronDown
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Sparkles, Code, Dumbbell, Heart, Rocket };

function Traits() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(cardsRef.current.children);
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1. HEADER (Runs everywhere)
      gsap.from('.traits-header', {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: '.traits-header', start: 'top 85%', once: true }
      });

      // --- SHARED SETUP ---
      gsap.set(cards.slice(1), { 
        z: -100, scale: 0.85, yPercent: 15, opacity: 0, 
        transformOrigin: "50% 100%" 
      });

      // 2. DESKTOP ANIMATION
      mm.add("(min-width: 800px)", () => {
        
        gsap.set(cards.slice(1), { filter: "blur(10px)" });
        const scrollDistance = (cards.length) * 300; 
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.5,
            start: 'center center', 
            end: `+=${scrollDistance}`, 
            anticipatePin: 1,
            invalidateOnRefresh: true,
            
            // Update Hint Visibility
            onUpdate: (self) => {
              if (self.progress > 0.02) {
                gsap.to('.scroll-hint-overlay', { opacity: 0, duration: 0.3, overwrite: true });
              } else {
                gsap.to('.scroll-hint-overlay', { opacity: 1, duration: 0.3, overwrite: true });
              }
            }
          }
        });

        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          const nextCard = cards[index + 1];
          tl.to(card, {
            yPercent: -120, rotationX: 10, scale: 0.95, opacity: 0, autoAlpha: 0,
            duration: 1, ease: "power2.in",
          })
          .to(nextCard, {
            z: 0, yPercent: 0, scale: 1, opacity: 1, autoAlpha: 1, 
            filter: "blur(0px)",
            duration: 1, ease: "power2.out"
          }, "<+=0.15");
        });
      });

      // 3. MOBILE ANIMATION
      mm.add("(max-width: 799px)", () => {
        
        gsap.set(cards, { filter: "blur(0px)" });
        const scrollDistance = (cards.length) * 228;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: 'center center', 
            end: `+=${scrollDistance}`, 
            anticipatePin: 1,
            invalidateOnRefresh: true,

            // Added Hint Logic for Mobile too
            onUpdate: (self) => {
              if (self.progress > 0.02) {
                gsap.to('.scroll-hint-overlay', { opacity: 0, duration: 0.3, overwrite: true });
              } else {
                gsap.to('.scroll-hint-overlay', { opacity: 1, duration: 0.3, overwrite: true });
              }
            }
          }
        });

        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          const nextCard = cards[index + 1];
          tl.to(card, {
            yPercent: -120, rotationX: 0, scale: 0.9, opacity: 0, autoAlpha: 0,
            duration: 1, ease: "none",
          })
          .to(nextCard, {
            z: 0, yPercent: 0, scale: 1, opacity: 1, autoAlpha: 1,
            duration: 1, ease: "none"
          }, "<");
        });
      });

    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Hover Animation
  useEffect(() => {
    if (hoveredIndex === null) return;
    gsap.to(`.trait-icon-wrapper[data-index="${hoveredIndex}"]`, { scale: 1.15, y: -5, duration: 0.4, ease: 'back.out(2)' });
    gsap.to(`.trait-card-icon[data-index="${hoveredIndex}"]`, { rotate: 15, duration: 0.4, ease: 'back.out(2)' });
    return () => {
      gsap.to(`.trait-icon-wrapper[data-index="${hoveredIndex}"]`, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      gsap.to(`.trait-card-icon[data-index="${hoveredIndex}"]`, { rotate: 0, duration: 0.3, ease: 'power2.out' });
    };
  }, [hoveredIndex]);

  return (
    <section id="traits" className="traits-section" ref={sectionRef}>
      <div className="traits-bg-orb-1"></div>
      <div className="traits-bg-orb-2"></div>

      <div className="traits-container">
        <div className="traits-header">
          <h2 className="traits-title-main">My Traits</h2>
          <p className="traits-subtitle">Scroll to explore what makes me tick</p>
        </div>

        <div className="traits-stack-wrapper">
          
          {/* --- FIX: ADDED THE SCROLL HINT HERE --- */}
          <div className="scroll-hint-overlay">
             <span className="scroll-hint-text">Scroll to Deal</span>
             <ChevronDown className="scroll-hint-icon" />
          </div>
          {/* --------------------------------------- */}

          <div className="traits-carousel" ref={cardsRef}>
            {traits.map((trait, index) => {
              const IconComponent = iconMap[trait.icon];
              return (
                <div 
                  key={index} 
                  className="trait-slide" 
                  onMouseEnter={() => setHoveredIndex(index)} 
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(index === hoveredIndex ? null : index)}
                >
                  <div className="trait-card">
                    <div className="trait-icon-wrapper" data-index={index}>
                      {IconComponent && <IconComponent className="trait-card-icon" data-index={index} />}
                    </div>
                    <h3 className="trait-title">{trait.title}</h3>
                    <p className="trait-description">{trait.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Traits;