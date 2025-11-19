# Ali Panahi | Creative Developer Portfolio

![Portfolio Banner](./public/og-image.png)

> An immersive, high-performance personal portfolio designed at the intersection of **User Experience**, **Mathematical Precision**, and **Creative Engineering**.

This project is not just a showcase of work, but a case study in itself—demonstrating advanced frontend techniques, complex GSAP choreographies, and a mobile-first architectural philosophy.

🔗 **Live Demo:** [Insert Your Netlify Link Here]

---

## ⚡️ Key Features

### 1. The "Architectural" Experience
* **Fibonacci Preloader:** A mathematical loading sequence that constructs a Golden Ratio spiral using SVG path animation and precise counting logic.
* **3D Background Environment:** Features a rotating Wireframe Octahedron (pure CSS 3D) and floating particle systems that react to route changes.
* **Math-Based HUD:** A background Fibonacci rendering engine that loops infinitely, reinforcing the "System Architect" persona.

### 2. Advanced Animations (GSAP)
* **Sticky Deck Logic:** Projects and Traits sections utilize `ScrollTrigger` to pin the viewport and stack cards with 3D depth, opacity filters, and scale shifts.
* **Smart Physics:** The animation logic adapts based on device capability—offering "Heavy/Premium" inertia on desktop and "Snappy/Linear" performance on mobile.
* **Interactive Reveal:** The About section features a hover-driven curtain reveal, swapping abstract hobby icons for the profile photo.

### 3. UX Engineering
* **Custom Cursor System:** A lagging magnetic cursor (Desktop only) with hover state detection and scroll progress tracking.
* **Scroll Management:** Implements manual scroll restoration and body-locking logic for the mobile menu to prevent "scroll bleeding."
* **Glassmorphism UI:** A custom CSS design system using backdrop filters, translucent gradients, and noise textures.

---

## 🛠 Tech Stack

| Category | Technology | Reason |
| :--- | :--- | :--- |
| **Core** | React 18 + Vite | Fast HMR and strict modular component architecture. |
| **Animation** | GSAP (GreenSock) | Industry standard for timeline management and ScrollTrigger. |
| **Routing** | React Router v6 | Client-side routing with scroll restoration logic. |
| **Styling** | CSS Modules / Variables | No frameworks (Tailwind). Pure, semantic, variable-driven CSS. |
| **Icons** | Lucide React | Lightweight, consistent SVG iconography. |
| **Physics** | Custom Hooks | `useMediaQuery`, `useMousePosition` for responsive logic. |

---

## 📂 Project Architecture

The codebase follows a strict **Feature-Folder** structure to keep logic decoupled.

```bash
src/
├── components/
│   ├── layout/          # Navbar, Footer, Preloader
│   └── shared/          # Reusable UI (ProjectCard, MagneticWrapper, Cursor)
├── data/                # Static content arrays (Projects, CaseStudies)
├── pages/               # Page-level logic (Home, ProjectPage)
├── sections/            # Huge home-page blocks (Hero, Traits, About)
├── styles/
│   ├── _reset.css       # CSS Reset
│   ├── _variables.css   # Design Tokens (Colors, Spacing, Fonts)
│   └── global.css       # Utility classes & Typography
└── App.jsx              # Main Entry & Route Definitions




🎨 Design System

The visual language is built on a custom Dark Slate & Electric Cyan theme.

    Primary: hsl(190, 95%, 55%) (Electric Cyan)

    Background: hsl(220, 20%, 8%) (Deep Slate)

    Typography:

        Display: 'Playfair Display' (Serif) – For grand statements.

        Body: 'Space Grotesk' (Sans) – For technical readability.