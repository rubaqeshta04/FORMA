import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/ui/Container'
import { navItems, sectionIds, siteConfig } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Icon } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { Logo } from '@/components/navbar/Logo'

function BackToTop() {
  const visible = useScrollPosition(600)
  const reduced = useReducedMotion()

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-xl',
            'border border-border bg-surface text-text shadow-[var(--shadow-lift)]',
            'transition-colors duration-200 hover:border-accent/50 hover:text-accent sm:right-6 sm:bottom-6',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          )}
        >
          <Icon name="arrow-up" className="size-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="border-t border-border">
        <Container>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <Logo />
              <p className="max-w-xs text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
            </div>

            <nav aria-label="Footer">
              <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-text uppercase">
                Sections
              </h2>
              <ul className="flex flex-col gap-1">
                {sectionIds.map((id) => {
                  const item = navItems.find((nav) => nav.id === id)
                  const label = item?.label ?? id.charAt(0).toUpperCase() + id.slice(1)
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="inline-flex min-h-9 items-center rounded text-sm text-muted transition-colors duration-200 hover:text-text"
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div>
              <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-text uppercase">
                Elsewhere
              </h2>
              <ul className="flex flex-col gap-1">
                {siteConfig.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-9 items-center gap-2 rounded text-sm text-muted transition-colors duration-200 hover:text-text"
                    >
                      <Icon name={social.icon} className="size-3.5 shrink-0" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-text uppercase">
                Contact
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-9 max-w-full items-center gap-2 rounded text-sm break-all text-muted transition-colors duration-200 hover:text-text"
              >
                <Icon name="mail" className="size-3.5 shrink-0" />
                {siteConfig.email}
              </a>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                <Icon name="map-pin" className="size-3.5 shrink-0" />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse items-start gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              Built with React, TypeScript and Tailwind CSS
              <Icon name="code" className="size-3.5 shrink-0 text-accent" />
            </p>
          </div>
        </Container>
      </footer>

      <BackToTop />
    </>
  )
}
