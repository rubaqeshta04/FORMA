import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data'

import { SkillGroupGrid } from './SkillGroupCard'

export function Skills() {
  return (
    <Section id="skills" headingId="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Skills"
        title="What I work with"
        description="Grouped by role so you can see the tools I use most."
        className="mb-10"
      />
     
      <SkillGroupGrid groups={skillGroups} />
    </Section>
  )
}
