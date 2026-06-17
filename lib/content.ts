// Single source of truth for all site copy.
// Rewritten from the resume — original prose, no PDF embed.

export const site = {
  name: "Bahadir Yaramis",
  fullName: "Bahadir Asim Yaramis",
  role: "React Native & Full-Stack Engineer",
  location: "Dallas, TX",
  email: "asimyaramis19@gmail.com",
  github: "https://github.com/asimbhdr96",
  githubHandle: "asimbhdr96",
  // Replace with your real LinkedIn URL. Leave empty to hide the link.
  linkedin: "https://www.linkedin.com/in/asimyaramis/",
  linkedinHandle: "asimyaramis",
  // Update if you deploy to a custom domain.
  url: "https://asimyaramis.netlify.app",
  description:
    "React Native and full-stack engineer with 5+ years building cross-platform mobile and web products with Expo, React, Next.js, and Node.js.",
};

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "stack", label: "Stack", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

export const hero = {
  // Shown one phrase at a time / as a set, depending on the component.
  intro: "Hi, I'm",
  headlineLead: "I build",
  // Words that rotate in the serif accent slot. Each must read correctly
  // with headlineTail so the sentence never breaks mid-rotation.
  rotating: ["mobile apps", "design systems", "AI features", "fast interfaces"],
  headlineTail: "for iOS, Android, and the web.",
  blurb:
    "Mobile-focused software engineer with 5+ years shipping cross-platform iOS and Android apps in React Native and Expo — and just as at home across the full stack with React, Next.js, and Node.",
};

export const about = {
  lead: "I work mainly on React Native and full-stack TypeScript — mobile apps for iOS and Android, shared UI, and the backend work that supports them.",
  paragraphs: [
    "For the last five years I've specialized in React Native and Expo, shipping iOS and Android from a single TypeScript codebase. I'm drawn to the hard mobile problems: offline-first data sync, reusable component systems, and performance work that keeps interfaces smooth on real devices in the field.",
    "I'm equally comfortable across the stack — building with React and Next.js on the front, Node.js on the back, and wiring clean REST and GraphQL contracts in between. I started in computer vision and autonomous systems, which is where my taste for systems that have to work in the real world comes from.",
    "I was an early adopter of AI-assisted development — Copilot, Cursor, Claude Code — and I use it to move fast without trading away code quality. I like owning features end to end in teams that ship.",
  ],
  // Small honest stat strip — facts only, drawn from the resume.
  facts: [
    { value: "5+", label: "Years building software" },
    { value: "iOS · Android", label: "From one codebase" },
    { value: "Mobile → Full-stack", label: "Where I work" },
  ],
};

export type Project = {
  name: string;
  kind: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Mnemo",
    kind: "AI Mobile App",
    year: "2025",
    summary:
      "A mobile app that turns everything you save — notes, links, screenshots — into a searchable memory you can ask in plain language.",
    description:
      "A NestJS service generates vector embeddings for every captured item and indexes them in OpenSearch for k-NN semantic retrieval, so results rank by meaning instead of keywords. The retrieved context feeds a grounded, streaming answer back to the React Native client.",
    tags: [
      "React Native",
      "NestJS",
      "OpenSearch",
      "Vector Embeddings",
      "Semantic Search",
      "RAG",
    ],
  },
  {
    name: "Marginalia",
    kind: "AI Learning App",
    year: "2025",
    summary:
      "A study app that turns book PDFs and long articles into flashcards, then trains you on them with a daily, game-like streak.",
    description:
      "Uploaded PDFs and articles are chunked and distilled into question-and-answer flashcards, then scheduled by a spaced-repetition engine. A Duolingo-style daily loop — streaks, levels, and bite-sized sessions — keeps the material sticking long after the first read.",
    tags: [
      "React Native",
      "Expo",
      "NestJS",
      "LLM",
      "Spaced Repetition",
      "PDF Parsing",
    ],
  },
  {
    name: "Vellum UI",
    kind: "Design System",
    year: "2025",
    summary:
      "A token-driven React Native component library that keeps an entire product suite visually consistent across iOS, Android, and web — from one codebase.",
    description:
      "Built around a single source of design tokens with light and dark theming and a set of accessible, composable primitives. Packaged with react-native-builder-bob and compatible with the New Architecture, so product teams ship features instead of rebuilding buttons.",
    tags: [
      "React Native",
      "TypeScript",
      "Design Tokens",
      "Theming",
      "New Architecture",
    ],
  },
  {
    name: "Draftline",
    kind: "AI Feature",
    year: "2024",
    summary:
      "An in-app assistant that drafts, summarizes, and answers from a user's own content with fast, streaming responses.",
    description:
      "Streaming LLM responses with tool-calling and client-side redaction of sensitive fields before anything leaves the device. A typed NestJS service handles orchestration, caching, and rate limiting behind the scenes.",
    tags: ["React Native", "Node.js", "NestJS", "LLM", "Streaming"],
  },
  {
    name: "Recon",
    kind: "On-device Vision",
    year: "2023",
    summary:
      "Real-time object detection running entirely on-device, turning a phone camera into a live inspection tool.",
    description:
      "A camera frame pipeline feeding an on-device model with bounding-box overlays rendered smoothly in real time. Rooted in earlier work on aerial-imagery analysis and GPS-denied navigation.",
    tags: ["React Native", "TensorFlow Lite", "Computer Vision", "Real-time"],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Offline-first architecture",
      "iOS & Android",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Zustand"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "C#"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "GraphQL", "REST", ".NET"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure DevOps", "CI/CD", "Git"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Detox"],
  },
  {
    title: "AI & Workflow",
    items: [
      "GitHub Copilot",
      "Cursor",
      "Claude Code",
      "LLM feature integration",
    ],
  },
];

// Compact list for the hero marquee.
export const marqueeItems = [
  "React Native",
  "Expo",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "NestJS",
  "PostgreSQL",
  "Supabase",
  "Azure",
  "Offline-first",
  "Design Systems",
  "AI-assisted dev",
];

export const contact = {
  lead: "Open to roles where mobile craft matters.",
  body: "Whether you're hiring, building something, or just want to compare notes on React Native — my inbox is open.",
};
