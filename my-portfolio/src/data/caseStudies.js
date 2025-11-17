// src/data/caseStudies.js

// We'll use the same images from our projects.js for consistency
import projectImage1 from '../assets/images/asml.jpg';
import ASMLaffinityImage2 from '../assets/images/ASMlaffinityMap.png'
import layoutDesign from '../assets/images/layoutDesign.png'
// import projectImage2 from '../assets/images/project-2.jpg';

export const caseStudies = {
  
  "asml-design-system": {
    title: "Architecting a Scalable UI System for ASML Engineering",
    category: "Internal Tooling / Design Systems",
    image: projectImage1, // Placeholder image variable
    
    executiveSummary: {
      goal: "Architect a holistic, scalable, and high-performance solution that would serve as the foundation for all future internal engineering tooling.",
      role: "UX/UI Designer & Systems Architect (Graduation Internship)",
      skills: ["Design System Architecture", "Advanced Information Architecture (IA)", "Stakeholder Management", "Problem-Framing", "Strategic Communication", "Fluid Interaction Design", "Technical Documentation"],
      outcome: "The new 'application shell' and design system were adopted as the new standard, leading to a 40% reduction in front-end inconsistencies and measurably reduced task completion time."
    },
    
    problem: {
      title: "The Challenge: A Bottleneck to Scale",
      content: "The internal engineering tools had developed organically, creating significant operational drag. This fragmentation caused high cognitive load for operators (e.g., UIs with 10+ tabs), high technical debt for developers, and was a direct business bottleneck, making it slow and expensive to scale.",
      painPoints: [
        "UIs with 10+ navigational tabs",
        "High cognitive load due to inconsistent UIs",
        "Inefficient workflows with too many steps for simple tasks",
        "Poor error handling with no user guidance",
        "High technical debt and slow development cycles"
      ]
    },
    
    process: {
      title: "The Process: An Architecture-First Approach",
      sections: [
        {
          subtitle: "Empathize: Understanding the Users",
          content: "Before making any design decisions, it was crucial to understand the real challenges. Many existing UIs were designed without direct user input. I conducted 15+ interviews, observed real-world usage on-site, and analyzed interaction videos to uncover hidden inefficiencies.",
          insight: "These findings formed the foundation for all design decisions. By understanding how users interact with the tools, I was able to address real issues rather than assumptions.",
          artifacts: ["15+ user interviews", "On-site observation notes", "Affinity mapping", "Interaction video analysis", "Competitor analysis"]
        },
        {
          subtitle: "Define: Identifying the Real Problem",
          content: "Without clearly defining the core challenges, design efforts could lose focus. Analysis revealed core UX challenges like UI inconsistency, poor error handling, and inefficient workflows, which manifested as the '10-Tab Monster' UI.",
          insight: "My most significant shift was from 'problem-solving' to 'problem-framing.' The initial request was for 'UI consistency,' but my analysis revealed the real problem was a broken Information Architecture.",
          artifacts: ["User Personas", "Problem statements", "Analysis of current UI"]
        },
        {
          subtitle: "Ideate: Exploring Solutions",
          content: "A single solution might not work for every use case. I explored multiple approaches, including a modular UI design, improved navigation hierarchy, and a new error feedback system. The modular design was chosen for its consistency, reusability, and scalability.",
          insight: "The modular design approach was selected because it ensures consistency, allows engineers to reuse components, and scales efficiently.",
          artifacts: ["Modular UI concepts", "Navigation flowcharts", "Error feedback patterns", "Paper prototypes"]
        },
        {
          subtitle: "Prototype: Bringing the Design to Life",
          content: "A prototype allows users to interact with the design and provide feedback before full implementation. I delivered a final UI for a specific tool (ULS), a complete design system, and a Proof of Concept (PoC) using React and gRPC to decouple the UI from LabVIEW.",
          insight: "The PoC proved that decoupling the UI from LabVIEW was feasible, enabling a more flexible and modern front-end stack for the future.",
          artifacts: ["Figma mockups (Iteration 1 & 2)", "Clickable prototypes", "React Proof of Concept (PoC)"]
        },
        {
          subtitle: "Test: Validating the Design",
          content: "Operators and Engineers tested the prototype. Feedback confirmed the UI was easier to navigate, error messages were clearer, and the elements were more consistent. Developers appreciated the structured design system for handoff.",
          insight: "The testing phase confirmed that the design system improves usability, and operators completed tasks faster with fewer errors.",
          artifacts: ["Usability test feedback", "User feedback synthesis", "Validation reports"]
        }
      ]
    },
    
    solution: {
      title: "The Solution: An Architecture-First System",
      description: "Instead of cosmetic changes, the solution was a unified 'application shell' and a systemic design system. This standardized framework created a consistent, predictable, and modular structure for all tools.",
      features: [
        { title: "Modular Application Shell", description: "A standardized framework with a static header, persistent left navigation, and a global footer, liberating the main content panel." },
        { title: "Widget-Based Dashboard", description: "Replaced the '10-Tab Monster' by redesigning core functions as independent widgets (Instructions, Logs) on a single, customizable screen." },
        { title: "Fluid Layout Management", description: "A 'Flip Phone' concept using Material Design principles where modules intelligently reflow when one is expanded, scaling to large monitors." },
        { title: "'Drag-and-Drop' Design System", description: "A tokenized and componentized Figma system allowing engineers to mock up new, compliant tools in minutes by reusing pre-approved modules." }
      ],
      images: [ projectImage1, ASMLaffinityImage2,layoutDesign ] // Placeholder image variable
    },
    
    outcome: {
      title: "The Outcome & Business Impact",
      metrics: [
        { label: "Front-end Inconsistencies", value: "↓ 40%", description: "Measured across all tools adopting the new system." },
        { label: "System Adoption", value: "5+ Projects", description: "The shell and system were adopted as the new standard for five major internal tools." },
        { label: "Cognitive Load", value: "Reduced", description: "Measurably reduced task completion time by eliminating the '10-Tab Monster'." },
        { label: "Developer Velocity", value: "↑", description: "'Drag-and-drop' system drastically reduced design and development overhead." }
      ],
      lessonsLearned: [
        { title: "Problem-Framing > Problem-Solving", content: "The initial request was for 'UI consistency,' but the real problem was a broken Information Architecture. I learned to look past the surface-level request to diagnose the root systemic issue." },
        { title: "Sell the 'Why' to a Technical Audience", content: "Instead of 'prettier designs,' I presented a new architecture that solved their specific problems (like the '10-Tab Monster'), framing decisions in terms of business and developer value." },
        { title: "A Design System is a Product, Not Just a Kit", content: "A system is useless without clear rules. I learned to deliver comprehensive documentation and a 'drag-and-drop' framework that taught others how to use and extend the system." }
      ]
    },
  },

  "project-2": {
    // This is the placeholder for your 'Another Awesome Project' (Fintech)
    title: "Another Awesome Project",
    category: "Fintech",
    image: projectImage1, // Change this to projectImage2 when ready
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
  },

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
  },

};