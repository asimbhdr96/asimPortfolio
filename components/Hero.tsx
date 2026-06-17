"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { hero, site } from "@/lib/content";
import { MagneticButton } from "./MagneticButton";
import { staggerChild, staggerContainer } from "./Reveal";

function RotatingWord() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % hero.rotating.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={hero.rotating[index]}
          initial={reduce ? false : { y: "0.5em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={reduce ? undefined : { y: "-0.5em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-accent"
        >
          {hero.rotating[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const nameWords = site.fullName.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* oversized name */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-serif leading-[0.92] tracking-tight text-ink"
        >
          <span className="block overflow-hidden">
            <motion.span variants={staggerChild} className="eyebrow mb-4 block font-sans">
              {hero.intro}
            </motion.span>
          </span>
          {nameWords.map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={staggerChild}
                className="block text-[clamp(2.75rem,11vw,9rem)]"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* headline + blurb */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-2xl leading-snug text-ink sm:text-3xl"
          >
            {hero.headlineLead} <RotatingWord /> {hero.headlineTail}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="max-w-md text-pretty text-ink-soft">{hero.blurb}</p>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href={`mailto:${site.email}`}
                ariaLabel="Email me"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors"
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-muted md:flex"
      >
        <span>scroll</span>
        <ArrowDownRight size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
