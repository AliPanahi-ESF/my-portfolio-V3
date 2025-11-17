import React, { useEffect, useRef } from 'react';
import './Traits.css';
import { traits } from '../data/traits.js';
import { 
  Sparkles, Code, Dumbbell, Heart, Rocket 
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Icon map
const iconMap = {
  Sparkles,
  Code,
  Dumbbell,
  Heart,
  Rocket
};

function Traits() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  
  useEffect(() => {
    const cards = gsap.utils.toArray(cardsRef.current.children);
    
    const ctx = gsap.context(() => {
      // --- HEADER ANIMATION ---
      gsap.from('.traits-header', {
        opacity: 0, y: 20, duration: 0.6,
        scrollTrigger: { 
          trigger: '.traits-header', 
          start: 'top 85%', 
          once: true 
        }
      });
      
      // --- STICKY STACK ANIMATION ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,   // Pins the entire section
          scrub: 1,    // Links animation to scrollbar
          start: 'top top',
          // Each card gets 500px of "scroll room"
          end: () => `+=${cards.length * 500}`,
          // markers: true, // Uncomment to debug
        }
      });

      // We set all cards (except the first one) to be invisible
      // and stacked underneath
      gsap.set(cards.slice(1), { 
        yPercent: 10, 
        opacity: 0, 
        scale: 0.9 
      });

      // Now, we loop through and animate them
      cards.forEach((card, index) => {
        // Don't animate the *last* card out
        if (index === cards.length - 1) return;

        // Animate the CURRENT card (index) OUT
        tl.to(card, {
          yPercent: -10,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'power2.out',
        }, 
        // Stagger the start time
        `+=${index === 0 ? 0 : 0.5}`
        );
        
        // Animate the NEXT card (index + 1) IN
        tl.fromTo(cards[index + 1], 
          { yPercent: 10, opacity: 0, scale: 0.9 },
          { 
            yPercent: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          // Overlap with the "out" animation
          "<"
        );
      });

    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="traits" className="traits-section" ref={sectionRef}>
      {/* Background orbs */}
      <div className="traits-bg-orb-1"></div>
      <div className="traits-bg-orb-2"></div>

      <div className="traits-container">
        {/* Section header */}
        <div className="traits-header">
          <h2 className="traits-title-main">
            My Traits
          </h2>
          <p className="traits-subtitle">
            Scroll to explore what makes me tick
          </p>
        </div>

        {/* Card stack container */}
        <div className="traits-stack-wrapper">
          <div className="traits-carousel" ref={cardsRef}>
            
            {/* We map all traits into cards */}
            {traits.map((trait, index) => {
              const IconComponent = iconMap[trait.icon];
              return (
                <div key={index} className="trait-slide">
                  <Tilt
                    className="trait-card"
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                  >
                    <div className="trait-card-inner">
                      <div className="trait-card-content">
                        <div className="trait-icon-wrapper">
                          {IconComponent && <IconComponent />}
                        </div>
                        <h3 className="trait-title">
                          {trait.title}
                        </h3>
                        <p className="trait-description">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </div>
              );
            })}
            
          </div>
        </div>
        {/* We have removed all buttons and dots */}
      </div>
    </section>
  );
}


export default Traits;