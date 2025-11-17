import { Routes, Route } from 'react-router-dom';

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
  // 2. Use the hook. We'll define "desktop" as anything 768px or wider.
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {/* 3. This is the magic!
          We only render the CustomCursor IF isDesktop is true. */}
      {isDesktop && <CustomCursor />}
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;