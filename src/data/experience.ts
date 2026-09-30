import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'bawsala',
    kind: 'role',
    position: 'Bawsala: Insurance Claims Management Platform',
    company: 'Team Project',
    location: 'Remote',
    startDate: '2026',
    endDate: 'Present',
    current: true,
    summary:
      'Working as a Front-End Developer on a SaaS platform for managing insurance claims. Building the web dashboard using React.js and TypeScript, including claim management, field adjuster assignment, user management, and integration with backend data through APIs.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'REST APIs'],
  },
  {
    id: 'rana-store',
    kind: 'freelance',
    position: 'Rana-Store: E-Commerce Website',
    company: 'Freelance / Client Project',
    location: 'Remote',
    startDate: '2025',
    endDate: '2026',
    current: false,
    summary:
      'Developed a responsive e-commerce website for a client using HTML5, JavaScript, and Tailwind CSS. Integrated the frontend with backend services and Supabase to display dynamic product data, and troubleshot data integration issues to ensure a smooth user experience.',
    tech: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Supabase', 'API Integration'],
  },
  {
    id: 'codenest',
    kind: 'role',
    position: 'CodeNest: E-Commerce Dashboard',
    company: 'Team Project',
    location: 'Remote',
    startDate: '2025',
    endDate: '2026',
    current: false,
    summary:
      'Worked as a Front-End Developer on an e-commerce dashboard, building responsive interfaces and interactive dashboard pages. Collaborated with the team to implement frontend features and used Git/GitHub for version control and project collaboration.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
  },
  {
    id: 'full-shop',
    kind: 'personal',
    position: 'Full Shop: E-Commerce Web Application',
    company: 'Personal Project',
    location: 'Remote',
    startDate: '2025',
    endDate: '2026',
    current: false,
    summary:
      'Built a responsive e-commerce application using React.js and Tailwind CSS. Implemented reusable components, product browsing, shopping cart, and wishlist functionality while focusing on responsive design and a clean user experience.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'frontend-learning',
    kind: 'learning',
    position: 'Frontend Development & Advanced React',
    company: 'Self-directed',
    location: 'Remote',
    startDate: '2026',
    endDate: 'Present',
    current: true,
    summary:
      'Currently deepening my knowledge of React.js and TypeScript, with a focus on scalable component architecture, state management with Redux, API integration, and building maintainable frontend applications.',
    tech: ['TypeScript', 'React.js', 'Redux', 'Frontend Architecture', 'API Integration'],
  },
]
