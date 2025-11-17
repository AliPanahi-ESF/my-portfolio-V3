import { useEffect, useRef } from 'react';
import './Projects.css';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/shared/ProjectCard.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react'; // 1. IMPORT THE ICON

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(cardsContainerRef.current.children);
    
    const ctx = gsap.context(() => {
      
      // We'll add the header to the ScrollTrigger
      gsap.from('.projects-header', {
        opacity: 0, 
        y: 20, 
        duration: 0.6,
        scrollTrigger: { 
          trigger: '.projects-header', 
          start: 'top 85%', 
          once: true 
        }
      });
      
      // ... (your existing card stack animation) ...
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${cards.length * 500}`,
        }
      });

      gsap.set(cards.slice(1), { 
        yPercent: 10, 
        opacity: 0, 
        scale: 0.9 
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        tl.to(card, {
          yPercent: -10,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'power2.out',
        }, 
        `+=${index === 0 ? 0 : 0.5}`
        );
        tl.fromTo(cards[index + 1], 
          { yPercent: 10, opacity: 0, scale: 0.9 },
          { 
            yPercent: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          "<"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="projects-section" ref={sectionRef}>
      
      <div className="projects-container">
        
        {/* 2. THIS IS THE NEW HEADER, COPIED FROM 'SERVICES' */}
        <div className="projects-header">
          <div className="glass-badge">
            <Sparkles className="glass-badge-icon" />
            <span>Case Studies</span>
          </div>
          <h2 className="projects-title">
            Selected Work
          </h2>
          <p className="projects-subtitle">
            A few of the projects I've enjoyed working on.
          </p>
        </div>
        
        <div className="project-card-stack" ref={cardsContainerRef}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;