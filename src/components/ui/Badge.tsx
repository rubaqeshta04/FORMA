import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export function Badge({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode
  className?: string
  tone?: 'default' | 'accent' | 'muted'
}) {
  const tones = {
    default: 'border-border bg-surface-2 text-text',
    accent: 'border-accent/30 bg-accent/10 text-accent',
    muted: 'border-transparent bg-surface-2 text-muted',
  } as const

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
        'text-xs font-medium whitespace-nowrap',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
