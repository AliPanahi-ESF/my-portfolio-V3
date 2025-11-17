import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies.js';
import './ProjectPage.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectPage() {
  // 2. Get the "slug" from the URL (e.g., "healthtech-redesign")
  const { slug } = useParams();
  const study = caseStudies[slug];

const mainRef = useRef(null);
  // 3. Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

useEffect(() => {
    // We use .context() for safe cleanup
    const ctx = gsap.context(() => {
      
      // Animate the hero image
      gsap.from('.project-hero-image', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animate the summary card
      gsap.from('.project-summary-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-summary-card',
          start: 'top 85%', // Animate when 85% of it is in view
          once: true,
        }
      });
      
      // Animate EACH narrative section
      // We find all sections and loop over them
      gsap.utils.toArray('.narrative-section').forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Animate each one as it comes into view
            once: true,
          }
        });
      });

    }, mainRef); // <-- Scope all animations to our <main> tag

    // Cleanup
    return () => ctx.revert();
    
  }, [slug]); // We re-run thi
  // 4. Handle a project not being found
  if (!study) {
    return (
      <div className="project-not-found">
        <h2>Case study not found</h2>
        <Link to="/" className="button-primary">
          Go back home
        </Link>
      </div>
    );
  }

  // 5. This is the main page render
  return (
    <main className="project-page" ref={mainRef}>
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-container">
<Link to="/" className="button-secondary">
  <ArrowLeft size={16} />
  Back to projects
</Link>

          <div className="glass-badge">{study.category}</div>
          <h1 className="project-title">{study.title}</h1>

          <img 
            src={study.image} 
            alt={study.title}
            className="project-hero-image"
          />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="project-summary">
        <div className="project-container">
          <div className="project-summary-card">
            <h2>Executive Summary</h2>

            <div className="summary-item">
              <h3>Project Goal</h3>
              <p>{study.executiveSummary.goal}</p>
            </div>

            <div className="summary-item">
              <h3>My Role</h3>
              <p>{study.executiveSummary.role}</p>
            </div>

            <div className="summary-item">
              <h3>Core Skills</h3>
              <div className="skills-list">
                {study.executiveSummary.skills.map((skill) => (
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
      </section>

      {/* Main Narrative */}
      <section className="project-narrative">
        <div className="project-container-narrow">

          {/* The Problem */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.problem.title}</h2>
            <p className="narrative-body">{study.problem.content}</p>
            <ul className="narrative-list">
              {study.problem.painPoints.map((point, index) => (
                <li key={index}><span>•</span>{point}</li>
              ))}
            </ul>
          </div>

          {/* The Process */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.process.title}</h2>
            <div className="process-steps">
              {study.process.sections.map((section, index) => (
                <div key={index} className="process-step">
                  <h3>{section.subtitle}</h3>
                  <p className="narrative-body">{section.content}</p>
                  <div className="insight-box">
                    <p>💡 Key Insight:</p>
                    <p>{section.insight}</p>
                  </div>
                  <div className="skills-list">
                    {section.artifacts.map((artifact) => (
                      <span key={artifact} className="skill-badge">{artifact}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.solution.title}</h2>
            <p className="narrative-body">{study.solution.description}</p>
            <div className="features-grid">
              {study.solution.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="image-grid">
              {study.solution.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Solution screenshot ${index + 1}`}
                  className="solution-image"
                />
              ))}
            </div>
          </div>

          {/* The Outcome */}
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
            <div className="lessons-box">
              <h3>Lessons Learned</h3>
              <div className="lessons-list">
                {study.outcome.lessonsLearned.map((lesson, index) => (
                  <div key={index} className="lesson-item">
                    <h4>{lesson.title}</h4>
                    <p>{lesson.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Section (SKIPPED FOR NOW) */}

    </main>
  );
}

export default ProjectPage;