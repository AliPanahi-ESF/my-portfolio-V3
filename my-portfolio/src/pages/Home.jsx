// 1. Import all your sections
import React, { Suspense } from 'react'; // 1. Import Suspense

// 2. We keep the Hero import (it's "above the fold")
import Hero from '../sections/Hero.jsx';

// 3. We "lazy" load everything else
const Projects = React.lazy(() => import('../sections/Projects.jsx'));
const Services = React.lazy(() => import('../sections/Services.jsx'));
const About = React.lazy(() => import('../sections/About.jsx'));
const Traits = React.lazy(() => import('../sections/Traits.jsx'));

function Home() {
  return (
    // 2. We wrap them in <main>
    <main>
      <Hero />
      <Projects />
      <Services />
      <About />
    </main>
  );
}

export default Home;