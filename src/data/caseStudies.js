// src/data/caseStudies.js

// 1. ASML Images
import projectImage1 from '../assets/images/asml.jpg';
// NOTE: Ensure these files exist in your assets/images folder!
import ASMLaffinityImage2 from '../assets/images/ASMlaffinityMap.png';
import layoutDesign from '../assets/images/layoutDesign.png';

// 2. Edorado Image

import edoradoImage from '../assets/images/Project Brief.jpg';

// SoulWave Assets
import swTypography from '../assets/images/soulwave/typography-spec.png';
import swHoodie from '../assets/images/soulwave/billboard-hoodie.png';
import swTote from '../assets/images/soulwave/tote-bag.png';
import swFashionSplit from '../assets/images/soulwave/fashion-split.png';
import swHorse from '../assets/images/soulwave/editorial-horse.jpg';
import swBannerBg from '../assets/images/soulwave/banner-beige.png';
// New Gallery Images
import gallery1 from '../assets/images/soulwave/gallery-1.png';
import gallery2 from '../assets/images/soulwave/gallery-2.jpg';
import gallery3 from '../assets/images/soulwave/gallery-3.jpg';
import gallery4 from '../assets/images/soulwave/gallery-4.jpg';
import gallery5 from '../assets/images/soulwave/gallery-5.png';
import gallery6 from '../assets/images/soulwave/gallery-6.png';
import gallery7 from '../assets/images/soulwave/gallery-7.png';
import gallery8 from '../assets/images/soulwave/gallery-8.jpg';

