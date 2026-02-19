import projectImage1 from '../assets/images/asml.jpg';
import edoradoImage from '../assets/images/Project Brief.jpg';
import soulWaveImage from '../assets/images/soulwave/gallery-5.png';
import bierensImage from '../assets/images/bierens-heroes.png';

export const projects = [
  {
    id: 'asml-design-system',
    badge: ['UX / UI', 'Design System'],
    title: 'Modular UI Design & React POC for High-Tech Tooling',
    image: projectImage1,
    highlights: ["Research: Mapped user flows to strict EU factory UI standards.", "Validation: Built a React POC to test interactive, collapsible modules.", "Architecture: Designed a scalable UI library for data-heavy environments."],
    stats: [
      {
        label: 'Front-end Inconsistencies',
        value: '40%',
        direction: 'down'
      },
      {
        label: 'Tools Unified',
        value: '5+',
        direction: 'neutral'
      },
    ],
  },
  {
    id: 'bierens-heroes',
    badge: 'UX / UI / React / AI',
    title: 'Gamifying Loyalty with AI-Generated Heroes',
    image: bierensImage,
    highlights: ["Gamification Strategy", "AI Avatar Generation", "React Application Logic"],
    description: 'A React-based loyalty platform for Bierens Law Firm featuring AI-generated avatars.',
    stats: [
      { label: 'User Engagement', value: '+25%', direction: 'up' },
      { label: 'Community', value: 'Growing', direction: 'up' },
    ],
  },
  {
    id: 'edorado',
    badge: ['UX / UI', 'React'],
    title: 'Improving the UI of Edorado8s',
    image: edoradoImage,
    highlights: ["Touch-First Interface Design", "High Contrast for Visibility", "Critical Safety Alerts"],
    description: 'A high-contrast, touch-friendly interface designed for safety and clarity on the open water.',
    stats: [
      { label: 'Battery Efficiency', value: '30%', direction: 'up' },
      { label: 'User Errors', value: '15%', direction: 'down' },
    ],
  },
  {
    id: 'branding-case-study',
    badge: 'Brand Identity / Web Design',
    title: 'Crafting a Digital-First Brand Identity for SoulWave',
    image: soulWaveImage,
    highlights: ["Holistic Brand Strategy", "Webflow Development", "Responsive Identity System"],
    description: 'A complete brand journey from strategy to Webflow implementation.',
    stats: [
      { label: 'Engagement', value: '+40%', direction: 'up' },
      { label: 'Signups', value: '3x', direction: 'up' },
    ],
  }
];