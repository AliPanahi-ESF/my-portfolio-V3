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
  const stackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (Magnetic Stack) ---
      mm.add("(min-width: 992px)", () => {
        const wrappers = gsap.utils.toArray('.card-animation-wrapper');
        
        // 1. SETUP
        wrappers.forEach((wrapper, i) => {
          gsap.set(wrapper, { 
            zIndex: wrappers.length - i, 
            position: 'absolute', 
            top: 0, 
            left: 0,
            scale: i === 0 ? 1 : 0.95, 
            yPercent: i === 0 ? 0 : 100, 
            autoAlpha: i === 0 ? 1 : 0 
          });
        });

        // 2. TIMELINE WITH SNAPPING
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: 'top top', 
            end: `+=${wrappers.length * 900}`, 
            scrub: 0.5, // Lower scrub makes it feel more responsive
            anticipatePin: 1,
            
            // --- THE FIX: MAGNETIC SNAPPING ---
            // This forces the scroll to settle on a card, 
            // ensuring the previous one is fully gone.
            snap: {
              snapTo: 1 / (wrappers.length - 1), // Snap to each card index
              duration: { min: 0.1, max: 0.3 },  // Quick snap
              delay: 0.1, // Wait slightly before snapping
              ease: "power1.inOut"
            }
          }
        });

        // 3. LOOP
        wrappers.forEach((wrapper, i) => {
          if (i === wrappers.length - 1) return; 

          const nextWrapper = wrappers[i + 1];

          tl
          // Step A: Current Card Leaves
          .to(wrapper, {
            scale: 0.9,
            autoAlpha: 0, 
            duration: 0.5,
            ease: "power1.inOut"
          })
          // Step B: Next Card Enters
          .to(nextWrapper, {
            yPercent: 0,
            scale: 1,
            autoAlpha: 1, 
            duration: 0.5,
            ease: "power1.out",
            // Fix: Ensure pointer events are active immediately when fully visible
            onComplete: () => gsap.set(nextWrapper, { pointerEvents: 'all' })
          }, "<"); 
        });
      });

      // --- MOBILE ANIMATION ---
      mm.add("(max-width: 991px)", () => {
        gsap.set('.card-animation-wrapper', { clearProps: "all" });
        
        const wrappers = gsap.utils.toArray('.card-animation-wrapper');
        wrappers.forEach(wrapper => {
          gsap.from(wrapper, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
              trigger: wrapper,
              start: "top 85%"
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
        
        <div className="project-card-stack" ref={stackRef}>
          {projects.map((project) => (
            <div key={project.id} className="card-animation-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;