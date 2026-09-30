import type { SiteConfig } from '@/types'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function applySeo(site: SiteConfig) {
  if (typeof document === 'undefined') return

  const { seo, url } = site
  const canonical = `${url.replace(/\/+$/, '')}/`
  const ogImage = `${url.replace(/\/+$/, '')}${seo.ogImage}`

  document.title = seo.title

  setMeta('meta[name="description"]', 'name', 'description', seo.description)
  setCanonical(canonical)

  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
  setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', site.name)

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

  const keywords = document.head.querySelector<HTMLMetaElement>('meta[name="keywords"]')
  if (keywords) keywords.setAttribute('content', seo.keywords.join(', '))
  else setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords.join(', '))

  const socials = Object.fromEntries(site.socials.map((social) => [social.label, social.href]))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: seo.description,
    url: canonical,
    image: ogImage,
    email: site.email.includes('@') ? `mailto:${site.email}` : undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
    },
    sameAs: Object.values(socials).filter((href) => href.startsWith('http')),
  }

  let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="json-ld"]')
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = 'json-ld'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(jsonLd, null, 2)
}
