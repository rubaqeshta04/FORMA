import { motion } from 'framer-motion'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data'
import { useReducedMotion } from '@/hooks/useMediaQuery'
import { Icon } from '@/lib/icons'
import { fadeUpSmall, staggerContainer } from '@/lib/motion'

export function Services() {
  const reduced = useReducedMotion()

  return (
    <Section id="services" headingId="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="What I Do"
        title="How I Can Help"
        description="I build responsive and user-friendly web interfaces, with a focus on React.js, modern frontend development, and turning designs into functional web experiences."
        className="mb-10"
      />

      <motion.ul
        variants={reduced ? undefined : staggerContainer(0.06)}
        initial={reduced ? undefined : 'hidden'}
        whileInView={reduced ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.li
            key={service.id}
            variants={reduced ? undefined : fadeUpSmall}
            className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-border-strong sm:p-6"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-accent transition-colors duration-200 group-hover:border-accent/40">
              <Icon name={service.icon} className="size-4" />
            </span>

            <h3 className="text-sm font-semibold tracking-tight text-text">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{service.description}</p>

            {service.points && service.points.length > 0 ? (
              <ul className="mt-1 flex flex-col gap-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-muted">
                    <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
