import { profile } from '@/data'
import { cn } from '@/lib/cn'

export function AvailabilityPill({ className }: { className?: string }) {
  const { status, label } = profile.availability
  const dotTone =
    status === 'unavailable' ? 'bg-muted' : status === 'available' ? 'bg-emerald-400' : 'bg-accent'

  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5',
        'text-xs font-medium text-muted',
        className,
      )}
    >
      <span className="relative grid size-2 shrink-0 place-items-center" aria-hidden="true">
        <span className={cn('absolute size-2 rounded-full opacity-40', dotTone)} />
        <span className={cn('size-1.5 rounded-full', dotTone)} />
      </span>
      {label}
    </p>
  )
}
