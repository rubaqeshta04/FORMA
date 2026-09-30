export type IconName =
  | 'code'
  | 'palette'
  | 'smartphone'
  | 'gauge'
  | 'layers'
  | 'terminal'
  | 'server'
  | 'wrench'
  | 'terminal-square'
  | 'chart'
  | 'rocket'
  | 'component'
  | 'sparkles'
  | 'target'
  | 'shield'
  | 'zap'
  | 'leaf'
  | 'wand'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'whatsapp'
  | 'mail'
  | 'map-pin'
  | 'globe'
  | 'arrow-up-right'
  | 'external-link'
  | 'star'
  | 'check'
  | 'send'
  | 'file-text'
  | 'braces'
  | 'graduation-cap'
  | 'briefcase'
  | 'users'
  | 'message-square'
  | 'cpu'
  | 'download'
  | 'wind'
  | 'activity'
  | 'trending-up'
  | 'monitor'
  | 'coffee'
  | 'git-branch'
  | 'calendar'
  | 'circle-check'
  | 'circle-alert'
  | 'loader'
  | 'quote'
  | 'hash'
  | 'x'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'arrow-up'

export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: IconName
  handle?: string
}

export interface SeoConfig {
  title: string
  description: string
  keywords: string[]
  ogImage: string
}

export interface SiteConfig {
  name: string
  shortName: string
  logo?: string
  role: string
  tagline: string
  email: string
  location: string
  url: string
  socials: SocialLink[]
  seo: SeoConfig
}

export interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface Stat {
  label: string
  value: string
  hint?: string
}

export interface Principle {
  title: string
  description: string
  icon: IconName
}

export interface AboutContent {
  paragraphs: string[]
  focus: string[]
  principles: Principle[]
}

export interface Availability {
  status: 'available' | 'open-to-offers' | 'unavailable'
  label: string
  detail: string
}

export interface Profile {
  greeting: string
  heroDescription: string
  heroCtas: HeroCta[]
  about: AboutContent
  stats: Stat[]
  availability: Availability
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  icon: IconName
  items: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: IconName
  points?: string[]
}

export interface ProjectLinks {
  github?: string
  live?: string
  repositories?: { label: string; href: string }[]
}

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  image: string
  type: string
  category: string
  year: string
  featured: boolean
  tech: string[]
  links: ProjectLinks
}

export type ExperienceKind = 'role' | 'freelance' | 'personal' | 'learning'

export interface Experience {
  id: string
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  summary: string
  tech: string[]
  kind?: ExperienceKind
  type?: 'work' | 'education'
}

export interface ContactDetail {
  label: string
  value: string
  href?: string
  icon: IconName
}

export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactErrors {
  name?: string
  email?: string
  message?: string
}

export interface ContactValues {
  name: string
  email: string
  message: string
}
