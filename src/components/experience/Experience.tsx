import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

import { ExperienceTimeline } from './TimelineItem'

export function Experience() {
  return (
    <Section id="experience" headingId="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Experience & Selected Work"
        description="Recent work, projects, and learning experiences."
        className="mb-10"
      />

      <Reveal as="div">
        <ExperienceTimeline />
      </Reveal>
    </Section>
  )
}
