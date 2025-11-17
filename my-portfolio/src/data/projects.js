import projectImage1 from '../assets/images/asml.jpg';
// import projectImage2 from '../assets/images/project-2.jpg'; // Make sure you have your images

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

    testimonial: {
      name: 'Dr. Sarah Mitchell',
      role: 'HealthTech Director',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
  },

];