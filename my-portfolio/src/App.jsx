import React, { Suspense, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import gsap from 'gsap'; 

// Components
import Preloader from './components/layout/Preloader'; // <-- Import this
import CustomCursor from './components/shared/CustomCursor';
import FibonacciHud from './components/shared/FibonacciHud'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import EdoradoPage from './pages/EdoradoPage.jsx';

// Helper: Scroll To Top
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // State for Preloader
  const [isLoading, setIsLoading] = useState(true);

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const appRef = useRef(null);

  // Particles Animation (Unchanged)
  useEffect(() => {
    if (!isHomePage) return;
    const ctx = gsap.context(() => {
      const particles = gsap.utils.toArray('.particle');
      particles.forEach((p) => {
        gsap.set(p, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          scale: gsap.utils.random(0.5, 1.5),
          opacity: gsap.utils.random(0.3, 0.8)
        });
        gsap.to(p, {
          y: "+=random(-100, 100)", x: "+=random(-50, 50)",   
          opacity: "random(0.2, 0.8)", duration: "random(10, 20)",
          repeat: -1, yoyo: true, ease: "sine.inOut"
        });
      });
    }, appRef);
    return () => ctx.revert();
  }, [isHomePage]);

  const particleArray = new Array(15).fill(null);

  return (
    <div ref={appRef} className="app-container">
      <ScrollToTop />

      {/* 1. The Preloader */}
      {/* It sits on top. When it finishes, we set isLoading(false) */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Main Content */}
      {/* We render it immediately so GSAP can calculate heights, 
          but the Preloader covers it visually. */}
      
      <div className="content-wrapper">
        {isHomePage && (
          <div className="background-container">
            <div className="background-grid"></div>
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
            <FibonacciHud />
            {particleArray.map((_, i) => (
              <div key={i} className={`particle ${i % 3 === 0 ? 'secondary' : ''}`} style={{ width: i % 2 === 0 ? '4px' : '6px', height: i % 2 === 0 ? '4px' : '6px' }}></div>
            ))}
          </div>
        )}

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
    </div>
  );
}

export default App;