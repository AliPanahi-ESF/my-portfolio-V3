import { useEffect, useRef, useState } from 'react'; // Added useState
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
  const [activeIndex, setActiveIndex] = useState(0); // Track active card

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

        // 2. TIMELINE WITH SNAPPING & PROGRESS TRACKING
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: 'top top', 
            end: `+=${wrappers.length * 900}`, 
            scrub: 0.5, 
            anticipatePin: 1,
            
            // --- NEW: Update Progress Bar & Number ---
            onUpdate: (self) => {
              // A. Animate the bar height directly via GSAP (Performant)
              gsap.set('.progress-fill', { scaleY: self.progress });
              
              // B. Update the number state (React)
              // self.progress is 0 to 1. We map that to 0 to (length - 1)
              const index = Math.round(self.progress * (wrappers.length - 1));
              setActiveIndex(index);
            },

            // Magnetic Snapping
            snap: {
              snapTo: 1 / (wrappers.length - 1), 
              duration: { min: 0.1, max: 0.3 },  
              delay: 0.1, 
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
          
          {/* --- NEW: VISUAL FEEDBACK LOOP --- */}
          <div className="projects-progress-indicator">
            <span className="progress-number active">
              0{activeIndex + 1}
            </span>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-number">
              0{projects.length}
            </span>
          </div>
          {/* ------------------------------- */}

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