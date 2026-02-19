// src/data/services.js

export const services = [
  {
    category: "UI/UX Design", // Changed from generic "Design"
    icon: "PenTool", // Suggesting 'PenTool' or keeping 'Palette'
    color: "from-primary/20 to-primary/5",
    glowColor: "hsl(var(--primary) / 0.2)",
    items: [
      { name: "Interaction Design", icon: "Layout", description: "User-centered flows & prototypes" },
      { name: "Visual Interface", icon: "Layers", description: "High-fidelity UI for web & mobile" },
      { name: "User Research", icon: "Search", description: "Usability testing & data insights" } // Matches Canon/ASML needs
    ]
  },
  {
    category: "Frontend Engineering", // Changed from "Development" to sound more senior
    icon: "Code",
    color: "from-accent/20 to-accent/5",
    glowColor: "hsl(var(--accent) / 0.2)",
    items: [
      { name: "Modern Stack", icon: "Cpu", description: "React, Next.js, & TypeScript" }, // Added specific tech from CV
      { name: "Creative Coding", icon: "Sparkles", description: "GSAP animations & 3D interactions" },
      { name: "Performance", icon: "Zap", description: "Fast, scalable application architecture" }
    ]
  },
  {
    category: "Design Systems", // REPLACED "Branding" entirely
    icon: "Grid", // Suggesting 'Grid' or 'Box'
    color: "from-primary/20 to-accent/5",
    glowColor: "hsl(var(--primary) / 0.15)",
    items: [
      { name: "Component Libraries", icon: "Box", description: "Scalable Atomic Design systems" }, // Matches your CV skill
      { name: "Developer Handoff", icon: "GitMerge", description: "Bridging the gap: Figma to Code" }, // Your "Hybrid" superpower
      { name: "Accessibility (A11y)", icon: "Eye", description: "Inclusive, WCAG-compliant UI" } // Crucial for big tech companies
    ]
  }
];

