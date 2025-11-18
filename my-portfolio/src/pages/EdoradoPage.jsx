import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Figma } from 'lucide-react';
import { caseStudies } from '../data/caseStudies.js';
import './ProjectPage.css'; 

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function EdoradoPage() {
  const study = caseStudies['edorado']; 

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.project-hero-content', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' });
      gsap.from('.project-summary', { 
        opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.project-summary', start: 'top 90%', once: true }
      });
      
      // Animate the new Showcase Text & Buttons
      gsap.from('.project-showcase', { 
        opacity: 0, y: 40, duration: 0.8, 
        scrollTrigger: { trigger: '.project-showcase', start: 'top 80%', once: true }
      });

      gsap.utils.toArray('.narrative-section').forEach(section => {
        gsap.from(section, { 
          opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 85%', once: true }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  if (!study) return <div>Project not found</div>;

  return (
    <main className="project-page">
      
      {/* 1. HERO */}
      <section className="project-hero">
        <div className="project-container">
          <div className="project-hero-content">
            <Link to="/" className="button-secondary">
              <ArrowLeft size={16} /> Back to projects
            </Link>
            <div className="glass-badge">{study.category}</div>
            <h1 className="project-title">{study.title}</h1>
          </div>
        </div>
      </section>

      {/* 2. SUMMARY */}
      <section className="project-summary">
        <div className="project-container">
          <div className="project-summary-card">
            <h2>Executive Summary</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <h3>Project Goal</h3><p>{study.executiveSummary.goal}</p>
              </div>
              <div className="summary-item">
                <h3>My Role</h3><p>{study.executiveSummary.role}</p>
              </div>
              <div className="summary-item">
                <h3>Core Skills</h3>
                <div className="skills-list">
                  {study.executiveSummary.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="summary-item outcome">
                <h3>Measurable Outcome</h3>
                <p className="text-primary">{study.executiveSummary.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW IMPROVED SHOWCASE SECTION */}
      <section className="project-showcase">
        <div className="project-container">
          
          {/* A. The "Greater Sentence" + Title */}
          <div className="showcase-intro">
            <h2>See the Interface in Action</h2>
            <p>
              Explore the interactive high-fidelity prototype to see how the high-contrast modes adapt to sunlight and night conditions in real-time.
            </p>
          </div>

          {/* B. Links (Now Centered) */}
          {study.links && (
            <div className="project-links centered">
              {study.links.demo && (
                <a href={study.links.demo} target="_blank" rel="noopener noreferrer" className="button-primary">
                  <ExternalLink size={18} /> View Live Demo
                </a>
              )}
              {study.links.figma && (
                <a href={study.links.figma} target="_blank" rel="noopener noreferrer" className="button-secondary">
                  <Figma size={18} /> View in Figma
                </a>
              )}
            </div>
          )}
          
          {/* C. Image */}
          <img src={study.image} alt={study.title} className="project-full-image" />
        </div>
      </section>

      {/* 4. NARRATIVE */}
      <section className="project-narrative">
        <div className="project-container-narrow">
           {/* ... (rest of your narrative remains exactly the same) ... */}
           <div className="narrative-section">
            <h2 className="narrative-title">{study.problem.title}</h2>
            <p className="narrative-body">{study.problem.content}</p>
            <ul className="narrative-list">
              {study.problem.painPoints.map((point, index) => (
                <li key={index}><span>•</span>{point}</li>
              ))}
            </ul>
          </div>

          <div className="narrative-section">
            <h2 className="narrative-title">{study.outcome.title}</h2>
            <div className="metrics-grid">
              {study.outcome.metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-desc">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EdoradoPage;