import { motion } from 'framer-motion'

import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/cn'
import { Icon } from '@/lib/icons'
import { fadeUpSmall, staggerContainer } from '@/lib/motion'
import type { Experience as ExperienceEntry, ExperienceKind, IconName } from '@/types'

const KIND: Record<ExperienceKind, { icon: IconName; label: string }> = {
  role: { icon: 'users', label: 'Team Project' },
  freelance: { icon: 'briefcase', label: 'Freelance / Client Project' },
  personal: { icon: 'rocket', label: 'Personal Project' },
  learning: { icon: 'graduation-cap', label: 'Learning' },
}

function TimelineItem({ experience, isLast }: { experience: ExperienceEntry; isLast: boolean }) {
  const kind = KIND[experience.kind ?? 'role']
  const marker = experience.type === 'education' ? KIND.learning : kind

  return (
    <motion.li
      variants={fadeUpSmall}
      className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 sm:gap-x-6"
    >
      <div className="relative flex flex-col items-center">
        <span
          aria-hidden="true"
          className={cn(
            'z-10 mt-1 grid size-8 shrink-0 place-items-center rounded-full border',
            experience.current
              ? 'border-accent/50 bg-accent/10 text-accent'
              : 'border-border bg-surface-2 text-muted',
          )}
        >
          <Icon name={marker.icon} className="size-3.5" />
        </span>
        {!isLast ? (
          <span aria-hidden="true" className="absolute top-9 bottom-0 w-px bg-border" />
        ) : null}
      </div>

      <div className="pb-10 last:pb-0">
        <p className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
          <Badge tone="muted">{marker.label}</Badge>
          <span>{experience.startDate}</span>
          <span aria-hidden="true">•</span>
          <span className={cn(experience.current && 'text-accent')}>{experience.endDate}</span>
          {experience.current ? (
            <Badge tone="accent" className="ml-1">
              Current
            </Badge>
          ) : null}
        </p>

        <h3 className="text-base font-semibold tracking-tight text-text">{experience.position}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {experience.company}
          {experience.location ? (
            <>
              <span aria-hidden="true"> · </span>
              <span>{experience.location}</span>
            </>
          ) : null}
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{experience.summary}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {experience.tech.map((tech) => (
            <li key={tech}>
              <Badge tone="muted">{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}

export function ExperienceTimeline() {
  const reduced = useReducedMotion()

  return (
    <motion.ul
      variants={reduced ? undefined : staggerContainer(0.09)}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.08 }}
    >
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </motion.ul>
  )
}
