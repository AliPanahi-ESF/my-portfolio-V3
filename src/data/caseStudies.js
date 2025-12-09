// src/data/caseStudies.js

// 1. ASML Images
import projectImage1 from '../assets/images/asml.jpg';
// NOTE: Ensure these files exist in your assets/images folder!
import ASMLaffinityImage2 from '../assets/images/ASMlaffinityMap.png';
import layoutDesign from '../assets/images/layoutDesign.png';

// 2. Edorado Image
import edoradoImage from '../assets/images/Project Brief.jpg'; 

export const caseStudies = {
  
  // --- PROJECT 1: ASML ---
  "asml-design-system": {
    title: "Architecting a Scalable UI System for ASML Engineering",
    category: "Internal Tooling / Design Systems",
    image: projectImage1, 
    
    // No 'layout' property, so it uses the default (Hero Image) layout

    executiveSummary: {
      goal: "Architect a holistic, scalable, and high-performance solution that would serve as the foundation for all future internal engineering tooling.",
      role: "UX/UI Designer & Systems Architect (Graduation Internship)",
      skills: ["Design System Architecture", "Advanced IA", "Stakeholder Management", "Problem-Framing", "Strategic Communication", "Fluid Interaction Design", "Technical Documentation"],
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
      // Using the imports from the top of the file
      images: [ projectImage1, ASMLaffinityImage2, layoutDesign ] 
    },
    
    outcome: {
      title: "The Outcome & Business Impact",
      metrics: [
        { label: "Inconsistencies", value: "↓ 40%", description: "Measured across all tools adopting the new system." },
        { label: "Adoption", value: "5+", description: "The shell and system were adopted as the new standard for five major internal tools." },
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

  // --- PROJECT 2: EDORADO ---
  "edorado": {
    title: "Electric Boat User Interface",
    category: "Marine Tech",
    image: edoradoImage,
    
    // THIS IS IMPORTANT: Keeps the 'Showcase' layout you wanted for this project
    layout: 'showcase',
    
    links: {
      demo: "https://youtu.be/xdAH9EEHEo0",
      figma: "https://www.figma.com/design/aoytWMO1rO2tnA5SfIpUMG/Edorado-Dashboard-UI?node-id=13-11&t=7wGQXWcOU7f6nirF-1"
    },

    executiveSummary: {
      goal: "Transform a fragmented marine interface into a unified, accessible system that reduces pilot confusion and improves navigation safety.",
      role: "Lead Product Designer",
      skills: ["UX Research", "Prototyping", "Design Systems", "User Testing", "Marine UI"],
      outcome: "Improved navigation efficiency and reduced pilot error rates significantly."
    },
    
    problem: {
      title: "The Problem",
      content: "Navigating complex marine systems was confusing and error-prone. The existing interface suffered from poor visibility in sunlight and inconsistent controls, which is a safety risk on open water.",
      painPoints: [
        "Complex navigation menus difficult to use in motion",
        "Poor screen visibility in direct sunlight",
        "Inconsistent controls across different modes",
        "Critical alerts were not prominent enough"
      ]
    },
    
    process: {
      title: "The Process",
      sections: [
        {
          subtitle: "Discovery & Field Studies",
          content: "We spent time on the water to understand the physical constraints of operating a boat at speed. Glare, motion, and distance from the screen were key factors.",
          insight: "Safety relies on clarity and touch targets must be large and high-contrast.",
          artifacts: ["User Interviews", "Field Studies", "Sunlight Visibility Tests"]
        },
        {
          subtitle: "Prototyping High-Contrast UI",
          content: "We developed a specific 'Day Mode' with high contrast and a 'Night Mode' to preserve night vision. The layout was simplified to put critical controls within easy reach.",
          insight: "Automatic mode switching based on ambient light was a key feature.",
          artifacts: ["High-fidelity prototypes", "Motion UI tests"]
        }
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "A high-contrast, touch-friendly interface designed specifically for the marine environment.",
      features: [
        { title: "Day/Night Modes", description: "Automatic adaptation to lighting conditions for optimal visibility." },
        { title: "Simplified Controls", description: "Key functions available in one tap, even in rough water." },
        { title: "Smart Alerts", description: "Context-aware notifications that don't block navigation." }
      ],
      images: [ edoradoImage ]
    },
    
    outcome: {
      title: "The Outcome",
      metrics: [
        { label: "Battery Efficiency", value: "↑ 30%", description: "Optimized power management UI" },
        { label: "User Errors", value: "↓ 15%", description: "Reduction in navigation mistakes" },
        { label: "Readability", value: "100%", description: "Passes sunlight visibility tests" }
      ],
      lessonsLearned: [
        { title: "Context is King", content: "Designing for a moving boat is completely different from a desk. Physical context drives UI decisions." }
      ]
    }
  }
};