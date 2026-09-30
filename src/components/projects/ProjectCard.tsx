import { motion } from 'framer-motion'

import { Badge } from '@/components/ui/Badge'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/cn'
import { Icon } from '@/lib/icons'
import { filterItemVariants } from '@/lib/motion'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion()
  const hasGithub = Boolean(project.links.github)
  const hasLive = Boolean(project.links.live)

  return (
    <motion.article
      layout={!reduced}
      variants={reduced ? undefined : filterItemVariants}
      initial={reduced ? undefined : 'enter'}
      animate={reduced ? undefined : 'center'}
      exit={reduced ? undefined : 'exit'}
      transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-surface shadow-card',
        'transition-[border-color,box-shadow] duration-200 ease-out',
        'hover:border-border-strong hover:shadow-[var(--shadow-lift)]',
        project.featured ? 'border-gradient border-accent/40' : 'border-border',
      )}
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-surface-2">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-70"
        />

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.featured ? <Badge tone="accent">Featured</Badge> : null}
          </div>
          <Badge tone="muted" className="backdrop-blur-sm">
            {project.type}
          </Badge>
        </div>

        <div className="absolute inset-x-4 bottom-3 flex items-center gap-2">
          <Badge className="backdrop-blur-sm">{project.category}</Badge>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold tracking-tight text-text">
          <span className="break-words">{project.title}</span>
        </h3>

        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <p className="text-sm leading-relaxed text-muted/80">{project.description}</p>

        <ul className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge tone="muted">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.links.repositories?.map((repository) => (
            <a
              key={repository.href}
              href={repository.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View the ${project.title} ${repository.label}`}
              className={linkClass}
            >
              <Icon name="github" className="size-4" />
              {repository.label}
            </a>
          ))}

          {hasGithub ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View the ${project.title} source code on GitHub`}
              className={linkClass}
            >
              <Icon name="github" className="size-4" />
              Code
            </a>
          ) : null}

          {hasLive ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View the ${project.title} live demo`}
              className={linkClass}
            >
              <Icon name="external-link" className="size-4" />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

const linkClass = cn(
  'inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3',
  'text-xs font-medium text-text',
  'transition-[border-color,background-color,color] duration-200',
  'hover:border-accent/40 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)
