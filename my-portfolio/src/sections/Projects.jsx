import { useEffect, useRef } from 'react';
import './Projects.css';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/shared/ProjectCard.jsx';

// 1. Import GSAP and the ScrollTrigger plugin
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

// 2. Register the plugin
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  // 3. Create a ref for the entire section
  const sectionRef = useRef(null);

  // 4. This is our animation code
  useEffect(() => {
    // 5. Use GSAP Context for safe cleanup
    const ctx = gsap.context(() => {
      
      // 6. Set the initial state of the cards (invisible)
      gsap.set('.project-card', { 
        opacity: 0, 
        y: 50 // Start them 50px "down"
      });

      // 7. Create the ScrollTrigger animation
      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        
        // This makes them animate in one after the other
        stagger: 0.3, 
        
        // THIS IS THE SCROLLTRIGGER PART:
        scrollTrigger: {
          trigger: sectionRef.current, // What "triggers" the animation
          start: 'top 70%', // When the top of the section hits 70% from the top of the viewport
          // markers: true // (Uncomment this to see debug markers)
        }
      });

    }, sectionRef); // <-- Scope the context to our section

    // 8. Cleanup
    return () => ctx.revert();
    
  }, []); // <-- Run only once on mount

  return (
    // 9. Attach the ref to the section
    <section id="work" className="projects-section" ref={sectionRef}>
      <div className="project-card-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;