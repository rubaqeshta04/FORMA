import { useReducedMotion } from '@/hooks/useMediaQuery'

export function Background() {
  const reduced = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      <div
        className="grid-lines absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_20%,transparent_75%)]"
        style={{ opacity: 0.35 }}
      />

      <div
        className={reduced ? '' : 'animate-glow'}
        style={{
          background:
            'radial-gradient(38rem 26rem at 18% -6%, color-mix(in oklab, var(--color-accent) 20%, transparent), transparent 70%)',
          filter: 'blur(6px)',
        }}
      />

      <div
        className={reduced ? '' : 'animate-glow'}
        style={{
          background:
            'radial-gradient(32rem 24rem at 88% 8%, color-mix(in oklab, var(--color-accent-2) 16%, transparent), transparent 70%)',
          filter: 'blur(6px)',
          animationDelay: '-7s',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  )
}
