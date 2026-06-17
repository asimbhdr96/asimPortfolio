import { about } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" />

        <div className="mt-14 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Reveal
              as="p"
              className="font-serif text-3xl leading-tight text-ink sm:text-4xl"
            >
              {about.lead}
            </Reveal>
          </div>

          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 0.08} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
