# Portfolio — Asim Yaramis

Personal portfolio for Bahadir Asim Yaramis (React Native & Full-Stack Engineer).
Design concept: **"Engineered Calm"** — a minimal editorial site with a serif/grotesque/mono
type system, warm paper + true-dark themes, and restrained, purposeful motion.

## Tech

- **Next.js 16** (App Router) with **static export** (`output: "export"`) — ships pure pre-rendered HTML/CSS/JS.
- **TypeScript** + **Tailwind CSS v4**
- **Framer Motion** (scroll reveals, marquee, magnetic CTA, custom cursor)
- **next-themes** (light/dark, no flash) · **lucide-react** (icons)
- Fonts: Instrument Serif (display), Geist Sans (body), Geist Mono (labels)

All site content lives in one place: [`lib/content.ts`](lib/content.ts).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs the static site to ./out
```

## Deploy to Netlify

Configured via [`netlify.toml`](netlify.toml):

- Build command: `npm run build`
- Publish directory: `out`

Connect the repo in Netlify (or drag-and-drop the `out/` folder). No server runtime needed.
Update the canonical URL in `site.url` inside [`lib/content.ts`](lib/content.ts) if you use a custom domain.

## Accessibility & performance

- Semantic landmarks, visible focus states, descriptive labels.
- All motion respects `prefers-reduced-motion`.
- Custom cursor only activates on fine-pointer (desktop) devices.
