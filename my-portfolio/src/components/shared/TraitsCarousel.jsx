import React, { useState, useEffect, useRef } from 'react';
import './TraitsCarousel.css'; // <-- This is the CSS import
import { traits } from '../../data/traits.js'; // <-- This is the data import
import TraitCard from './TraitCard.jsx';
import { 
  ChevronLeft, ChevronRight, Sparkles, Code, Dumbbell, Heart, Rocket 
} from 'lucide-react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import gsap from 'gsap';

// Icon map
const iconMap = {
  Sparkles, Code, Dumbbell, Heart, Rocket
};

function TraitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const slideRefs = traits.map(() => useRef(null));

  // This logic is simple and loops
  const handlePaginate = (dir) => {
    setDirection(dir === 1 ? 'right' : 'left');
    setCurrentIndex((prevIndex) => {
      if (dir === 1) { // Go Right (Next)
        return prevIndex === traits.length - 1 ? 0 : prevIndex + 1;
      } else { // Go Left (Prev)
        return prevIndex === 0 ? traits.length - 1 : prevIndex - 1;
      }
    });
  };
  
  // GSAP animations
  useEffect(() => {
    // --- FLOATING BUTTON ANIMATION ---
    gsap.to('.trait-nav-button-prev', {
      y: -8, duration: 2, repeat: -1,
      yoyo: true, ease: 'easeInOut'
    });
    gsap.to('.trait-nav-button-next', {
      y: 8, duration: 2.5, repeat: -1,
      yoyo: true, ease: 'easeInOut', delay: 0.5
    });
  }, []);
  
  // Card "slide" animations
  const onEnter = (node) => {
    const xPercent = direction === 'right' ? 100 : -100;
    gsap.fromTo(node, 
      { opacity: 0, xPercent: xPercent },
      { opacity: 1, xPercent: 0, duration: 0.8, ease: 'power3.out' }
    );
  };
  const onExit = (node) => {
    const xPercent = direction === 'right' ? -100 : 100;
    gsap.to(node, {
      opacity: 0,
      xPercent: xPercent,
      duration: 0.8,
      ease: 'power3.inOut'
    });
  };

  return (
    // This is the main component wrapper
    <div className="traits-carousel-component">
      
      {/* Background orbs */}
      <div className="traits-bg-orb-1"></div>
      <div className="traits-bg-orb-2"></div>
      
      {/* Container for the carousel itself */}
      <div className="traits-stack-wrapper">
        <div className="traits-carousel">
          <SwitchTransition>
            <CSSTransition
              key={currentIndex}
              nodeRef={slideRefs[currentIndex]}
              timeout={800} 
              classNames="slide"
              onEnter={onEnter}
              onExit={onExit}
            >
              <div ref={slideRefs[currentIndex]} className="trait-slide">
                <TraitCard 
                  trait={traits[currentIndex]}
                  IconComponent={iconMap[traits[currentIndex].icon]}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        
        {/* The Buttons Overlay */}
        <div className="traits-nav-overlay">
          <button
            onClick={() => handlePaginate(-1)}
            className="button-primary trait-nav-button trait-nav-button-prev"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handlePaginate(1)}
            className="button-primary trait-nav-button trait-nav-button-next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TraitsCarousel;