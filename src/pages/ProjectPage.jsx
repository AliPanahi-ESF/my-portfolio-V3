import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

// Data Imports
import { caseStudies } from '../data/caseStudies.js';
import { projects } from '../data/projects.js'; // Need this to find the "Next" project

// Styles & Components
import './ProjectPage.css';
import ProjectCard from '../components/shared/ProjectCard';
import Button from '../components/shared/Button';
import ImageMagnifier from '../components/shared/ImageMagnifier';
import HeroGenerator from '../components/bierens/HeroGenerator';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectPage() {
  const { slug } = useParams();
  const mainRef = useRef(null);

  // 1. Get Data
  const study = caseStudies[slug];

  // 2. "Next Project" Logic
  const currentIndex = projects.findIndex(p => p.id === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  // 3. Scroll Reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 4. Animations
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero Parallax
      gsap.to('.project-hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.project-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Summary Card Reveal
      gsap.from('.project-summary-card', {
        y: 100, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.project-summary', start: 'top 85%' }
      });

      // Narrative Sections (Fade Up)
      gsap.utils.toArray('.narrative-section').forEach(section => {
        gsap.from(section, {
          y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Next Project Reveal
      gsap.from('.next-project-area', {
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.next-project-area', start: 'top 80%' }
      });

    }, mainRef);

    return () => ctx.revert();
  }, [slug]);

  if (!study) return <div className="project-not-found">Case Study Not Found</div>;

  return (
    <main className="project-page" ref={mainRef}>

      {/* --- HERO --- */}
      <section className="project-hero">
        <div className="project-container">
          <Button to="/" variant="secondary" icon={ArrowLeft} style={{ marginBottom: '2rem', flexDirection: 'row-reverse' }}>
            Back to projects
          </Button>

          {study.isConfidential && (
            <div className="confidential-banner">
              <Lock size={16} />
              <span>This project is confidential. For more info or a demo, please <a href="#contact">contact me</a> below.</span>
            </div>
          )}

          <div className="glass-badge">{study.category}</div>
          <h1 className="project-title">{study.title}</h1>

          <div className="hero-image-wrapper">
            <img
              src={study.image}
              alt={study.title}
              className="project-hero-image"
              style={study.heroImageStyle}
            />
          </div>
        </div>
      </section>

      {/* --- EXECUTIVE SUMMARY --- */}
      <section className="project-summary">
        <div className="project-container">
          <div className="project-summary-card">
            <h2>Executive Summary</h2>
            <div className="summary-grid">
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
            </div>
            <div className="summary-item outcome">
              <h3>Measurable Outcome</h3>
              <p className="text-primary">{study.executiveSummary.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN NARRATIVE --- */}
      <section className="project-narrative">
        <div className="project-container-narrow">

          {/* Problem */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.problem.title}</h2>
            <p className="narrative-body">{study.problem.content}</p>
            <ul className="narrative-list">
              {study.problem.painPoints.map((point, i) => (
                <li key={i}><span>•</span>{point}</li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.process.title}</h2>
            <div className="process-steps">
              {study.process.sections.map((section, i) => (
                <div key={i} className="process-step">
                  <h3>{section.subtitle}</h3>
                  <p className="narrative-body">{section.content}</p>

                  {/* Optional Image(s) */}
                  {(section.image || section.images) && (
                    <div className={section.images ? "process-step-images-grid" : "process-step-image-wrapper"}>
                      {section.images ? (
                        section.images.map((imgSrc, imgIndex) => (
                          <div key={imgIndex} className="process-step-single-image-container">
                            {section.zoom ? (
                              <>
                                <ImageMagnifier src={imgSrc} width="100%" />
                                <div className="zoom-hint">
                                  <span style={{ fontSize: '1.2em' }}>🔍</span> Hover
                                </div>
                              </>
                            ) : (
                              <img src={imgSrc} alt={`Process step image ${imgIndex + 1}`} className="process-step-image" />
                            )}
                          </div>
                        ))
                      ) : (
                        <>
                          {section.zoom ? (
                            <>
                              <ImageMagnifier src={section.image} width="100%" />
                              <div className="zoom-hint">
                                <span style={{ fontSize: '1.2em' }}>🔍</span> Hover over image to explore details
                              </div>
                            </>
                          ) : (
                            <img src={section.image} alt="" className="process-step-image" />
                          )}
                        </>
                      )}

                      {/* Image Caption */}
                      {section.imageCaption && (
                        <p className="image-caption" style={section.images ? { gridColumn: '1 / -1' } : {}}>{section.imageCaption}</p>
                      )}
                    </div>
                  )}

                  {/* ── Standalone Media (GIF or Video) ─────────────────────
                      Add  video: myFile  to any section in caseStudies.js.
                      GIFs render as <img>, mp4/webm render as <video>.
                  ─────────────────────────────────────────────────────────── */}
                  {section.video && (
                    <div className="process-step-video-wrapper">
                      {/\.gif(\?.*)?$/i.test(section.video) ? (
                        <img
                          src={section.video}
                          alt="Demo"
                          className="process-step-video"
                        />
                      ) : (
                        <video
                          src={section.video}
                          className="process-step-video"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </div>
                  )}

                  <div className="insight-box">
                    <p>💡 Key Insight:</p> <p>{section.insight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.solution.title}</h2>
            <p className="narrative-body">{study.solution.description}</p>
            <div className="features-grid">
              {study.solution.features.map((feature, i) => (
                <div key={i} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            {study.solution.images && (
              <div className="image-grid">
                {study.solution.images.map((img, i) => (
                  <img key={i} src={img} alt="Solution" className="solution-image" />
                ))}
              </div>
            )}

            {/* MEDIA EMBEDS (YouTube / Figma) */}
            {study.media && (
              <div className="media-embeds" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* YouTube */}
                {study.media.youtube && (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <iframe
                      src={study.media.youtube}
                      title="Project Demo"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Figma */}
                {study.media.figma && (
                  <div style={{ position: 'relative', paddingBottom: '70%', height: 0, overflow: 'hidden', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <iframe
                      src={study.media.figma}
                      title="Figma Prototype"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Live Hero Generator Demo */}
          {study.showHeroGenerator && (
            <div className="narrative-section">
              <HeroGenerator />
            </div>
          )}

          {/* Outcome */}
          <div className="narrative-section">
            <h2 className="narrative-title">{study.outcome.title}</h2>
            <div className="metrics-grid">
              {study.outcome.metrics.map((metric, i) => (
                <div key={i} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- NEXT PROJECT FOOTER --- */}
      {nextProject && (
        <section className="next-project-area">
          <div className="project-container-narrow">
            <div className="next-project-header">
              <h3>Next Case Study</h3>
              <div className="divider-line"></div>
            </div>

            <div className="next-project-card-wrapper">
              <ProjectCard project={nextProject} />
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

export default ProjectPage;