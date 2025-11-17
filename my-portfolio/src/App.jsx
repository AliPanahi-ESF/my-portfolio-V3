import React, { Suspense, useEffect, useRef } from 'react'; // 1. IMPORT useEffect and useRef
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import CustomCursor from './components/shared/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

// 2. IMPORT GSAP
import gsap from 'gsap';

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const appRef = useRef(null); // 3. Create a ref for the app

  // 4. This is the new animation logic
  useEffect(() => {
    // We only run this animation on desktop
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      // Animate blob 1
      gsap.to('.blob-1', {
        x: '50vw',
        y: '10vh',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      // Animate blob 2
      gsap.to('.blob-2', {
        x: '-30vw',
        y: '40vh',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 5
      });
    }, appRef); // Scope the animation to our app

    return () => ctx.revert();
  }, [isDesktop]); // Re-run if isDesktop changes

  return (
    // 5. Attach the ref
    <div ref={appRef}>
      {/* 6. ADD THE NEW BLOBS */}
      {isDesktop && (
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      )}

      {/* 7. Your existing app content */}
      {isDesktop && <CustomCursor />}
      
      <Navbar />
      
      <Suspense fallback={<div></div>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;