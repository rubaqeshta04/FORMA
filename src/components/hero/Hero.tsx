import { motion } from "framer-motion";

import { CodeCard, CodeCardFooter } from "@/components/hero/CodeCard";
import { AvailabilityPill } from "@/components/hero/AvailabilityPill";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile, siteConfig } from "@/data";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { duration, easeOutExpo, wordVariants } from "@/lib/motion";

function Words({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={cn("inline-block", className)}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={wordVariants}
            transition={{ duration: duration.slow, ease: easeOutExpo }}
          >
            {word}
            {index < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {siteConfig.socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${siteConfig.name} on ${social.label}`}
            title={social.label}
            className={cn(
              "grid size-11 place-items-center rounded-xl border border-border bg-surface text-muted",
              "transition-[color,border-color,transform] duration-200 ease-out",
              "hover:-translate-y-0.5 hover:border-border-strong hover:text-text",
            )}
          >
            <Icon name={social.icon} className="size-4.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const ctaMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center pt-28 pb-20 sm:pt-32 lg:pt-36"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col items-start gap-7">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: easeOutExpo }}
            >
              <AvailabilityPill />
            </motion.div>

            <div>
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: duration.base,
                  ease: easeOutExpo,
                  delay: 0.05,
                }}
                className="mb-3 text-sm text-muted sm:text-base"
              >
                {profile.greeting}
              </motion.p>

              <h1
                id="hero-heading"
                className="text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                <motion.span
                  className="block"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduced ? 0 : 0.045,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  <Words text={siteConfig.name} className="text-gradient" />
                </motion.span>
                <motion.span
                  className="mt-2 block text-muted"
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: duration.base,
                    ease: easeOutExpo,
                    delay: 0.25,
                  }}
                >
                  {siteConfig.role}
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: duration.reveal,
                ease: easeOutExpo,
                delay: 0.3,
              }}
              className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              {...ctaMotion}
              transition={{
                duration: duration.reveal,
                ease: easeOutExpo,
                delay: 0.4,
              }}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
              {profile.heroCtas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  trailingIcon={
                    cta.variant === "primary" ? "arrow-up-right" : undefined
                  }
                  className="w-full sm:w-auto"
                >
                  {cta.label}
                </Button>
              ))}
              <Button
                href="/cv.pdf"
                download
                variant="secondary"
                icon="download"
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div
              {...ctaMotion}
              transition={{
                duration: duration.reveal,
                ease: easeOutExpo,
                delay: 0.5,
              }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <SocialLinks />
              <p className="flex items-center gap-2 text-sm text-muted">
                <Icon name="map-pin" className="size-4 shrink-0" />
                {siteConfig.location}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.slow,
              ease: easeOutExpo,
              delay: 0.2,
            }}
            className="w-full"
          >
            <CodeCard />
            <CodeCardFooter />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
