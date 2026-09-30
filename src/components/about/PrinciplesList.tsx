import { motion } from 'framer-motion'

import { profile } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { Icon } from '@/lib/icons'
import { fadeUpSmall, staggerContainer } from '@/lib/motion'

export function PrinciplesList({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.ul
      variants={reduced ? undefined : staggerContainer(0.07)}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {profile.about.principles.map((principle) => (
        <motion.li
          key={principle.title}
          variants={reduced ? undefined : fadeUpSmall}
          className="group rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-border-strong"
        >
          <span className="mb-3 grid size-9 place-items-center rounded-lg border border-border bg-surface-2 text-accent transition-colors duration-200 group-hover:border-accent/40">
            <Icon name={principle.icon} className="size-4" />
          </span>
          <h3 className="mb-1.5 text-sm font-semibold text-text">{principle.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{principle.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  )
}
