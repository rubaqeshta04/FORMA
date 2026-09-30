import { motion } from 'framer-motion'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { Icon } from '@/lib/icons'
import { fadeUpSmall, staggerContainer } from '@/lib/motion'
import type { SkillGroup } from '@/types'

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <Card as="article" className="group flex w-full flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent transition-colors duration-200 group-hover:border-accent/40">
          <Icon name={group.icon} className="size-4" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-tight text-text">{group.title}</h3>
          <p className="mt-0.5 text-xs leading-relaxed text-muted">{group.description}</p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li key={item}>
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function SkillGroupGrid({ groups }: { groups: SkillGroup[] }) {
  const reduced = useReducedMotion()

  return (
    <motion.ul
      variants={reduced ? undefined : staggerContainer(0.06)}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.12 }}
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {groups.map((group) => (
        <motion.li key={group.id} variants={reduced ? undefined : fadeUpSmall} className="flex">
          <SkillGroupCard group={group} />
        </motion.li>
      ))}
    </motion.ul>
  )
}
