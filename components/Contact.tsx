import { ArrowUpRight } from "lucide-react";
import { contact, site } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Contact" />

        <div className="mt-14 max-w-4xl">
          <Reveal as="p" className="text-pretty font-serif text-2xl text-ink-soft sm:text-3xl">
            {contact.lead}
          </Reveal>

          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-end gap-3 font-serif leading-[0.95] text-ink transition-colors hover:text-accent"
            >
              <span className="text-[clamp(2rem,7vw,5.5rem)] break-all">
                {site.email}
              </span>
              <ArrowUpRight
                className="mb-2 h-[clamp(1.5rem,4vw,3rem)] w-[clamp(1.5rem,4vw,3rem)] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.4}
              />
            </a>
          </Reveal>

          <Reveal as="p" delay={0.1} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            {contact.body}
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[0.65rem] tracking-widest text-muted uppercase">
                  GitHub
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-lg text-ink transition-colors hover:text-accent"
                  >
                    @{site.githubHandle}
                  </a>
                </dd>
              </div>
              {site.linkedin && (
                <div>
                  <dt className="font-mono text-[0.65rem] tracking-widest text-muted uppercase">
                    LinkedIn
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-lg text-ink transition-colors hover:text-accent"
                    >
                      @{site.linkedinHandle}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-[0.65rem] tracking-widest text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-lg text-ink">{site.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
