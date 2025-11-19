import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const labelRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1. Setup Lines (Hidden -> Ready)
      const curve = svgRef.current.querySelector('.loader-curve');
      const curveLength = curve.getTotalLength();
      
      gsap.set('.loader-rect', { strokeDashoffset: 600, opacity: 1 }); 
      gsap.set(curve, { strokeDasharray: curveLength, strokeDashoffset: curveLength, opacity: 1 });
      gsap.set(labelRef.current, { y: 10, opacity: 0 });

      // 2. Draw Squares (Fast Construction)
      tl.to('.loader-rect', {
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.15, 
        ease: "power2.inOut"
      });

      // 3. Draw Spiral Curve (Fluid)
      tl.to(curve, {
        strokeDashoffset: 0,
        duration: 2.0,
        ease: "power2.inOut"
      }, "-=1.2"); 

      // 4. Label & Line
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=1.0");
      tl.to(lineRef.current, { scaleX: 1, duration: 2.5, ease: "expo.inOut" }, 0);

      // 5. Exit Curtain
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.2
      });

      // Parallax Content
      tl.to(svgRef.current, { y: 150, opacity: 0, duration: 1 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="preloader-content">
        
        {/* Updated ViewBox for Perfect Alignment 
           Grid Size: 140 x 90
        */}
        <svg className="fibo-loader-svg" viewBox="0 0 140 100" ref={svgRef}>
          
          {/* --- THE SQUARES (Mathematically Aligned) --- */}
          
          {/* 1. Inner (10x10) */}
          <rect className="loader-rect" x="90" y="40" width="10" height="10" />
          
          {/* 2. Right (10x10) */}
          <rect className="loader-rect" x="100" y="40" width="10" height="10" />
          
          {/* 3. Bottom (20x20) */}
          <rect className="loader-rect" x="90" y="50" width="20" height="20" />
          
          {/* 4. Left (30x30) */}
          <rect className="loader-rect" x="60" y="40" width="30" height="30" />
          
          {/* 5. Top (50x50) */}
          <rect className="loader-rect" x="60" y="-10" width="50" height="50" />
          
          {/* 6. Right (80x80) - Partial View */}
          <rect className="loader-rect" x="110" y="-10" width="80" height="80" />

          {/* --- THE SPIRAL CURVE --- 
              This path now traces the corners of the boxes perfectly.
              M = Start Point
              A = Arc (RadiusX, RadiusY, Rotation, LargeArc, Sweep, EndX, EndY)
          */}
          <path 
            className="loader-curve" 
            d="
              M 90 50         
              A 10 10 0 0 1 100 40
              A 10 10 0 0 1 110 50
              A 20 20 0 0 1 90 70
              A 30 30 0 0 1 60 40
              A 50 50 0 0 1 110 -10
              A 80 80 0 0 1 190 70
            "
          />
        </svg>

        <div className="preloader-label" ref={labelRef}>
          Calibrating_System...
        </div>
      </div>
      
      <div className="preloader-line" ref={lineRef}></div>
    </div>
  );
}

export default Preloader;