import { skills } from "@/lib/content";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading index="03" title="Stack" />

        <Reveal
          as="p"
          className="mt-14 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          The tools I reach for, grouped by where they live in the product.
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="grid items-baseline gap-3 py-6 md:grid-cols-[0.4fr_1.6fr] md:gap-10">
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  {group.title}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-lg text-ink-soft transition-colors hover:text-accent sm:text-xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Marquee />
      </div>
    </section>
  );
}
