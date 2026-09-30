import { useMemo, useState } from 'react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { projectFilters, projects, siteConfig } from '@/data'
import type { Project } from '@/types'

import { ProjectFilter } from './ProjectFilter'
import { ProjectGrid } from './ProjectGrid'

const githubUrl =
  siteConfig.socials.find((social) => social.icon === 'github')?.href ?? 'https://github.com'

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function buildFilters(allProjects: Project[]): string[] {
  if (projectFilters.length > 0) return projectFilters

  const unique = new Set<string>()
  for (const project of allProjects) {
    for (const tech of project.tech) unique.add(tech)
  }
  return ['All', ...Array.from(unique).sort()]
}

function matchesFilter(project: Project, filter: string): boolean {
  if (filter === 'React') return project.tech.some((tech) => tech.startsWith('React'))
  if (filter === 'API Integration') {
    return project.tech.some((tech) => tech === 'API Integration' || tech === 'REST APIs')
  }
  return project.tech.includes(filter)
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const filters = useMemo(() => buildFilters(projects), [])

  const counts = useMemo(() => {
    const result: Record<string, number> = {}
    for (const filter of filters) {
      result[filter] =
        filter === 'All'
          ? projects.length
          : projects.filter((project) => matchesFilter(project, filter)).length
    }
    return result
  }, [filters])

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  )

  return (
    <Section id="projects" headingId="projects-heading">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Selected Work"
          description="A selection of web applications and projects I’ve built through personal projects, client work, and team-based development."
        />

        <Button
          href={githubUrl}
          variant="secondary"
          size="sm"
          icon="github"
          className="shrink-0 self-start lg:self-auto"
        >
          All repositories
        </Button>
      </div>

      <div className="mb-6">
        <ProjectFilter
          filters={filters}
          active={activeFilter}
          counts={counts}
          onChange={setActiveFilter}
        />
      </div>

      <div
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`filter-tab-${slug(activeFilter)}`}
        className="min-h-64"
      >
        <ProjectGrid projects={visibleProjects} />
      </div>
    </Section>
  )
}
