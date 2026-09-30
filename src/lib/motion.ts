import type { Transition, Variants } from 'framer-motion'


export const easeOutExpo: Transition['ease'] = [0.22, 1, 0.36, 1]

export const duration = {
  fast: 0.18,
  base: 0.28,
  reveal: 0.5,
  slow: 0.6,
} as const

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 32,
  mass: 0.7,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export const reducedHidden = { opacity: 0 }
export const reducedVisible = { opacity: 1 }

export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.6em' },
  visible: { opacity: 1, y: 0 },
}

export const filterItemVariants: Variants = {
  enter: { opacity: 0, scale: 0.97, y: 8 },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, y: -8 },
}
