import { useEffect, useRef, useState } from 'react';
import './Services.css';
import { services } from '../data/services.js';
import {
  Palette, Code, Sparkles, Layout, Smartphone, Bot, Eye, Layers,
  PenTool, Search, Cpu, Zap, Grid, Box, GitMerge
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Palette, Code, Sparkles, Layout, Smartphone, Bot, Eye, Layers,
  PenTool, Search, Cpu, Zap, Grid, Box, GitMerge
};

function Services() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // This useEffect handles all the "load-in" animations
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Animate the Header
      gsap.from('.services-header', {
        opacity: 0, y: 20, duration: 0.6,
        scrollTrigger: { trigger: '.services-header', start: 'top 85%', once: true }
      });

      // Animate the 3 Cards
      gsap.from('.service-card', {
        opacity: 0, y: 30, duration: 0.5, stagger: 0.1,

        // THIS IS THE FIX:
        // This tells GSAP to remove its inline transform style
        // after the animation is done, so your CSS :hover can work.
        clearProps: "transform",

        scrollTrigger: { trigger: '.services-grid', start: 'top 80%', once: true }
      });

      // Animate the Bottom CTA
      gsap.from('.services-footer', {
        opacity: 0, duration: 0.6, delay: 0.4,
        scrollTrigger: { trigger: '.services-footer', start: 'top 90%', once: true }
      });

      // Animate the "Let's talk" arrow
      gsap.to('.services-contact-link-arrow', {
        x: 4, duration: 0.75, repeat: -1,
        yoyo: true, ease: 'easeInOut'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // This useEffect (for hovers) remains the same
  useEffect(() => {
    // Animate the icon
    gsap.to(`.service-item-icon[data-index="${hoveredIndex}"]`, {
      scale: 1.2,
      rotate: 12,
      duration: 1,
      ease: 'elastic.out(1, 0.75)'
    });
    // Animate the underline
    gsap.to(`.service-item-underline[data-index="${hoveredIndex}"]`, {
      scaleX: 1,
      duration: 1,
      ease: 'power3.out'
    });

    // Cleanup: Animate back
    return () => {
      gsap.to(`.service-item-icon:not([data-index="${hoveredIndex}"])`, {
        scale: 1,
        rotate: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
      gsap.to(`.service-item-underline:not([data-index="${hoveredIndex}"])`, {
        scaleX: 0,
        duration: 0.2,
        ease: 'power3.out'
      });
    };
  }, [hoveredIndex]);

  return (
    <section id="services" className="services-section" ref={sectionRef}>

      <div className="services-container">

        {/* 1. THE HEADER */}
        <div className="services-header">
          <div className="glass-badge">
            <Sparkles className="glass-badge-icon" />
            <span>What I Do</span>
          </div>
          <h2 className="services-title">
            Things I Can{" "}
            <span className="text-gradient">
              Help You With
            </span>
          </h2>
          <p className="services-subtitle">
            From concept to launch, I bring ideas to life with design and code
          </p>
        </div>

        {/* 2. THE FULL 3-CARD GRID */}
        <div className="services-grid">
          {services.map((service, categoryIndex) => {
            const CategoryIcon = iconMap[service.icon];

            return (
              <div key={service.category} className="service-card">

                <div className="service-card-content">
                  <div className="service-card-header">
                    <div className="service-card-icon-bg">
                      <CategoryIcon className="service-card-icon" />
                    </div>
                    <h3 className="service-card-category">{service.category}</h3>
                  </div>

                  <div className="service-item-list">
                    {service.items.map((item, itemIndex) => {
                      const ItemIcon = iconMap[item.icon];
                      const globalIndex = `${categoryIndex}-${itemIndex}`;

                      return (
                        <div
                          key={item.name}
                          className="service-item"
                          onMouseEnter={() => setHoveredIndex(globalIndex)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <ItemIcon
                            className="service-item-icon"
                            data-index={globalIndex}
                          />
                          <div className="service-item-info">
                            <h4 className="service-item-name">{item.name}</h4>
                            <p className="service-item-description">{item.description}</p>
                          </div>
                          <div
                            className="service-item-underline"
                            data-index={globalIndex}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. THE FOOTER */}
        <div className="services-footer">
          <p>
            Ready to bring your vision to life?{" "}
            <a href="#contact" className="services-contact-link">
              Let's talk
              <span className="services-contact-link-arrow">→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;