import React, { useEffect, useRef, useState } from 'react';
import './Traits.css';
import { traits } from '../data/traits.js';
import { Sparkles, Code, Dumbbell, Heart, Rocket } from 'lucide-react';
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
      // We set initial styles here to ensure consistency
      gsap.set(cards.slice(1), { 
        z: -100, scale: 0.85, yPercent: 15, opacity: 0, 
        transformOrigin: "50% 100%" 
      });

      // 2. DESKTOP ANIMATION (High Fidelity)
      // Min-width 800px: We keep the lag (scrub: 0.5) and the Blur effect
      mm.add("(min-width: 800px)", () => {
        
        // Reset blur for desktop
        gsap.set(cards.slice(1), { filter: "blur(10px)" });

        const scrollDistance = (cards.length) * 300; // Long scroll
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.5, // Adds that "heavy/premium" feel
            start: 'center center', 
            end: `+=${scrollDistance}`, 
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Desktop Loop (With Blur & Tilt)
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          const nextCard = cards[index + 1];

          tl.to(card, {
            yPercent: -120, rotationX: 10, scale: 0.95, opacity: 0, autoAlpha: 0,
            duration: 1, ease: "power2.in",
          })
          .to(nextCard, {
            z: 0, yPercent: 0, scale: 1, opacity: 1, autoAlpha: 1, 
            filter: "blur(0px)", // Animate blur
            duration: 1, ease: "power2.out"
          }, "<+=0.15");
        });
      });

      // 3. MOBILE ANIMATION (High Performance)
      // Max-width 799px: We remove lag (scrub: true) and remove Blur
      mm.add("(max-width: 799px)", () => {
        
        // Ensure NO blur on mobile (Performance killer)
        gsap.set(cards, { filter: "blur(0px)" });

        const scrollDistance = (cards.length) * 228; // Shorter scroll for thumbs
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true, // Instant response (1:1 with finger)
            start: 'center center', 
            end: `+=${scrollDistance}`, 
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Mobile Loop (Simplified Physics)
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          const nextCard = cards[index + 1];

          tl.to(card, {
            yPercent: -120, 
            // Less 3D rotation on mobile to avoid rendering glitches
            rotationX: 0, 
            scale: 0.9, 
            opacity: 0, autoAlpha: 0,
            duration: 1, ease: "none", // Linear feel works better for touch
          })
          .to(nextCard, {
            z: 0, yPercent: 0, scale: 1, opacity: 1, autoAlpha: 1,
            // No blur animation here
            duration: 1, ease: "none"
          }, "<"); // No overlap, snappy transition
        });
      });

    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Hover Animation (Kept the same)
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
          <div className="traits-carousel" ref={cardsRef}>
            {traits.map((trait, index) => {
              const IconComponent = iconMap[trait.icon];
              return (
                <div 
                  key={index} 
                  className="trait-slide" 
                  onMouseEnter={() => setHoveredIndex(index)} 
                  onMouseLeave={() => setHoveredIndex(null)}
                  // Add click handler for Mobile "Tap" interaction
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