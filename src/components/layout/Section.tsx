import type { ReactNode } from 'react'

import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'


export function Section({
  id,
  headingId,
  children,
  className,
  divider = true,
}: {
  id: string
  headingId: string
  children: ReactNode
  className?: string
  divider?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('relative scroll-mt-24 py-20 sm:py-24 lg:py-28', className)}
    >
      {divider ? (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl px-5">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      ) : null}

      <Container>{children}</Container>
    </section>
  )
}
