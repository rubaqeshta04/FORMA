import { siteConfig } from '@/data'
import { cn } from '@/lib/cn'

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className={cn('group inline-flex min-h-11 items-center rounded-lg', className)}
    >
      <span className="logo-contrast rounded-md">
        <img
          src={siteConfig.logo}
          alt=""
          width={512}
          height={448}
          decoding="async"
          className="h-12 w-auto shrink-0 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-14"
        />
      </span>
    </a>
  )
}
