import { useEffect, useRef } from 'react';
import './Projects.css';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/shared/ProjectCard.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (Fade In Up) ---
      mm.add("(min-width: 992px)", () => {
        const cards = gsap.utils.toArray('.project-card-wrapper');

        cards.forEach((card) => {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Starts animation when top of card hits 85% of viewport height
              toggleActions: "play none none reverse" // Replays on scroll up if desired, or "play none none none" for once
            }
          });
        });
      });

      // --- MOBILE ANIMATION ---
      mm.add("(max-width: 991px)", () => {
        const cards = gsap.utils.toArray('.project-card-wrapper');

        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 90%"
            }
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="projects-section" ref={sectionRef}>
      <div className="projects-container">

        <div className="projects-header">
          <div className="glass-badge">
            <Sparkles className="glass-badge-icon" size={16} />
            <span>Case Studies</span>
          </div>
          <h2 className="projects-title">Selected Work</h2>
          <p className="projects-subtitle">
            A few of the projects I've enjoyed working on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;