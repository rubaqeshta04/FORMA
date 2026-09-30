import { motion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'

import { Container } from '@/components/ui/Container'
import { sectionIds } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/cn'
import { Icon } from '@/lib/icons'
import { duration, easeOutExpo } from '@/lib/motion'

import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrollPosition(20)
  const activeId = useActiveSection(sectionIds, 'home')
  const triggerRef = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out',
        scrolled || menuOpen
          ? 'glass border-b border-border'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <div
          className={cn(
            'flex items-center justify-between gap-4 transition-[height] duration-300 ease-out',
            scrolled ? 'h-16' : 'h-18 sm:h-20',
          )}
        >
          <Logo onClick={closeMenu} />

          <nav aria-label="Primary" className="hidden lg:block">
            <NavLinks activeId={activeId} onNavigate={closeMenu} />
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.a
              href="#contact"
              className="hidden min-h-11 items-center rounded-xl border border-border bg-surface px-4 text-sm font-medium text-text transition-colors duration-200 hover:border-border-strong hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
              whileHover={reduced ? undefined : { y: -1 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={{ duration: duration.fast, ease: easeOutExpo }}
            >
              Hire me
            </motion.a>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={cn(
                'grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-surface text-text lg:hidden',
                'transition-colors duration-200 hover:border-border-strong',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
            >
              <Icon name={menuOpen ? 'x' : 'menu'} className="size-5" />
            </button>
          </div>
        </div>
      </Container>

      <div id="mobile-navigation">
        <MobileMenu
          open={menuOpen}
          activeId={activeId}
          onClose={closeMenu}
          returnFocusRef={triggerRef}
        />
      </div>
    </header>
  )
}
