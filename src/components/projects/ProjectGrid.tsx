import { AnimatePresence, motion } from 'framer-motion'

import type { Project } from '@/types'

import { ProjectCard } from './ProjectCard'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {projects.length > 0 ? (
        <motion.ul
          key="project-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </motion.ul>
      ) : (
        <motion.p
          key="project-empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-2xl border border-dashed border-border-strong px-6 py-14 text-center text-sm text-muted"
        >
          No projects match this filter yet.
        </motion.p>
      )}
    </AnimatePresence>
  )
}
