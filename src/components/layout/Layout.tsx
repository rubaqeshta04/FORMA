import type { ReactNode } from 'react'

import { Background } from './Background'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />

      <a
        href="#main-content"
        className="sr-only-focusable fixed top-4 left-4 z-100 rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-text shadow-[var(--shadow-lift)]"
      >
        Skip to content
      </a>

      {children}
    </>
  )
}
