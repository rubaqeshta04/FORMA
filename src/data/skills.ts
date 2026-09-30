import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'The day-to-day stack for building interfaces.',
    icon: 'palette',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Enough server-side to ship a full feature end to end.',
    icon: 'server',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Authentication'],
  },
  {
    id: 'tooling',
    title: 'Tools',
    description: 'The workflow around the code.',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'Vite', 'npm', 'ESLint', 'Prettier', 'Playwright'],
  },
  {
    id: 'design',
    title: 'Design & UX',
    description: 'Working with designers, not guessing at intent.',
    icon: 'layers',
    items: ['Figma', 'Design Systems', 'Accessibility (WCAG)', 'Responsive Design'],
  },
  {
    id: 'platform',
    title: 'Platform',
    description: 'Shipping it and keeping it observable.',
    icon: 'rocket',
    items: ['CI/CD', 'Docker', 'Vercel', 'Cloudflare Pages', 'Testing'],
  },
  {
    id: 'practices',
    title: 'Practices',
    description: 'How the work gets done.',
    icon: 'component',
    items: ['Code Review', 'Technical Writing', 'Mentoring', 'Agile / Scrum'],
  },
]
