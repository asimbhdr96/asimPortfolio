import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong font-serif text-base leading-none">
            by
          </span>
          <span className="font-mono text-xs tracking-widest text-muted">
            {site.name.toUpperCase()}
          </span>
        </div>

        <p className="font-mono text-xs text-faint">
          Designed & built in Next.js · {year}
        </p>

        <div className="flex items-center gap-5 font-mono text-xs text-muted">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline transition-colors hover:text-ink"
          >
            GitHub
          </a>
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            className="link-underline transition-colors hover:text-ink"
          >
            Email
          </a>
          <span aria-hidden>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
