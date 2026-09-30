import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { useReducedMotion } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/cn'
import { easeOutExpo, duration, reducedHidden, reducedVisible } from '@/lib/motion'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = 'div',
  amount = 0.25,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as: 'div' | 'li' | 'section' | 'article' | 'span' | 'header' | 'footer'
  amount?: number
}) {
  const reduced = useReducedMotion()

  const MotionTag = motion[Component]

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={
        reduced
          ? { hidden: reducedHidden, visible: reducedVisible }
          : {
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }
      }
      transition={{ duration: reduced ? 0.2 : duration.reveal, ease: easeOutExpo, delay }}
    >
      {children}
    </MotionTag>
  )
}
