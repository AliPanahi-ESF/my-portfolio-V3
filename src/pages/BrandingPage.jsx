import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowLeft, Target, Sparkles, Layers, Zap, Eye,
    Image, Star, Palette, Layout, Play, ExternalLink
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { projects } from '../data/projects';
import Button from '../components/shared/Button';
import ProjectCard from '../components/shared/ProjectCard';
import './BrandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const BrandingPage = () => {
    const study = caseStudies['branding-case-study'];
    const containerRef = useRef(null);


    // Next Project Logic
    const currentIndex = projects.findIndex(p => p.id === 'branding-case-study');
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];



    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.from('.hero-title span', {
                y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out'
            });
            gsap.from('.brand-pill', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 });
            gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.5 });

            // Executive Summary
            gsap.from('.summary-card-dark', {
                y: 50, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '.summary-card-dark', start: 'top 85%' }
            });

            // Process Section Animation
            gsap.from('.process-step', {
                y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: '.process-steps', start: 'top 85%' }
            });

            // Gallery Animation
            gsap.from('.gallery-item', {
                opacity: 0, y: 30, duration: 1, stagger: 0.1,
                scrollTrigger: { trigger: '.gallery-section', start: 'top 85%' }
            });

            // Solution Section
            gsap.from('.solution-section', {
                y: 50, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '.solution-section', start: 'top 85%' }
            });

            // Tech Stack
            gsap.fromTo('.tech-card',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.tech-stack-section', start: 'top 80%' }
                }
            );

            // Technical Challenges
            gsap.from('.challenge-card', {
                y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: '.challenges-section', start: 'top 80%' }
            });

            // CTA Button
            gsap.from('.cta-wrapper', {
                y: 20, opacity: 0, duration: 0.6, delay: 0.4, ease: 'power3.out',
                scrollTrigger: { trigger: '.challenges-section', start: 'top 80%' }
            });

            // Next Project
            gsap.from('.next-project-area', {
                y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.next-project-area', start: 'top 85%' }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (!study) return <div>Loading...</div>;

    return (
        <div className="branding-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="branding-hero container-max">
                <div className="hero-nav">
                    <Button to="/" variant="secondary" icon={ArrowLeft} style={{ flexDirection: 'row-reverse' }}>
                        Back to projects
                    </Button>
                </div>

                <div className="hero-badge-wrapper">
                    <span className="brand-pill">Branding & Web Design</span>
                </div>

                <h1 className="hero-title">{study.title}</h1>
                <p className="hero-subtitle">
                    {study.subtitle}
                </p>

                {study.intro && (
                    <div className="hero-description">
                        <p>
                            {study.intro.text} <span className="text-highlight">{study.intro.socialMock}: <a href={study.intro.socialLink} target="_blank" rel="noopener noreferrer" className="highlight-link">Instagram Profile</a></span>
                        </p>
                    </div>
                )}
            </section>

            {/* Executive Summary (Dark Card) */}
            <section className="container-max">
                <div className="summary-card-dark">
                    <div className="summary-header">
                        <div className="dot-indicator" />
                        <span className="summary-label">Executive Summary</span>
                    </div>

                    <div className="summary-grid">
                        <div className="summary-col">
                            <h4><Target size={16} /> Project Goal</h4>
                            <p>{study.executiveSummary.goal}</p>
                        </div>
                        <div className="summary-col">
                            <h4><Sparkles size={16} /> My Role</h4>
                            <p>{study.executiveSummary.role}</p>
                        </div>
                        <div className="summary-col">
                            <h4><Layers size={16} /> Core Skills</h4>
                            <div>
                                {study.executiveSummary.skills.slice(0, 5).map(skill => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="summary-col">
                            <h4><Zap size={16} /> Outcome</h4>
                            <p className="outcome-highlight">{study.executiveSummary.outcome}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. Branding Gallery (Masonry Grid) --- */}
            {study.brandGallery && (
                <section className="gallery-section">
                    <div className="container-max">
                        <div className="gallery-grid">
                            {study.brandGallery.map((item, index) => (
                                <div key={index} className="gallery-item">
                                    <img src={item.src} alt={item.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {/* --- 3. Process Section (New) --- */}
            {study.process && (
                <section className="process-narrative project-container-narrow" style={{ marginTop: 'var(--space-9)' }}>
                    <h2 className="narrative-title">{study.process.title}</h2>
                    <div className="process-steps">
                        {study.process.sections.map((step, index) => (
                            <div key={index} className="process-step">
                                <h3>{step.subtitle}</h3>
                                <p className="narrative-body">{step.content}</p>
                                {step.insight && (
                                    <div className="insight-box">
                                        <p>💡 Key Insight:</p>
                                        <p>{step.insight}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* --- 4. Solution Section (New) --- */}
            {study.solution && (
                <section className="solution-section project-container-narrow" style={{ marginTop: 'var(--space-9)' }}>
                    <h2 className="narrative-title">{study.solution.title}</h2>
                    <p className="narrative-body" style={{ marginBottom: 'var(--space-6)' }}>
                        {study.solution.description}
                    </p>
                    <div className="features-grid">
                        {study.solution.features.map((feature, i) => (
                            <div key={i} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}



            {/* --- 6. Tech Stack Section --- */}
            {study.techStack && (
                <section className="tech-stack-section">
                    <div className="project-container-narrow">
                        <h2 className="narrative-title">Technology Stack</h2>
                        <div className="tech-grid">
                            {study.techStack.tools.map((tool, index) => {
                                const IconComponent = {
                                    Layout, Palette, Zap, Play
                                }[tool.icon] || Layers;

                                return (
                                    <div key={index} className="tech-card">
                                        <div className="tech-icon-wrapper">
                                            <IconComponent size={24} />
                                        </div>
                                        <span className="tech-name">{tool.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="tech-description">{study.techStack.description}</p>
                    </div>
                </section>
            )}

            {/* --- 7. Technical Challenges & CTA --- */}
            {study.technical && study.technical.challenges && (
                <section className="challenges-section">
                    <div className="project-container-narrow">
                        <h2 className="narrative-title">Technical Challenges</h2>
                        <div className="challenges-grid">
                            {study.technical.challenges.map((challenge, index) => (
                                <div key={index} className="challenge-card">
                                    <div className="challenge-header">
                                        <div className="challenge-icon">
                                            <Zap size={20} />
                                        </div>
                                        <h3>{challenge.title}</h3>
                                    </div>
                                    <div className="challenge-content">
                                        <div className="challenge-part">
                                            <span className="challenge-label">Problem</span>
                                            <p>{challenge.problem}</p>
                                        </div>
                                        <div className="challenge-part">
                                            <span className="challenge-label solution">Solution</span>
                                            <p>{challenge.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="cta-wrapper">
                            <Button
                                href="https://soulwave.webflow.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                icon={ExternalLink}
                                className="cta-button" // Optional extra class if needed for specific overrides
                            >
                                View Live Site
                            </Button>
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project (Standardized) */}
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
        </div>
    );
};

export default BrandingPage;
