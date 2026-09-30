import type { Profile } from '@/types'

export const profile: Profile = {
  greeting: "Hi, I'm",
  heroDescription:
    'A frontend developer focused on building accessible, high-performance interfaces with React and TypeScript, while leaving codebases easier to work in than I found them.',

  heroCtas: [
    { label: 'View My Work', href: '#projects', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],

  about: {
    paragraphs: [
      "I'm a Front-End Developer who enjoys turning ideas into interfaces that people can actually use. I mainly work with React.js, TypeScript, JavaScript, and Tailwind CSS, and I've built several web applications, dashboards, and e-commerce projects while working with APIs, dynamic data, and Redux.",
      "I'm currently studying Computer Engineering and Intelligent Systems at Al Aqsa University, while gaining practical experience through real projects and team-based development. I enjoy solving frontend problems, learning new technologies, and continuously improving the way I build and structure web applications.",
    ],

    focus: [
      'Accessible, keyboard-first interfaces',
      'React + TypeScript architecture that scales',
      'Core Web Vitals and bundle budgets',
      'Design systems and component APIs',
      'Performance work on real devices',
      'Pragmatic testing and CI',
    ],

    principles: [
      {
        title: 'Readable over clever',
        description:
          'Code is read far more often than it is written. Clear names and obvious structure beat clever abstractions every time.',
        icon: 'file-text',
      },
      {
        title: 'Measure, do not guess',
        description:
          'Lighthouse, bundle analyser, real devices. Performance and accessibility claims should come from a measurement.',
        icon: 'activity',
      },
      {
        title: 'Small, reversible changes',
        description:
          'Ship in reviewable slices with clear boundaries, so a bad decision is cheap to undo.',
        icon: 'git-branch',
      },
      {
        title: 'Accessibility is not a phase',
        description:
          'Semantics, focus order and contrast are part of the feature, not a cleanup ticket before launch.',
        icon: 'shield',
      },
    ],
  },

  stats: [
    { label: 'Years Experience', value: '3+', hint: 'Building for the web' },
    { label: 'Projects Completed', value: '5+', hint: 'Shipped end to end' },
    { label: 'Technologies & Tools', value: '8+', hint: 'Daily drivers' },
  ],

  availability: {
    status: 'open-to-offers',
    label: 'Open to opportunities',
    detail:
      'Add your real availability here, such as whether you are actively interviewing, freelance, or just browsing.',
  },
}
