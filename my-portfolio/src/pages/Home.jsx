// 1. Import all your sections
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import About from '../sections/About';
import Traits from '../sections/Traits';

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