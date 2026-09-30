import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { navItems } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { siteConfig } from '@/data'
import { Icon } from '@/lib/icons'

const FOCUSABLE = 'a[href], button:not([disabled])'

export function MobileMenu({
  open,
  activeId,
  onClose,
  returnFocusRef,
}: {
  open: boolean
  activeId: string
  onClose: () => void
  returnFocusRef: React.RefObject<HTMLButtonElement | null>
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const trigger = returnFocusRef.current
    const panel = panelRef.current

    const first = panel?.querySelector<HTMLElement>(FOCUSABLE)
    first?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panel) return

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusable.length === 0) return

      const firstEl = focusable[0]
      const lastEl = focusable[focusable.length - 1]
      if (!firstEl || !lastEl) return

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault()
        lastEl.focus()
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault()
        firstEl.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      const target = trigger ?? previouslyFocused
      target?.focus()
    }
  }, [open, onClose, returnFocusRef])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-bg/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="glass absolute inset-x-3 top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-border-strong p-3 shadow-[var(--shadow-lift)]"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduced ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      aria-current={isActive ? 'true' : undefined}
                      className={[
                        'flex min-h-12 items-center justify-between gap-3 rounded-xl px-4 text-sm font-medium',
                        'transition-colors duration-200',
                        isActive
                          ? 'border border-border bg-surface-2 text-text'
                          : 'border border-transparent text-muted hover:bg-surface-2 hover:text-text',
                      ].join(' ')}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                      ) : null}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-3 border-t border-border pt-3">
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={onClose}
                className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-accent transition-colors duration-200 hover:bg-surface-2"
              >
                <Icon name="mail" className="size-4 shrink-0" />
                {siteConfig.email}
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
