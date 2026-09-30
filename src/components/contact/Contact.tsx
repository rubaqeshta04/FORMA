import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data'

import { ContactDetails } from './ContactDetails'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <Section id="contact" headingId="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's talk"
            description="Have a project, a role, or a codebase that needs a second pair of eyes? Send a note."
          />

          <Reveal as="div" delay={0.05}>
            <ContactDetails />
          </Reveal>
        </div>

        <Reveal as="div">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
            <div className="mb-6 flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-text">
                  {profile.availability.label}
                </h3>
                <p className="mt-0.5 text-xs text-muted">
                  Usually replies within a couple of days.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
