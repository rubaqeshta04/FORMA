import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Building responsive web interfaces using modern frontend technologies.',
    icon: 'code',
    points: ['React.js', 'JavaScript & TypeScript', 'HTML5 & CSS3'],
  },
  {
    id: 'react-applications',
    title: 'React Applications',
    description: 'Developing React applications with reusable components and organized code.',
    icon: 'component',
    points: ['Reusable components', 'Component-based architecture', 'Dynamic interfaces'],
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation',
    description: 'Turning designs and ideas into clean, functional web interfaces.',
    icon: 'palette',
    points: ['Figma to code', 'Responsive layouts', 'Interactive UI elements'],
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description:
      'Connecting frontend applications with backend services and working with dynamic data.',
    icon: 'server',
    points: ['REST APIs', 'API integration', 'Data fetching & handling'],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description:
      'Creating interfaces that work smoothly across different screen sizes and devices.',
    icon: 'smartphone',
    points: ['Mobile-friendly layouts', 'Responsive components', 'Cross-device testing'],
  },
  {
    id: 'dashboards-ecommerce',
    title: 'Dashboards & E-Commerce',
    description: 'Building practical interfaces for dashboards and e-commerce applications.',
    icon: 'monitor',
    points: ['Dashboard interfaces', 'E-commerce interfaces', 'User and data management'],
  },
]
