import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Selected Work" />

        <Reveal
          as="p"
          className="mt-14 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          A few things I&rsquo;ve designed and built — mobile products, AI
          features, and the systems that hold them together.
        </Reveal>

        <div className="mt-14 border-t border-line">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                {/* left rail */}
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-3xl leading-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="font-mono text-[0.7rem] tracking-wide text-muted uppercase">
                      {project.kind}
                    </p>
                  </div>
                </div>

                {/* right body */}
                <div>
                  <p className="text-lg leading-relaxed text-ink">
                    {project.summary}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted transition-colors group-hover:border-line-strong"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-accent transition-opacity hover:opacity-70"
                    >
                      View source →
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
