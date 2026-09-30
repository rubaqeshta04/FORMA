import { motion } from 'framer-motion'

import { profile } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/cn'
import { fadeUpSmall, staggerContainer } from '@/lib/motion'

export function StatsGrid({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  const count = profile.stats.length

  const columns = cn(
    'grid gap-px overflow-hidden rounded-2xl border border-border bg-border',
    count <= 2
      ? 'grid-cols-1'
      : count === 3
        ? 'grid-cols-1 sm:grid-cols-3'
        : 'grid-cols-2 sm:grid-cols-4',
    className,
  )

  return (
    <motion.dl
      variants={reduced ? undefined : staggerContainer(0.07)}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.3 }}
      className={columns}
    >
      {profile.stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={reduced ? undefined : fadeUpSmall}
          className="flex flex-col gap-1 bg-surface px-4 py-5 sm:px-5"
        >
          <dt className="order-2 text-xs leading-snug text-muted">{stat.label}</dt>
          <dd className="order-1 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {stat.value}
            {stat.hint ? <span className="sr-only">. {stat.hint}</span> : null}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  )
}
