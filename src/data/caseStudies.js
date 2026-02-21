// src/data/caseStudies.js

// 1. ASML Images
import mockUpASML from '../assets/images/MockupASML.webp';
// NOTE: Ensure these files exist in your assets/images folder!
import ASMLaffinityImage2 from '../assets/images/ASMlaffinityMap.png';
import layoutDesign from '../assets/images/layoutDesign.png';
import UserFlowASMl from '../assets/images/UserFlowASMl.png';
import ASMLmockup from '../assets/images/prototype.png';
import UIDemo from '../assets/videos/UIDemo.gif';
import DesignSystemDemo from '../assets/videos/DesignSystem.gif';
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
import bierensImage from '../assets/images/bierens/bierens-heroes.png';

export const caseStudies = {

  // --- PROJECT 1: ASML ---
  "asml-design-system": {
    title: "Modular UI Design & React POC for High-Tech Tooling",
    category: "Internal Tooling / Design Systems",
    image: mockUpASML,
    isConfidential: true,

    executiveSummary: {
      goal: "Redesign fragmented internal engineering tools into a scalable, modular UI system and validate it with a React Proof-of-Concept.",
      role: "UX/UI Designer & Front-End Developer",
      skills: [
        "Atomic Design Systems",
        "Jobs to Be Done (JTBD)",
        "Information Architecture",
        "React Prototyping"
      ],
      outcome: "The new framework was adopted as the standard for future tooling, reducing front-end inconsistencies by 40% across 5+ internal applications."
    },

    problem: {
      title: "The Challenge: The '10-Tab Monster'",
      content: "The existing internal tools were causing a significant operational bottleneck. Because they were developed in silos over time, operators were forced to navigate complex, inconsistent interfaces with massive cognitive load.",
      painPoints: [
        "High cognitive load for machine operators",
        "Environmental constraints: Operators wear thick gloves, making touchscreens inefficient and requiring optimized keyboard/mouse workflows",
        "Hidden errors and too many clicks for simple tasks",
        "High technical debt for developers",
        "Slow development cycles due to siloed code"
      ]
    },

    process: {
      title: "The Process: From Assumptions to Architecture",
      sections: [
        {
          subtitle: "1. Discovery & Problem Framing",
          content: "The initial brief was to 'make the UI consistent.' However, after conducting 15+ on-site interviews and analyzing interaction videos of operators, I realized the issue wasn't visual—it was structural.",
          insight: "My most significant shift was moving from 'problem-solving' to 'problem-framing.' The real issue was broken Information Architecture, not just outdated aesthetics.",
          artifacts: ["15+ Stakeholder Interviews", "On-site Observations", "Interaction Analysis"],
          image: ASMLaffinityImage2,
          zoom: true,
          imageCaption: "Affinity Map: Categorizing operator pain points from 15+ interviews"
        },
        {
          subtitle: "2. Architecting the Workflows",
          content: "Before touching pixels, I mapped out the complex workflows for both machine operators (sequence-based tasks) and engineers (troubleshooting). I moved away from a 'one-size-fits-all' screen and designed a modular framework.",
          insight: "Mapping the flows revealed that operators needed contextual error handling built directly into the UI, eliminating their reliance on external 'fishbone diagram' PDFs.",
          artifacts: ["User Journey Mapping", "Information Architecture", "Workflow Diagrams"],
          image: UserFlowASMl,
          zoom: true,
          imageCaption: "New User Journeys"
        },
        {
          subtitle: "3. Iterative Prototyping & Testing",
          content: "I developed three iterations of high-fidelity prototypes, running continuous feedback sessions with operators and engineers. We tested everything from the new 4-tier error system to how the UI accommodated dual-monitor setups.",
          insight: "Continuous testing ensured the UI actually worked in the physical environment, proving that collapsible panels and keyboard-first navigation were essential for operators wearing thick gloves.",
          artifacts: ["Wireframing", "High-Fidelity Prototyping", "Usability Testing"],
          images: [layoutDesign, ASMLmockup],
          video: UIDemo,
          zoom: true,
          imageCaption: "New User Journeys"
        },
        {
          subtitle: "4. Systematizing the UI (Atomic Design)",
          content: "To ensure my designs could scale across the entire company, I built a comprehensive, tokenized design system in Figma based on Atomic Design principles.",
          insight: "A design system is useless without rules. By creating a 'drag-and-drop' component library with clear guidelines, I empowered engineers to mock up compliant tools in minutes.",
          artifacts: ["Atomic Design System", "Figma Tokens", "Developer Documentation"],
          video: DesignSystemDemo,
          zoom: true,
          imageCaption: "Design System Demo"
        },
        {
          subtitle: "5. Validating with Code (The POC)",
          content: "To prove this new architecture was technically feasible, I used the ULS Tool as a pilot. I built a functional Proof of Concept (PoC) using React and gRPC to decouple the UI from legacy systems.",
          insight: "Building the React POC successfully proved we could decouple the UI from LabVIEW, paving the way for a much faster, modern front-end stack.",
          artifacts: ["React Proof-of-Concept", "Component Feasibility Testing", "LabVIEW Decoupling"]
        }
      ]
    },

    solution: {
      title: "Lessons Learned & Reflections",
      description: "Designing for a highly technical, corporate environment taught me that enterprise UX is just as much about stakeholder communication and systems thinking as it is about pixels.",
      features: [
        { title: "Problem-Framing > Problem-Solving", 
          description: "The initial brief was for 'UI consistency,' but the root problem was broken Information Architecture. I learned to diagnose systemic issues before ever touching a canvas." },
        { title: "Selling the 'Why' to Engineers",
          description: "To gain technical buy-in, I learned to frame my design decisions in terms of developer velocity, technical constraints, and business value rather than just aesthetics."},
        { title: "A Design System is a Product",
         description: "A component library is useless without rules. I learned that delivering clear, technical documentation is just as important as the UI itself to ensure actual adoption." },
        { title: "Navigating Enterprise Complexity",
          description: "Engaging with 15+ operators and engineers taught me how to ask the right questions and translate highly technical constraints into clear, actionable design solutions." },
        ],

    },

    outcome: {
      title: "The Outcome & Business Impact",
      metrics: [
        { label: "UI Inconsistencies", value: "↓ 40%", description: "Measured across the platform after adopting the new system." },
        { label: "Tools Unified", value: "5+", description: "The framework was adopted as the new standard for five major internal tools." },
        { label: "Cognitive Load", value: "Reduced", description: "Measurably reduced task completion times for machine operators." },
        { label: "Developer Velocity", value: "↑", description: "Developers can now build new tools faster using the standardized React library." }
      ],
      lessonsLearned: [
        { title: "Problem-Framing > Problem-Solving", content: "The initial request was for 'UI consistency,' but the real problem was broken Information Architecture. I learned to diagnose root systemic issues first." },
        { title: "Sell the 'Why' to Engineers", content: "I presented a new architecture that solved their specific problems, framing design decisions in terms of developer velocity and technical limitations." },
        { title: "A System is a Product", content: "A system is useless without clear rules. I delivered comprehensive documentation and a framework that taught others how to use and extend the system." }
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
   // --- PROJECT: BIERENS HEROES ---
  "bierens-heroes": {
    title: "Gamifying Legal Loyalty with AI-Generated Heroes",
    category: "Full Stack / AI Integration",
    image: bierensImage,

    heroImageStyle: {
      width: "100%",
      height: "auto",
      marginTop: 0,
      objectFit: "cover", // Ensure it fills width
      display: "block" // Remove inline gap
    },
    heroWrapperStyle: {
      height: "auto", // Let content dictate height
      minHeight: "unset", // Override CSS constraints
      backgroundColor: "transparent"
    },

    showHeroGenerator: false,

    media: {
      youtube: "https://www.youtube.com/embed/dBR4YNoygCA",
    },

    executiveSummary: {
      goal: "Increase client engagement and community loyalty for Bierens Law Firm through a gamified platform.",
      role: "Product Designer & Frontend Developer (Group Project)",
      skills: ["React", "OpenAI API", "UX Research", "Prototyping"],
      outcome: "Delivered a functional React landing page with integrated AI avatar generation tailored to the 'Bierens Hero' brand identity."
    },

    problem: {
      title: "The Challenge: Making Law Engaging",
      content: "Legal services are often perceived as distant and purely transactional. Bierens wanted to build a stronger community connection ('Bierens Heroes') but lacked a digital mechanism to make clients feel like part of the team.",
      painPoints: [
        "Low ongoing engagement with clients",
        "Lack of visual identity for the community program",
        "No interactive way to onboard new 'Heroes'"
      ]
    },

    process: {
      title: "The Process: AI-Powered Engagement",
      sections: [
        {
          subtitle: "Concept & User Flow",
          content: "I focused on designing a user flow that felt rewarding. The core concept was to turn the onboarding process into a 'Hero Origin Story', where users don't just sign up—they get 'suited up' via AI.",
          insight: "Gamification increases completion rates for sign-up forms."
        },
        {
          subtitle: "AI Integration (ChatGPT API)",
          content: "I integrated the OpenAI API to generate custom hero avatars. The prompts were carefully tuned to ensure the output style matched the Bieren brand guidelines (dark, bold, heroic).",
          insight: "Prompt engineering was critical to maintain visual consistency."
        }
      ]
    },

    solution: {
      title: "The Solution: A Bieren Hero Generator",
      description: "A React-based landing page where users upload their photo and receive a stylized 'Hero' version of themselves to share within the community.",
      features: [
        { title: "AI Avatar Generation", description: "Seamless integration with OpenAI to transform user photos." },
        { title: "Community Dashboard", description: "A space to view other heroes and connect." }
      ],
      // Removed duplicate images array
    },

    outcome: {
      title: "The Outcome",
      metrics: [
        { label: "Engagement", value: "High", description: "Positive feedback on the gamified experience." },
        { label: "Tech Stack", value: "React+AI", description: "Successful integration of GenAI." }
      ],
      lessonsLearned: [
        { title: "AI Latency", content: "Managing user expectations during the image generation wait time was a key UX challenge." }
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