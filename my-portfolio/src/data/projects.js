import projectImage1 from '../assets/images/asml.jpg';
// import projectImage2 from '../assets/images/project-2.jpg'; // Make sure you have your images

export const projects = [
  {
    id: 'healthtech-redesign',
    badge: 'Healthcare',
    title: 'HealthTech Platform Redesign',
    description:
      'A modern & intuitive healthcare platform for providers. A comprehensive solution that helps patients connect with healthcare services seamlessly.',
    image: projectImage1,
    
    // --- THIS IS THE UPDATED PART ---
    stats: [
      {
        label: 'Support Tickets',
        value: '42%',
        direction: 'down' // We use this instead of the arrow icon
      },
      {
        label: 'Task Completion',
        value: '68%',
        direction: 'up' // This is much cleaner
      },
    ],
    // --- END OF UPDATE ---

    testimonial: {
      name: 'Dr. Sarah Mitchell',
      role: 'HealthTech Director',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
  },
  {
    id: 'project-2',
    badge: 'Fintech',
    title: 'Another Awesome Project',
    description:
      'This is the description for your second project. It was very challenging but also very rewarding.',
    image: projectImage1, // Replace with projectImage2 later
    stats: [
      {
        label: 'User Engagement',
        value: '55%',
        direction: 'up'
      },
      {
        label: 'Conversion Rate',
        value: '12%',
        direction: 'down'
      },
    ],
    testimonial: {
      name: 'John Doe',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
  },
];