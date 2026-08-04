"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackdrop } from "@/components/hero/hero-backdrop";
import { HeroVisual } from "@/components/hero/hero-visual";
import { RotatingRole } from "@/components/hero/rotating-role";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "10+", label: "Real Projects Shipped" },
  { value: "6+", label: "Design Disciplines" },
  { value: "E-Cell", label: "IIIT Bhubaneswar" },
];

export function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  const [firstName, ...restParts] = siteConfig.name.split(" ");
  const restOfName = restParts.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32 lg:py-20"
    >
      <HeroBackdrop />

      {/* Same max-width convention as every other section (max-w-[min(94vw,2700px)])
          so the hero's content edges line up with the rest of the page at
          wide viewports instead of drifting to a different width. */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-16 lg:max-w-5xl xl:max-w-[min(94vw,2700px)] xl:flex-row xl:items-center xl:justify-center xl:gap-16 xl:px-6 2xl:gap-24 2xl:px-12">
        {/* Text column — capped (not flex-grow) so it stays visually bonded
            to the photo instead of stretching into dead space on ultrawide;
            sized off its own container width (cqw) so the headline scales
            correctly whether it's alone or sharing the row with the panel. */}
        <div className="@container flex w-full flex-col items-center text-center xl:max-w-[900px] xl:items-start xl:text-left 2xl:max-w-[min(50vw,1240px)]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm lg:mb-9 lg:px-6 lg:py-2.5 lg:text-base xl:text-lg"
          >
            <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-red shadow-[0_0_8px_2px_rgba(230,36,41,0.6)] lg:h-2.5 lg:w-2.5" />
            </span>
            Open to Work &mdash; Portfolio 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-heading text-[clamp(2.75rem,1.8rem+12cqw,9.5rem)] leading-[0.95] tracking-tight text-white xl:text-[clamp(6rem,1.5rem+13cqw,13.5rem)] 2xl:text-[clamp(7rem,1.5rem+13cqw,15rem)]"
          >
            <span className="block font-bold">{firstName}</span>
            {restOfName && (
              <span className="mt-1 block text-[0.34em] font-medium tracking-[0.04em] text-white/75 sm:mt-2">
                {restOfName}
              </span>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-6 lg:mt-8"
          >
            <RotatingRole className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2.5 font-heading text-[clamp(1.15rem,0.85rem+3.6cqw,3.4rem)] font-semibold backdrop-blur-sm lg:px-6 lg:py-3 xl:text-[clamp(2rem,0.85rem+4.4cqw,4.5rem)] xl:px-8 xl:py-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-8 lg:text-xl xl:max-w-3xl xl:text-[1.75rem] xl:leading-relaxed 2xl:max-w-4xl 2xl:text-[1.95rem]"
          >
            I help startups, professors, creators, and student teams turn
            ideas into visuals worth sending twice &mdash; posters, decks,
            brand systems, and websites, shaped by a self-taught eye for
            what&rsquo;s current and an engineer&rsquo;s discipline for
            what actually scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-12 lg:gap-5 xl:justify-start"
          >
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              size="lg"
              className="group/button h-12 gap-2 rounded-full px-6 text-[15px] shadow-[0_0_24px_rgba(230,36,41,0.35)] hover:shadow-[0_0_32px_rgba(230,36,41,0.5)] lg:h-14 lg:px-8 lg:text-base xl:h-20 xl:px-11 xl:text-2xl 2xl:h-[5.5rem] 2xl:px-12 2xl:text-[1.7rem]"
            >
              View Work
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5 lg:size-5 xl:size-6" />
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 gap-2 rounded-full border-white/15 bg-white/[0.02] px-6 text-[15px] backdrop-blur-sm hover:bg-white/[0.06] lg:h-14 lg:px-8 lg:text-base xl:h-20 xl:px-11 xl:text-2xl 2xl:h-[5.5rem] 2xl:px-12 2xl:text-[1.7rem]"
            >
              <Mail className="size-4 lg:size-5 xl:size-6" />
              Let&rsquo;s Talk
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
            className="mt-14 flex w-full max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-white/[0.08] pt-8 lg:mt-16 xl:max-w-none xl:justify-start xl:gap-x-14 xl:pt-10"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center pl-0 xl:items-start xl:pl-9 first:xl:pl-0"
              >
                {i > 0 && (
                  <span className="absolute -left-5 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-white/10 xl:block" />
                )}
                <span className="font-heading text-2xl font-bold text-white lg:text-3xl xl:text-5xl 2xl:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:text-[11px] xl:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Focal visual — only at true desktop widths, where there's room
            for it to breathe next to the text instead of cramping it. A
            floating status chip overlaps the seam so the photo and the
            text column read as one bonded composition, not two floating
            blocks. */}
        <div className="relative hidden shrink-0 xl:block xl:w-[440px] 2xl:w-[min(30vw,620px)]">
          <div className="pointer-events-none absolute inset-y-[12%] -left-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent 2xl:-left-10" />
          <HeroVisual hasPhoto={hasPhoto} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: EASE }}
            className="absolute -left-6 top-10 flex items-center gap-2 rounded-full border border-white/10 bg-background/80 py-2 pl-2.5 pr-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] backdrop-blur-xl 2xl:-left-8 2xl:py-2.5 2xl:pl-3 2xl:pr-5"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-neon-red to-electric-blue 2xl:size-8">
              <BadgeCheck className="size-3.5 text-white 2xl:size-4" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-wide text-white 2xl:text-xs">
              Crafted with Care
            </span>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-white"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
