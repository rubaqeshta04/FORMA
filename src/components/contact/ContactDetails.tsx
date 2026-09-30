import { profile, siteConfig } from '@/data'
import type { ContactDetail } from '@/types'
import { Icon } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function ContactDetails() {
  const details: ContactDetail[] = [
    {
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: 'mail',
    },
    {
      label: 'WhatsApp',
      value: '+972 59 246 1896',
      href: 'https://wa.me/972592461896',
      icon: 'whatsapp',
    },
    { label: 'Location', value: siteConfig.location, icon: 'map-pin' },
  ]

  return (
    <div className="flex flex-col gap-6">
      <dl className="flex flex-col gap-5">
        {details.map((detail) => (
          <div key={detail.label} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
              <Icon name={detail.icon} className="size-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs tracking-wide text-muted uppercase">{detail.label}</dt>
              <dd className="mt-0.5 text-sm break-words text-text">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="rounded transition-colors duration-200 hover:text-accent"
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      <div>
        <p className="mb-3 text-xs tracking-wide text-muted uppercase">Elsewhere</p>
        <ul className="flex flex-col gap-2">
          {siteConfig.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  'group flex min-h-11 items-center gap-3 rounded-lg px-2 -ml-2',
                  'text-sm text-muted transition-colors duration-200 hover:text-text',
                )}
              >
                <Icon name={social.icon} className="size-4 shrink-0 text-accent" />
                <span className="font-medium">{social.label}</span>
                {social.handle ? (
                  <span className="truncate text-xs text-muted">{social.handle}</span>
                ) : null}
                <Icon
                  name="arrow-up-right"
                  className="ml-auto size-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-xs leading-relaxed text-muted">
        {profile.availability.detail}
      </p>
    </div>
  )
}
