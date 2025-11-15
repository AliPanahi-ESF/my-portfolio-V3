import { Routes, Route } from 'react-router-dom'; // 1. Import Routes and Route

// 2. Import your LAYOUT components
import CustomCursor from './components/shared/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// 3. Import your new PAGE components
import Home from './pages/Home.jsx'; // We'll create this in the next step
import ProjectPage from './pages/ProjectPage.jsx'; // We'll create this later

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      {/* 4. This is the "window" for your pages */}
      <Routes>
        {/* Route 1: The Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route 2: The Project Page */}
        {/* The ":slug" is a URL parameter, just like in your reference code */}
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;