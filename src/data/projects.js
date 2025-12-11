import projectImage1 from '../assets/images/asml.jpg';
import edoradoImage from '../assets/images/Project Brief.jpg';
import soulWaveImage from '../assets/images/soulwave/gallery-5.png';

export const projects = [
  {
    id: 'branding-case-study',
    badge: 'Brand Identity / Web Design',
    title: 'Crafting a Digital-First Brand Identity for SoulWave',
    image: soulWaveImage,
    description: 'A complete brand journey from strategy to Webflow implementation.',
    stats: [
      { label: 'Engagement', value: '+40%', direction: 'up' },
      { label: 'Signups', value: '3x', direction: 'up' },
    ],
  },
  {
    id: 'asml-design-system',
    badge: 'UX / UI / Design Systems',
    title: 'Architecting a Scalable UI System for ASML',
    image: projectImage1,
    stats: [
      {
        label: 'Front-end Inconsistencies',
        value: '40%',
        direction: 'down'
      },
      {
        label: 'System Adoption',
        value: '5+',
        direction: 'up'
      },
    ],
  },
  {
    id: 'edorado',
    badge: 'UX / UI / React',
    title: 'Improving the UI of Edorado8s',
    image: edoradoImage,
    description: 'A high-contrast, touch-friendly interface designed for safety and clarity on the open water.',
    stats: [
      { label: 'Battery Efficiency', value: '30%', direction: 'up' },
      { label: 'User Errors', value: '15%', direction: 'down' },
    ],
  }
];