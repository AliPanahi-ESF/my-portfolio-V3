import { useEffect, useRef } from 'react'; // 1. Import hooks
import { Linkedin, Github, Figma, Sparkles, ArrowRight } from 'lucide-react'; 
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import './Hero.css';

// 3. Register the plugin so GSAP can use it
gsap.registerPlugin(SplitText);

function Hero() {
  // 4. Create a ref for the whole section
  const heroRef = useRef(null);

  // 5. This is our animation code!
  useEffect(() => {
    // 6. Use GSAP Context for safe cleanup
    const ctx = gsap.context(() => {
      
      // 7. Create our SplitText instance
      // We target the h1 and split it by "chars" (characters)
      const heroTitle = new SplitText('.hero-title', { type: 'chars' });
      const heroTitleChars = heroTitle.chars; // This is an array of all the characters

      // 8. Set the initial state (all invisible)
      gsap.set('.glass-badge', { opacity: 0, y: -20 });
      gsap.set(heroTitleChars, { opacity: 0, y: 20 }); // Set chars invisible
      gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
      gsap.set('.hero-cta-group a', { opacity: 0, y: 20 });
      gsap.set('.hero-socials a', { opacity: 0, y: 20 });
      
      // 9. Create the main timeline
      const tl = gsap.timeline({ delay: 0.5 }); // Start after 0.5s

      // Step 1: Animate the badge
      tl.to('.glass-badge', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      });

      // Step 2: Animate the title, letter by letter
      tl.to(heroTitleChars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.02 // Stagger each char by 0.02s
      }, 
      "-=0.4" // Overlap with badge animation
      );

      // Step 3: Animate the subtitle
      tl.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      "-=0.6" // Overlap
      );

      // Step 4: Animate the buttons
      tl.to('.hero-cta-group a', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1 // Stagger the two buttons
      },
      "-=0.4" // Overlap
      );
      
      // Step 5: Animate the social icons
      tl.to('.hero-socials a', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1 // Stagger the three icons
      },
      "-=0.3" // Overlap
      );

    }, heroRef); // <-- Scope the context to our hero section

    // 10. Cleanup
    return () => ctx.revert();
    
  }, []); // <-- Run only once on mount

  // 11. Attach the ref
  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-content">
        
        <div className="glass-badge">
          <Sparkles className="glass-badge-icon" />
          <span>Available for new projects</span>
        </div>

        <h1 className="hero-title">
          <span className="text-primary">Creative</span>
          <span className="text-secondary">Designer</span>
          <span className="text-primary">& Developer</span>
        </h1>

        <p className="hero-subtitle">
          Crafting digital experiences that bridge the gap between{" "}
          <span className="text-primary">imagination</span> and{" "}
          <span className="text-primary">implementation</span>.
        </p>

<div className="hero-cta-group">
          <a href="#work" className="button-primary">
            {/* We wrap the text in a span so we can use flexbox */}
            <span>Explore My Work</span>
            <ArrowRight className="button-icon" />
          </a>
          <a href="https://www.linkedin.com/in/alipanahi090/" className="button-secondary" target="_blank">
            <span>Let's Connect</span>
            <div className="connect-dot"></div>
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/alipanahi090/" aria-label="LinkedIn" target="_blank">
            <Linkedin />
          </a>
          <a href="https://github.com/AliPanahi-ESF" aria-label="GitHub" target="_blank">
            <Github />
          </a>
          <a href="#" aria-label="Figma" target="_blank">
            <Figma />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;