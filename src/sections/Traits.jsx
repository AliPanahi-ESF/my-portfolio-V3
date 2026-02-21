import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Traits.css';
import { traits } from '../data/traits.js';
import { Sparkles, Code, Dumbbell, Heart, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Sparkles, Code, Dumbbell, Heart, Rocket };

function Traits() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const stackWrapperRef = useRef(null);
  const spotlightRef = useRef(null);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStackHovered, setIsStackHovered] = useState(false);

  // ─── Initial card state setup ──────────────────────────
  useEffect(() => {
    const cards = gsap.utils.toArray(cardsRef.current.children);

    // First card visible, rest stacked behind
    gsap.set(cards[0], { opacity: 1, autoAlpha: 1, z: 0, yPercent: 0, scale: 1, filter: 'blur(0px)' });
    gsap.set(cards.slice(1), {
      z: -100, scale: 0.85, yPercent: 15, opacity: 0, autoAlpha: 0,
      filter: 'blur(10px)', transformOrigin: '50% 100%',
    });

    // Entrance animation for the header
    const ctx = gsap.context(() => {
      gsap.from('.traits-header', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.traits-header', start: 'top 85%', once: true },
      });
      gsap.from('.traits-bio-item', {
        opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.traits-bio-item', start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── Animate to a specific card index ──────────────────
  const goToCard = useCallback((nextIndex) => {
    const cards = gsap.utils.toArray(cardsRef.current.children);
    if (nextIndex < 0 || nextIndex >= cards.length) return;
    if (isAnimatingRef.current) return;

    const prevIndex = currentIndexRef.current;
    if (nextIndex === prevIndex) return;

    isAnimatingRef.current = true;

    const outCard = cards[prevIndex];
    const inCard = cards[nextIndex];

    // Out: fly upward
    gsap.to(outCard, {
      yPercent: -120, rotationX: 10, scale: 0.95,
      opacity: 0, autoAlpha: 0,
      duration: 0.45, ease: 'power2.in',
      onComplete: () => { isAnimatingRef.current = false; },
    });

    // In: rise up from behind
    gsap.to(inCard, {
      z: 0, yPercent: 0, scale: 1,
      opacity: 1, autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 0.5, ease: 'power2.out',
    });

    // Reset skipped "previous" cards so going back works
    cards.forEach((card, i) => {
      if (i !== prevIndex && i !== nextIndex) {
        if (i < nextIndex) {
          // already passed — push up
          gsap.set(card, { yPercent: -120, opacity: 0, autoAlpha: 0, scale: 0.95, z: 0 });
        } else {
          // not yet shown — keep in back
          gsap.set(card, { z: -100, scale: 0.85, yPercent: 15, opacity: 0, autoAlpha: 0, filter: 'blur(10px)' });
        }
      }
    });

    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
  }, []);

  // ─── Wheel listener (passive:false so we can preventDefault) ───
  useEffect(() => {
    const el = stackWrapperRef.current;
    if (!el) return;

    let wheelTimeout = null;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          goToCard(currentIndexRef.current + 1);
        } else {
          goToCard(currentIndexRef.current - 1);
        }
      }, 30); // debounce fast trackpad swipes
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearTimeout(wheelTimeout);
    };
  }, [goToCard]);

  // ─── 3D Tilt + Spotlight ────────────────────────────────
  const handleStackMouseMove = (e) => {
    const el = stackWrapperRef.current;
    const spotlight = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(el, { rotateY: x * 10, rotateX: -y * 10, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });

    if (spotlight) {
      gsap.to(spotlight, {
        left: e.clientX - rect.left, top: e.clientY - rect.top,
        opacity: 1, duration: 0.2, overwrite: 'auto',
      });
    }
  };

  const handleStackMouseLeave = () => {
    const el = stackWrapperRef.current;
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
    if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.4 });
    setIsStackHovered(false);
  };

  return (
    <section id="traits" className="traits-section" ref={sectionRef}>
      <div className="traits-bg-orb-1"></div>
      <div className="traits-bg-orb-2"></div>

      <div className="traits-container">

        {/* LEFT: Text Content */}
        <div className="traits-text-col">
          <div className="traits-header">
            <h2 className="traits-title-main">My Traits</h2>
            <p className="traits-subtitle">Scroll on the card to explore</p>
          </div>

          <div className="traits-bio-item">
            <div className="traits-bio-icon-wrapper">
              <Heart className="traits-bio-icon" />
            </div>
            <p>
              Outside my desk work, I keep my <span className="text-highlight italic">creativity</span> and
              <span className="text-highlight italic"> discipline</span> sharp through the things I enjoy like playing football and reading books.
              I build with intention. I design with clarity. And I like creating things that feel good to use.
            </p>
          </div>

          {/* Card counter */}
          <div className="traits-counter">
            <button
              className="traits-counter-btn"
              onClick={() => goToCard(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Previous trait"
            >
              <ChevronUp size={16} />
            </button>
            <span className="traits-counter-label">
              {currentIndex + 1} <span className="traits-counter-sep">/</span> {traits.length}
            </span>
            <button
              className="traits-counter-btn"
              onClick={() => goToCard(currentIndex + 1)}
              disabled={currentIndex === traits.length - 1}
              aria-label="Next trait"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT: Card Stack */}
        <div
          className={`traits-stack-wrapper${isStackHovered ? ' is-hovered' : ''}`}
          ref={stackWrapperRef}
          onMouseMove={handleStackMouseMove}
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={handleStackMouseLeave}
          onClick={() => goToCard(currentIndex + 1 < traits.length ? currentIndex + 1 : 0)}
        >
          {/* Spotlight */}
          <div className="stack-spotlight" ref={spotlightRef} />

          {/* Hint tooltip via CSS ::before */}

          <div className="traits-carousel" ref={cardsRef}>
            {traits.map((trait, index) => {
              const IconComponent = iconMap[trait.icon];
              return (
                <div key={index} className="trait-slide">
                  <div className="trait-card">
                    <div className="trait-icon-wrapper" data-index={index}>
                      {IconComponent && <IconComponent className="trait-card-icon" data-index={index} />}
                    </div>
                    <h3 className="trait-title">{trait.title}</h3>
                    <p className="trait-description">{trait.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Traits;