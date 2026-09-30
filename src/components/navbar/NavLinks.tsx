import { AnimatePresence, motion } from 'framer-motion'

import { navItems } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { springSnappy } from '@/lib/motion'

export function NavLinks({ activeId, onNavigate }: { activeId: string; onNavigate?: () => void }) {
  const reduced = useReducedMotion()

  return (
    <ul className="flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = activeId === item.id
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? 'true' : undefined}
              className="relative flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
            >
              {isActive ? (
                <AnimatePresence initial={false}>
                  <motion.span
                    key="active-pill"
                    layoutId={reduced ? undefined : 'nav-active-pill'}
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg border border-border bg-surface-2"
                    transition={reduced ? { duration: 0 } : springSnappy}
                  />
                </AnimatePresence>
              ) : null}

              <span className={`relative z-10 ${isActive ? 'text-text' : ''}`}>{item.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
