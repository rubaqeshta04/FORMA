import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export function Card({
  children,
  className,
  interactive = false,
  as: Component = 'div',
}: {
  children: ReactNode
  className?: string
  interactive?: boolean
  as?: 'div' | 'article' | 'li'
}) {
  return (
    <Component
      className={cn(
        'relative rounded-2xl border border-border bg-surface shadow-card',
        'transition-[border-color,box-shadow,transform] duration-200 ease-out',
        interactive &&
          'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-lift)]',
        className,
      )}
    >
      {children}
    </Component>
  )
}
