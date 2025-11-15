import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';


function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const glowRef = useRef(null)

    useEffect(()=>{
    const onMouseMove = (event)=>{
        gsap.to(dotRef.current,{
            x: event.clientX,
            y: event.clientY,
            duration:0.1,
            ease:'power2.out'
        })
        gsap.to(ringRef.current,{
            x: event.clientX,
            y: event.clientY,
            duration: 0.3,
            ease:'power2.out'
        })
        gsap.to(glowRef.current,{
            x: event.clientX,
            y: event.clientY,
            duration: 0.8,
            ease: 'power2.out'
        })
    }
    window.addEventListener('mousemove',onMouseMove)

    return()=>{
        window.removeEventListener('mousemove',onMouseMove)
    }
    },[])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true"></div>
    </>
  );
}

export default CustomCursor;