export const caseStudies = {

  // --- PROJECT 1: ASML ---
  "asml-design-system": {
    title: "Architecting a Scalable UI System for ASML Engineering",
    category: "Internal Tooling / Design Systems",
    image: projectImage1,
    isConfidential: true,

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
      images: [projectImage1, ASMLaffinityImage2, layoutDesign]
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
      images: [edoradoImage]
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
  },

  // --- PROJECT 3: BRANDING CASE STUDY ---
  "branding-case-study": {
    title: "Crafting a Digital-First Brand Identity for SoulWave",
    subtitle: "A complete brand journey from strategy to Webflow implementation",
    category: "Branding & Web Design",
    darkTheme: true,
    darkTheme: true,
    layout: 'branding', // Custom layout flag

    intro: {
      text: "Soul Wave is the debut fashion line by Sahel. The project translates her curated online aesthetic into a tangible brand. We created a digital flagship that feels less like a typical store and more like an immersive extension of her social media world.",
      socialMock: "Social Touchpoint",
      socialLink: "https://www.instagram.com/sahel_musiic/"
    },

    executiveSummary: {
      goal: "Create a cohesive digital brand identity that captures SoulWave's essence—a wellness platform that harmonizes technology with mindfulness.",
      role: "Brand Designer (Strategy, Visual Identity, UI/UX) & Webflow Developer",
      skills: ["Brand Strategy", "Logo Design", "UI/UX Design", "Webflow Development", "Motion Design", "Typography", "Color Theory", "Design Systems"],
      outcome: "Launched a fully responsive Webflow site with 40% higher engagement and 3x increase in newsletter signups within the first month."
    },

    heroShowcase: {
      image: swHorse,
      alt: "SoulWave brand identity showcase"
    },

    bannerImage: swBannerBg,

    process: {
      title: "The Process: An Architecture-First Approach",
      sections: [
        {
          subtitle: "Empathize: Understanding the Fan Psychology",
          content: "Before designing a layout, it was crucial to deconstruct the \"fan\" mindset in 2025. Standard e-commerce research shows that fans do not visit artist stores just to buy products; they visit to buy into an identity. I analyzed the \"Soul Wave\" style guide and found a core tension between \"Grounded/Earth\" elements and \"Electric/Future\" elements.",
          insight: "The target audience isn't looking for a catalogue; they are looking for a \"frequency.\" The experience needs to feel like a digital extension of the artist's mind, not a Shopify template. The design must balance \"Slow Design\" (Soul) with \"High-Energy Interactivity\" (Wave)."
        },
        {
          subtitle: "Define: Identifying the Real Problem",
          content: "The visual assets provided a unique challenge: How to reconcile soft, organic sand tones with aggressive electric cyan. Most web templates force a choice between \"Clean Minimalist\" or \"Cyberpunk,\" but \"Soul Wave\" requires both. The real problem was not just \"selling clothes,\" but creating a \"Digital Naturalism\" aesthetic that accommodates both distinct styles without clashing.",
          insight: "The solution was to reframe the landing page from a \"Store\" to a \"Digital Manifesto.\" The interaction model had to shift from \"Click-to-Buy\" to \"Scroll-to-Discover\" (Scrollytelling), where the narrative drives the conversion."
        },
        {
          subtitle: "Ideate: Exploring Solutions",
          content: "I explored various layout strategies to disrupt the standard grid. A standard grid felt too rigid for the \"Soul\" aspect and too static for the \"Wave\" aspect. I selected a Broken Grid / Asymmetrical Layout approach. This creates visual tension and allows for \"organic\" spacing that mimics nature, while \"electric\" interactive elements (like the cyan cursor) cut through the noise.",
          insight: "The \"Broken Grid\" was chosen because it forces the user to slow down and explore the content (images and manifesto) rather than quickly scanning rows of products, increasing emotional investment before the sale."
        },
        {
          subtitle: "Prototype: Bringing the Design to Life",
          content: "To make the \"Soul Wave\" concept tangible, I defined specific motion physics. A static page could not convey \"Wave.\" I developed a motion specification relying on WebGL for fluid effects. I decoupled the visual frontend (Headless) from the commerce backend (Shopify/Fourthwall) to allow for high-fidelity animations like \"Liquid Glass\" distortion on hover.",
          insight: "The \"Motion Spec\" proved that we could maintain the \"Soul\" (using grainy, slow-breathing backgrounds) while introducing the \"Wave\" (using fast, reactive liquid cursor trails) without compromising site performance."
        },
        {
          subtitle: "Test: Validating the Strategy",
          content: "Research into \"Drop Culture\" validation confirms that scarcity drives higher conversion rates for artist merch. The blueprint incorporates a \"Velvet Rope\" pre-launch strategy (Password Page) rather than an always-open store.",
          insight: "The \"Waitlist Funnel\" strategy validates demand before the store opens. By collecting emails via a password-protected \"portal\" page, we generate the FOMO (Fear Of Missing Out) necessary for a sell-out launch."
        }
      ]
    },

    solution: {
      title: "The Solution: Soul Wave Digital Flagship",
      description: "Instead of a standard template, the solution is a bespoke \"Digital Naturalism\" System that merges organic aesthetics with high-performance commerce.",
      features: [
        {
          title: "The \"Rooted Ether\" Design System",
          description: "Palette: A strategic duality of Earth Tones (#F9F6F2, #D4C5B4) for the \"Soul\" foundation, disrupted by Electric Cyan (#8FE6F3) for actionable \"Wave\" elements. Typography: A \"Modern Editorial\" pairing of high-contrast Serifs (The Season) for emotive headlines vs. geometric Sans-Serifs (Space Grotesk) for technical UI."
        },
        {
          title: "Immersive Scrollytelling Architecture",
          description: "Hero Portal: A split-screen entry with a \"Grainy Breathing\" background texture and \"Ethereal Smoke\" text reveals, setting a moody, organic tone immediately. Broken Grid Layout: Asymmetrical content placement that defies standard e-commerce rows, using \"Liquid Glass\" distortion on images to reveal product details on hover."
        },
        {
          title: "Reactive Motion Identity",
          description: "Fluid Cursor: A generative cyan ink trail that follows the user's mouse, visualizing the \"Wave\" energy in real-time. Kinetic Marquee: An infinite scrolling text banner that reacts to scroll velocity—sprinting forward when the user scrolls fast, drifting slowly when they stop."
        },
        {
          title: "The \"Drop\" Commerce Engine",
          description: "Velvet Rope Mechanics: A dedicated pre-launch password page designed to capture data and build hype, transforming the store opening into a digital event rather than a standard retail update."
        }
      ]
    },

    // Gallery for Bento Grid (Now Full Size Stack)
    brandGallery: [
      { src: gallery1, alt: "SoulWave Gallery Image 1", category: "Brand" },
      { src: gallery2, alt: "SoulWave Gallery Image 2", category: "Apparel" },
      { src: gallery3, alt: "SoulWave Gallery Image 3", category: "Lifestyle" },
      { src: gallery4, alt: "SoulWave Gallery Image 4", category: "Product" },
      { src: gallery5, alt: "SoulWave Gallery Image 5", category: "Design" },
      { src: gallery6, alt: "SoulWave Gallery Image 6", category: "Detail" },
      { src: gallery7, alt: "SoulWave Gallery Image 7", category: "Palette" },
      { src: gallery8, alt: "SoulWave Gallery Image 8", category: "Mood" }
    ],

    techStack: {
      description: "Webflow was chosen for its visual development capabilities and native CMS, allowing the client to manage content independently. GSAP powers custom scroll animations that enhance the meditative brand experience.",
      tools: [
        { name: "Webflow", icon: "Layout" },
        { name: "Figma", icon: "Palette" },
        { name: "GSAP", icon: "Zap" },
        { name: "Lottie", icon: "Play" }
      ]
    },

    technical: {
      stack: [
        { name: "Webflow", icon: "Layout" },
        { name: "Figma", icon: "Palette" },
        { name: "GSAP", icon: "Zap" },
        { name: "Lottie", icon: "Play" }
      ],
      rationale: "Webflow was chosen for its visual development capabilities and native CMS, allowing the client to manage content independently. GSAP powers custom scroll animations that enhance the meditative brand experience.",
      challenges: [
        {
          title: "Complex Scroll Animations",
          problem: "The design called for parallax effects and reveal animations that Webflow's native interactions couldn't achieve.",
          solution: "Integrated GSAP via custom code embeds, creating a reusable animation library the client can extend."
        },
        {
          title: "Dynamic Color Theming",
          problem: "Different sections needed distinct moods while maintaining brand consistency.",
          solution: "Implemented CSS custom properties for section-specific color schemes with smooth transitions."
        }
      ],
      codeSnippet: `// GSAP Scroll-triggered reveal animation
gsap.registerPlugin(ScrollTrigger);

const revealSections = document.querySelectorAll('.reveal-section');

revealSections.forEach(section => {
  gsap.from(section.querySelectorAll('.reveal-item'), {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});`,
      links: {
        live: "https://soulwave-demo.webflow.io"
      }
    },

    outcomes: {
      metrics: [
        { label: "Engagement", value: "+40%", description: "Time on site increased from 1:45 to 2:27" },
        { label: "Newsletter Signups", value: "3x", description: "Grew from 50 to 150+ monthly" },
        { label: "Bounce Rate", value: "-35%", description: "Reduced from 62% to 40%" },
        { label: "Mobile Traffic", value: "+55%", description: "Now 65% of total visits" }
      ],
      lessonsLearned: [
        {
          title: "Brand before pixels",
          content: "Spending extra time on strategy prevented costly pivots during design. The brand attributes became a decision-making framework."
        },
        {
          title: "Animation restraint",
          content: "Early prototypes had too many animations. We learned that strategic motion creates more impact than constant movement."
        },
        {
          title: "Client education matters",
          content: "Building a simple Webflow tutorial video empowered the client to manage content, reducing ongoing support requests by 80%."
        }
      ]
    }
  }
};