import { useRef } from 'react'

import { cn } from '@/lib/cn'

export function ProjectFilter({
  filters,
  active,
  counts,
  onChange,
}: {
  filters: string[]
  active: string
  counts: Record<string, number>
  onChange: (filter: string) => void
}) {
  const listRef = useRef<HTMLDivElement>(null)

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End']
    if (!keys.includes(event.key)) return

    event.preventDefault()
    const currentIndex = filters.indexOf(active)
    let nextIndex = currentIndex

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % filters.length
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + filters.length) % filters.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = filters.length - 1

    const next = filters[nextIndex]
    if (!next) return

    onChange(next)

    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    buttons?.[nextIndex]?.focus()
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Filter projects by technology"
      onKeyDown={onKeyDown}
      className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            id={`filter-tab-${slugify(filter)}`}
            aria-selected={isActive}
            aria-controls="projects-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(filter)}
            className={cn(
              'inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium',
              'transition-[color,background-color,border-color] duration-200',
              isActive
                ? 'border-accent/40 bg-accent/10 text-accent'
                : 'border-border bg-surface text-muted hover:border-border-strong hover:text-text',
            )}
          >
            {filter}
            <span
              className={cn(
                'rounded-full px-1.5 py-0.5 font-mono text-[0.6875rem]',
                isActive ? 'bg-accent/15 text-accent' : 'bg-surface-2 text-muted',
              )}
            >
              {counts[filter] ?? 0}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
