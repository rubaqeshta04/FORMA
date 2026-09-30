import { motion } from 'framer-motion'

import { useReducedMotion } from '@/hooks/useMediaQuery'
import { useTheme } from '@/hooks/useTheme'
import { Icon } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduced = useReducedMotion()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted',
        'transition-colors duration-200 hover:border-border-strong hover:text-text',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      )}
    >
      <motion.span
        key={theme}
        initial={reduced ? false : { opacity: 0, rotate: -35, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: reduced ? 0 : 0.2, ease: 'easeOut' }}
        className="grid place-items-center"
      >
        <Icon name={isDark ? 'moon' : 'sun'} className="size-4" />
      </motion.span>
    </button>
  )
}
