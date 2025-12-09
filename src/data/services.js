// src/data/services.js

export const services = [
  {
    category: "Design",
    icon: "Palette", // We'll map this string to an icon
    color: "from-primary/20 to-primary/5", // We will translate this to CSS
    glowColor: "hsl(var(--primary) / 0.2)",
    items: [
      { name: "Web Design", icon: "Layout", description: "Beautiful, user-centered interfaces" },
      { name: "Product Design", icon: "Layers", description: "End-to-end digital experiences" },
      { name: "Websites / Apps", icon: "Smartphone", description: "Responsive cross-platform design" }
    ]
  },
  {
    category: "Development",
    icon: "Code",
    color: "from-accent/20 to-accent/5",
    glowColor: "hsl(var(--accent) / 0.2)",
    items: [
      { name: "Frontend Development", icon: "Code", description: "React, GSAP, & Custom CSS" },
      { name: "Full-Stack Solutions", icon: "Layers", description: "Complete web applications" },
      { name: "Performance Optimization", icon: "Sparkles", description: "Fast, scalable architecture" }
    ]
  },
  {
    category: "Branding",
    icon: "Sparkles",
    color: "from-primary/20 to-accent/5",
    glowColor: "hsl(var(--primary) / 0.15)",
    items: [
      { name: "Visual Identity", icon: "Eye", description: "Cohesive brand systems" },
      { name: "Design Systems", icon: "Palette", description: "Scalable component libraries" },
      { name: "AI Integration", icon: "Bot", description: "AI-powered brand experiences" }
    ]
  }
];