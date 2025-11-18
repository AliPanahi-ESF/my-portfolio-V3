import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FibonacciHud.css';

function FibonacciHud() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 0, // FIX: No waiting between loops
        defaults: { ease: "none" } // Linear flow = non-stop feel
      });

      // 1. Reset
      gsap.set('.fibo-rect', { strokeDashoffset: 400, opacity: 0 });
      gsap.set('.fibo-curve', { strokeDashoffset: 600, opacity: 0 });
      gsap.set('.fibo-label', { opacity: 0 });
      gsap.set(wrapperRef.current, { opacity: 1 });

      // 2. Draw Sequence
      tl.to('.fibo-rect', {
        strokeDashoffset: 0, 
        opacity: 0.3,      
        duration: 4,       
        stagger: 0.5,      
      });

      // 3. Draw Curve
      tl.to('.fibo-curve', {
        strokeDashoffset: 0, 
        opacity: 0.6,     
        duration: 4,       
      }, "-=3");           

      // 4. Labels
      tl.to('.fibo-label', {
        opacity: 0.8,
        duration: 0.5,
        stagger: 0.2
      }, "-=3");

      // 5. Fade Out (Faster now)
      tl.to(wrapperRef.current, {
        opacity: 0,
        duration: 1.5, 
      }, "+=0.5"); // Slight pause (0.5s) then fade

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fibonacci-container" ref={wrapperRef}>
      <svg viewBox="0 0 140 90" className="fibonacci-svg">
        <rect x="90" y="30" width="10" height="10" className="fibo-rect" />
        <text x="93" y="38" className="fibo-label">1</text>
        <rect x="100" y="30" width="10" height="10" className="fibo-rect" />
        <rect x="90" y="40" width="20" height="20" className="fibo-rect" />
        <text x="98" y="53" className="fibo-label">2</text>
        <rect x="60" y="30" width="30" height="30" className="fibo-rect" />
        <text x="72" y="48" className="fibo-label">3</text>
        <rect x="60" y="-20" width="50" height="50" className="fibo-rect" />
        <text x="82" y="8" className="fibo-label">5</text>
        <rect x="110" y="-20" width="80" height="80" className="fibo-rect" />
        <text x="145" y="25" className="fibo-label">8</text>
        <path 
          d="M90 40 A 10 10 0 0 1 100 30 A 10 10 0 0 1 110 40 A 20 20 0 0 1 90 60 A 30 30 0 0 1 60 30 A 50 50 0 0 1 110 -20 A 80 80 0 0 1 190 60" 
          className="fibo-curve" 
          fill="none" 
        />
      </svg>
      <div className="fibo-caption">SEQ_INIT: GOLDEN_RATIO</div>
    </div>
  );
}

export default FibonacciHud;