import { useEffect, useRef } from 'react';
// Fix: Use CDN import for the preview environment to resolve build error
import gsap from 'https://cdn.skypack.dev/gsap';

function Magnetic({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    
    // Use quickTo for high-performance mouse following
    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      
      // Calculate distance from center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Move the element partially towards the mouse (divide by strength)
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Clone the child element to attach the ref directly to it
  // This avoids adding an extra <div> wrapper which breaks layout
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
}

export default Magnetic;