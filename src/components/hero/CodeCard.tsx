import { motion } from 'framer-motion'

import { siteConfig } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { Icon } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function CodeCard({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <GlassPanel className={cn('relative overflow-hidden p-0', className)}>
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="relative"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-accent/60" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
        </div>

        <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed sm:text-[0.8125rem]">
          <code>
            <span className="block text-muted">{'// one developer, exported'}</span>
            <span className="mt-1 block">
              <span className="text-accent-2">export const</span>{' '}
              <span className="text-accent">developer</span>{' '}
              <span className="text-muted">{'= {'}</span>
            </span>
            <span className="block pl-4">
              <span className="text-accent-2">name</span>
              <span className="text-muted">: </span>
              <span className="text-text">'{siteConfig.shortName}'</span>
              <span className="text-muted">,</span>
            </span>
            <span className="block pl-4">
              <span className="text-accent-2">role</span>
              <span className="text-muted">: </span>
              <span className="text-text">'{siteConfig.role}'</span>
              <span className="text-muted">,</span>
            </span>
            <span className="block pl-4">
              <span className="text-accent-2">focus</span>
              <span className="text-muted">: [</span>
              <span className="text-text">'accessibility'</span>
              <span className="text-muted">,</span>
            </span>
            <span className="block pl-6 text-text">'performance'</span>
            <span className="block pl-4">
              <span className="text-muted">],</span>
            </span>
            <span className="block pl-4">
              <span className="text-accent-2">stack</span>
              <span className="text-muted">: [</span>
              <span className="text-text">'React'</span>
              <span className="text-muted">, </span>
              <span className="text-text">'TypeScript'</span>
              <span className="text-muted">,</span>
            </span>
            <span className="block pl-6 text-text">'Tailwind'</span>
            <span className="block pl-4">
              <span className="text-muted">],</span>
            </span>
            <span className="block pl-4">
              <span className="text-accent-2">coffeePerDay</span>
              <span className="text-muted">: </span>
              <span className="text-text">Infinity</span>
              <span className="text-muted">,</span>
            </span>
            <span className="block text-muted">{'}' as const}</span>
          </code>
        </pre>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent"
        />
      </motion.div>
    </GlassPanel>
  )
}

export function CodeCardFooter() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {['React', 'TypeScript', 'Vite', 'Tailwind'].map((tech) => (
        <span
          key={tech}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-2.5 py-1',
            'font-mono text-xs text-muted',
          )}
        >
          <Icon name="check" className="size-3 text-accent" />
          {tech}
        </span>
      ))}
    </div>
  )
}
