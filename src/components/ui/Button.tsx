import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'
import { Icon } from '@/lib/icons'
import type { IconName } from '@/types'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
  'disabled:pointer-events-none disabled:opacity-55'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-contrast hover:brightness-110 active:brightness-95 ' +
    'shadow-[0_8px_24px_-12px_var(--color-accent)]',
  secondary:
    'border border-border bg-surface text-text hover:border-border-strong hover:bg-surface-2',
  ghost: 'text-muted hover:bg-surface-2 hover:text-text',
}

const sizes: Record<Size, string> = {
  sm: 'min-h-11 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm sm:text-base',
}

interface CommonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: IconName
  trailingIcon?: IconName
  className?: string
}

function classes({ variant = 'primary', size = 'md', className }: CommonProps) {
  return cn(base, variants[variant], sizes[size], className)
}

export function Button({
  children,
  variant,
  size,
  icon,
  trailingIcon,
  className,
  href,
  target,
  rel,
  download,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: CommonProps & {
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}) {
  const content = (
    <>
      {icon ? <Icon name={icon} className="size-4 shrink-0" /> : null}
      <span>{children}</span>
      {trailingIcon ? <Icon name={trailingIcon} className="size-4 shrink-0" /> : null}
    </>
  )

  if (href) {
    const isExternal = /^https?:/i.test(href)
    return (
      <a
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noreferrer noopener' : undefined)}
        download={download}
        className={classes({ children, variant, size, className })}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes({ children, variant, size, className })}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
