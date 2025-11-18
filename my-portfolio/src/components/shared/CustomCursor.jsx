import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // 1. Check if device is desktop (has a mouse)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      
      // --- A. MOVEMENT LOGIC (The "Lag" Effect) ---
      
      // 1. DOT: Instantly follows mouse (duration: 0.05)
      const xDot = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "power3" });
      const yDot = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "power3" });
      
      // 2. RING: Smooth follow (duration: 0.3)
      const xRing = gsap.quickTo(ringRef.current, "x", { duration: 0.3, ease: "power3" });
      const yRing = gsap.quickTo(ringRef.current, "y", { duration: 0.3, ease: "power3" });

      // 3. GLOW: Lazy float (duration: 0.6)
      const xGlow = gsap.quickTo(glowRef.current, "x", { duration: 0.6, ease: "power3" });
      const yGlow = gsap.quickTo(glowRef.current, "y", { duration: 0.6, ease: "power3" });

      // Mouse Move Listener
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        
        xDot(clientX);
        yDot(clientY);
        
        xRing(clientX);
        yRing(clientY);
        
        xGlow(clientX);
        yGlow(clientY);
      };

      // --- B. HOVER LOGIC ---
      // We add a class to the BODY so we can style all 3 elements at once via CSS
      const onMouseOver = (e) => {
        const target = e.target;
        const isLink = target.closest('a, button, .project-card, .clickable');
        
        if (isLink) {
          document.body.classList.add('hovering');
        } else {
          document.body.classList.remove('hovering');
        }
      };

      // Attach Listeners
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", onMouseOver);

      // Cleanup
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseover", onMouseOver);
        document.body.classList.remove('hovering'); // Reset on unmount
      };

    });

    return () => ctx.revert();
  }, []);

  // Don't render on mobile/server
  if (typeof window !== 'undefined' && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={glowRef} className="cursor-glow"></div>
    </>
  );
}

export default CustomCursor;