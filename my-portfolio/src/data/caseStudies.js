// src/data/caseStudies.js

// We'll use the same images from our projects.js for consistency
import projectImage1 from '../assets/images/asml.jpg';
// import projectImage2 from '../assets/images/project-2.jpg';

export const caseStudies = {
  "healthtech-redesign": {
    title: "HealthTech Platform Redesign",
    category: "Healthcare",
    image: projectImage1,
    
    executiveSummary: {
      goal: "Transform a fragmented healthcare platform into a unified, accessible system that reduces patient confusion and improves care coordination.",
      role: "Lead Product Designer (UX Research, UI Design, Design Systems) & Frontend Architect (React, GSAP, Accessibility)",
      skills: ["UX Research", "Prototyping", "Design Systems", "React", "GSAP", "Web Accessibility", "User Testing"],
      outcome: "Reduced patient support tickets by 42% and improved task completion rates by 68% within 3 months of launch."
    },
    
    problem: {
      title: "The Problem",
      content: "Healthcare providers were losing patients due to a confusing, fragmented digital experience. The existing platform had grown organically over 5 years, resulting in inconsistent UI patterns, unclear navigation, and critical accessibility violations.",
      painPoints: [
        "67% of users abandoned appointment booking mid-process",
        "Average of 4.2 support calls per new patient onboarding",
        "Failed WCAG 2.1 AA compliance audit",
        "8 different design patterns for the same interactions"
      ]
    },
    
    process: {
      title: "The Process & Rationale",
      sections: [
        {
          subtitle: "Discovery: Uncovering the Real Issues",
          content: "Our initial assumption was that users needed more features. However, interviews revealed the opposite: they were overwhelmed and couldn't find basic functions.",
          insight: "Users don't need more—they need clarity.",
          artifacts: ["User interview synthesis", "Journey mapping", "Heatmap analysis"]
        },
        {
          subtitle: "Defining the Information Architecture",
          content: "Card sorting exercises revealed that our navigation structure didn't match users' mental models. Medical terminology that made sense to clinicians confused patients.",
          insight: "We restructured the IA around patient goals (\"Book appointment\", \"View results\") rather than medical departments.",
          artifacts: ["Card sorting results", "IA tree comparison", "Navigation prototype"]
        },
        {
          subtitle: "Design System Foundation",
          content: "To solve the consistency problem, I built a comprehensive design system from scratch. This was about creating reusable patterns that enforced accessibility and reduced cognitive load.",
          insight: "A strong design system turns good intentions into guaranteed outcomes.",
          artifacts: ["Component library", "Accessibility guidelines", "Figma prototype"]
        }
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "A streamlined, accessible platform built on a solid design system foundation.",
      features: [
        { title: "Simplified Booking Flow", description: "Reduced from 8 steps to 3, with clear progress indicators." },
        { title: "Unified Design System", description: "40+ accessible components ensuring consistency." },
        { title: "Smart Defaults", description: "Leveraging patient history to pre-fill forms and suggest actions." },
        { title: "WCAG 2.1 AA Compliance", description: "Full keyboard navigation and screen reader optimization." }
      ],
      images: [ projectImage1, projectImage1 ] // Add real images later
    },
    
    outcome: {
      title: "The Outcome & Impact",
      metrics: [
        { label: "Support Tickets", value: "↓ 42%", description: "Reduced from 850 to 493 monthly tickets" },
        { label: "Task Completion", value: "↑ 68%", description: "Appointment booking success rate" },
        { label: "Accessibility Score", value: "100%", description: "Lighthouse accessibility audit" },
        { label: "User Satisfaction", value: "4.8/5", description: "Post-launch NPS score" }
      ],
      lessonsLearned: [
        { title: "Start with constraints", content: "Building the design system first created healthy constraints that actually sped up the design process." },
        { title: "Accessibility isn't optional", content: "What I'd do differently: Involve users with disabilities from day one, not just during testing." },
      ]
    },
    
    // We are SKIPPING the 'technical' section for now as planned
  },
  
  "project-2": {
    // This is a placeholder. You can copy the structure from above
    // to fill out your second project's case study.
    title: "Another Awesome Project",
    category: "Fintech",
    image: projectImage1, 
    executiveSummary: {
      goal: "Placeholder goal.",
      role: "Placeholder role.",
      skills: ["React", "GSAP"],
      outcome: "Placeholder outcome."
    },
    problem: { title: "The Problem", content: "...", painPoints: [] },
    process: { title: "The Process", sections: [] },
    solution: { title: "The Solution", description: "...", features: [], images: [] },
    outcome: { title: "The Outcome", metrics: [], lessonsLearned: [] },
  }
};