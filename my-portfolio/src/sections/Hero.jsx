import { useEffect, useRef } from 'react';
import { Linkedin, Github, Figma, Sparkles, ArrowRight } from 'lucide-react'; 
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import './Hero.css';

gsap.registerPlugin(SplitText);

function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null); // Added ref for parallax effect

useEffect(() => {
    const ctx = gsap.context(() => {
      
      document.fonts.ready.then(() => {
        
        const heroTitle = new SplitText('.hero-title', { type: 'chars' });
        const heroTitleChars = heroTitle.chars;

        // --- THE FIX IS HERE ---
        // 1. Immediately make the parent container visible again
        gsap.set('.hero-title', { autoAlpha: 1 });

        // 2. Now hide the individual chars so we can animate them in
        gsap.set(heroTitleChars, { autoAlpha: 0, y: 100 });
        gsap.set('.hero-element', { autoAlpha: 0, y: 30 });

        // 3. The Timeline
        const tl = gsap.timeline({ delay: 0.2 });

        // ... (rest of your timeline code remains exactly the same)
        tl.to('.glass-badge', {
           autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out'
        });
        
        tl.to(heroTitleChars, {
           autoAlpha: 1, y: 0, duration: 1, ease: 'back.out(1.7)', stagger: 0.03
        }, "-=0.6");

        tl.to(['.hero-subtitle', '.hero-cta-group', '.hero-socials'], {
           autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1
        }, "-=0.8");
      });

      // --- OPTIONAL: Mouse Parallax Effect ---
      // Moves the content slightly opposite to mouse movement
      const moveX = gsap.quickTo(contentRef.current, "x", {duration: 0.5, ease: "power3"});
      const moveY = gsap.quickTo(contentRef.current, "y", {duration: 0.5, ease: "power3"});

      window.addEventListener("mousemove", (e) => {
        const { clientX, clientY, innerWidth, innerHeight } = e;
        // Calculate distance from center
        const x = (clientX - innerWidth / 2) / 30; // Divide by 30 to dampen
        const y = (clientY - innerHeight / 2) / 30;
        
        moveX(x);
        moveY(y);
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Wrapped content in a ref for parallax */}
      <div className="hero-content" ref={contentRef}>
        
        {/* Added class 'hero-element' to things we want to hide initially */}
        <div className="glass-badge hero-element">
          <Sparkles className="glass-badge-icon" />
          <span>Available for new projects</span>
        </div>

        <h1 className="hero-title">
          <span className="text-primary">Creative</span>
          <span className="text-secondary">Designer</span>
          <span className="text-primary">& Developer</span>
        </h1>

        <p className="hero-subtitle hero-element">
          Crafting digital experiences that bridge the gap between{" "}
          <span className="text-primary">imagination</span> and{" "}
          <span className="text-primary">implementation</span>.
        </p>

        <div className="hero-cta-group hero-element">
          <a href="#work" className="button-primary">
            <span>Explore My Work</span>
            <ArrowRight className="button-icon" />
          </a>
          <a href="https://www.linkedin.com/in/alipanahi090/" className="button-secondary" target="_blank" rel="noreferrer">
            <span>Let's Connect</span>
            <div className="connect-dot"></div>
          </a>
        </div>

        <div className="hero-socials hero-element">
          <a href="https://www.linkedin.com/in/alipanahi090/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/AliPanahi-ESF" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="#" aria-label="Figma" target="_blank" rel="noreferrer">
            <Figma />
          </a>
        </div>

      </div>
      
      {/* Add a subtle background glow */}
      <div className="hero-glow"></div>
    </section>
  );
}

export default Hero;