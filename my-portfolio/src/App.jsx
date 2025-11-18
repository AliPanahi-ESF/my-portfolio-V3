import React, { Suspense, useRef, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import gsap from 'gsap'; 

// Components
import CustomCursor from './components/shared/CustomCursor';
import FibonacciHud from './components/shared/FibonacciHud'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import EdoradoPage from './pages/EdoradoPage.jsx';

// --- HELPER: SCROLL MANAGER ---
function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Run BEFORE the browser paints the screen
  useLayoutEffect(() => {
    // Disable the browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Optional: Force body to top to prevent glitches
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }, [pathname]); // Run on every route change

  return null;
}

function App() {
  // 1. Setup Hooks
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Ref for the app container
  const appRef = useRef(null);

  // 2. Particles Animation Logic (Only runs on Home)
  useEffect(() => {
    if (!isHomePage) return;

    const ctx = gsap.context(() => {
      const particles = gsap.utils.toArray('.particle');

      particles.forEach((p) => {
        // Initial Random Position
        gsap.set(p, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          scale: gsap.utils.random(0.5, 1.5),
          opacity: gsap.utils.random(0.3, 0.8)
        });

        // Continuous Floating Movement
        gsap.to(p, {
          y: "+=random(-100, 100)", 
          x: "+=random(-50, 50)",   
          opacity: "random(0.2, 0.8)", 
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, appRef);

    return () => ctx.revert();
  }, [isHomePage]); 

  // Generate array for 15 particles
  const particleArray = new Array(15).fill(null);

  return (
    <div ref={appRef} className="app-container">
      {/* Handles the Scroll Reset Logic */}
      <ScrollToTop />

      {/* --- BACKGROUND RENDER (Only on Home) --- */}
      {isHomePage && (
        <div className="background-container">
          
          {/* 1. The Background Grid */}
          <div className="background-grid"></div>

          {/* 2. Right Side: 3D Wireframe Octahedron */}
          <div className="geometric-shape">
             <div className="octahedron-face face-1"></div>
             <div className="octahedron-face face-2"></div>
             <div className="octahedron-face face-3"></div>
             <div className="octahedron-face face-4"></div>
             <div className="octahedron-face face-5"></div>
             <div className="octahedron-face face-6"></div>
             <div className="octahedron-face face-7"></div>
             <div className="octahedron-face face-8"></div>
          </div>

          {/* 3. Left Side: Fibonacci HUD Animation */}
          <FibonacciHud />

          {/* 4. Floating Particles */}
          {particleArray.map((_, i) => (
            <div 
              key={i} 
              className={`particle ${i % 3 === 0 ? 'secondary' : ''}`}
              style={{
                width: i % 2 === 0 ? '4px' : '6px',
                height: i % 2 === 0 ? '4px' : '6px',
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Custom Cursor (Desktop Only) */}
      {isDesktop && <CustomCursor />}
      
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="loading-screen"></div>}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/edorado" element={<EdoradoPage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;