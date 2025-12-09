import projectImage1 from '../assets/images/asml.jpg';
import edoradoImage from '../assets/images/Project Brief.jpg';

export const projects = [
  {
id: 'asml-design-system', // <-- This ID MUST match your new case study key
    badge: 'Internal Tooling / Design Systems',
    title: 'Architecting a Scalable UI System for ASML',
    image: projectImage1, // <-- Use the new image
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
    // --- END OF UPDATE ---

    
  },{
    // --- PROJECT 2: EDORADO ---
    id: 'edorado', // Matches caseStudies.js key
    badge: 'Marine Tech',
    title: 'Improving  the UI of Edorado8s',
    image: edoradoImage,
    description: 'A high-contrast, touch-friendly interface designed for safety and clarity on the open water.',
    stats: [
      { label: 'Battery Efficiency', value: '30%', direction: 'up' },
      { label: 'User Errors', value: '15%', direction: 'down' },
    ],
  },

];