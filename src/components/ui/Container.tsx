import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export function Container({
  children,
  className,
  as: Component = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article'
}) {
  return <Component className={cn('container-page', className)}>{children}</Component>
}
