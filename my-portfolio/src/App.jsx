import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
// 1. Import your new hook
import { useMediaQuery } from './hooks/useMediaQuery';

// Import layout components
import CustomCursor from './components/shared/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import pages
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* 2. Wrap your <Routes> in <Suspense> */}
      <Suspense fallback={<div>Loading...</div>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;