import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data'

import { PrinciplesList } from './PrinciplesList'
import { StatsGrid } from './StatsGrid'

export function About() {
  return (
    <Section id="about" headingId="about-heading">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="A developer, not just a résumé"
          />

          <div className="flex flex-col gap-4">
            {profile.about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 32)} as="div">
                <p className="text-base leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" delay={0.05}>
            <h3 className="mb-4 text-sm font-semibold tracking-tight text-text">What I focus on</h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {profile.about.focus.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal as="div">
            <StatsGrid />
          </Reveal>

          <div>
            <Reveal as="div">
              <h3 className="mb-4 text-sm font-semibold tracking-tight text-text">How I work</h3>
            </Reveal>
            <PrinciplesList className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          </div>
        </div>
      </div>
    </Section>
  )
}
