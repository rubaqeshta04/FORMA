import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export function GlassPanel({
  children,
  className,
  as: Component = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'header' | 'aside'
}) {
  return (
    <Component className={cn('glass rounded-2xl border border-border', className)}>
      {children}
    </Component>
  )
}
