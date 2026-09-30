import {
  Activity,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Briefcase,
  Calendar,
  ChartBar,
  Check,
  CircleAlert,
  CircleCheck,
  Code,
  Coffee,
  Component,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Hash,
  Layers,
  Leaf,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Moon,
  Palette,
  Quote,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SquareCode,
  Star,
  Sun,
  Target,
  Terminal,
  TrendingUp,
  Users,
  Wand,
  Wind,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import type { IconName } from '@/types'

type IconComponent = React.ComponentType<{
  className?: string
  strokeWidth?: number
  'aria-hidden'?: boolean | 'true' | 'false'
}>

function GitHubIcon({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function WhatsAppIcon({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 2a9.9 9.9 0 0 0-8.52 15.02L2 22l5.13-1.45A9.9 9.9 0 1 0 12 2Zm0 18.1a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.05.86.88-2.97-.2-.31A8.2 8.2 0 1 1 12 20.1Zm4.5-6.14c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.03-.38-1.96-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.16 1.59.1.49-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  )
}

function TwitterIcon({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      <path d="M18.9 2.25h3.68l-8.04 9.19L24 21.75h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 2.25h7.59l5.24 6.93 6.07-6.93Zm-1.29 17.5h2.04L6.49 4.13H4.3l13.31 15.62Z" />
    </svg>
  )
}

const icons = {
  activity: Activity,
  'arrow-up-right': ArrowUpRight,
  'arrow-up': ArrowUp,
  braces: Braces,
  briefcase: Briefcase,
  calendar: Calendar,
  chart: ChartBar,
  check: Check,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  code: Code,
  coffee: Coffee,
  component: Component,
  cpu: Cpu,
  download: Download,
  'external-link': ExternalLink,
  'file-text': FileText,
  gauge: Gauge,
  'git-branch': GitBranch,
  github: GitHubIcon,
  globe: Globe,
  'graduation-cap': GraduationCap,
  hash: Hash,
  layers: Layers,
  leaf: Leaf,
  linkedin: LinkedInIcon,
  loader: LoaderCircle,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  'message-square': MessageSquare,
  monitor: Monitor,
  moon: Moon,
  palette: Palette,
  quote: Quote,
  rocket: Rocket,
  send: Send,
  server: Server,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  target: Target,
  terminal: Terminal,
  'terminal-square': SquareCode,
  'trending-up': TrendingUp,
  twitter: TwitterIcon,
  whatsapp: WhatsAppIcon,
  users: Users,
  wand: Wand,
  wind: Wind,
  wrench: Wrench,
  x: X,
  zap: Zap,
} satisfies Record<IconName, IconComponent>

export type { IconComponent }

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName
  className?: string
  strokeWidth?: number
}) {
  const Component = icons[name]
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
