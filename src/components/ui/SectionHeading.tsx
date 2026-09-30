import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  id: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      ) : null}

      <h2
        id={id}
        className="scroll-mt-28 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
