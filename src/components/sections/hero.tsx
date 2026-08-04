"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackdrop } from "@/components/hero/hero-backdrop";
import { HeroVisual } from "@/components/hero/hero-visual";
import { RotatingRole } from "@/components/hero/rotating-role";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  const [firstName, ...restParts] = siteConfig.name.split(" ");
  const restOfName = restParts.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32 lg:py-20"
    >
      <HeroBackdrop />

      {/* Same max-width convention as every other section, so the hero's
          content edges line up with the rest of the page. */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-16 lg:max-w-5xl xl:max-w-[min(94vw,2700px)] xl:flex-row xl:items-center xl:justify-center xl:gap-16 xl:px-6 2xl:gap-24 2xl:px-12">
        {/* Text column — one identity block (name + rotating role, fused
            together rather than competing as separate badge-style shapes),
            one line of positioning, one clear action, and a quiet trailing
            credential line. Fewer, bolder beats instead of six stacked
            elements. */}
        <div className="@container flex w-full flex-col items-center text-center xl:max-w-[900px] xl:items-start xl:text-left 2xl:max-w-[min(50vw,1240px)]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm lg:mb-10 lg:px-5 lg:py-2 lg:text-sm xl:text-base"
          >
            <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-red shadow-[0_0_8px_2px_rgba(230,36,41,0.6)] lg:h-2.5 lg:w-2.5" />
            </span>
            Open to Work &mdash; Portfolio 2026
          </motion.span>

          {/* Identity block: name and role read as one fused unit instead
              of a headline plus a separate boxed pill underneath it. */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-heading text-[clamp(2.75rem,1.8rem+12cqw,9.5rem)] font-bold leading-[0.95] tracking-tight text-white xl:text-[clamp(6rem,1.5rem+13cqw,13.5rem)] 2xl:text-[clamp(7rem,1.5rem+13cqw,15rem)]"
            >
              {firstName}
              {restOfName && (
                <span className="mt-1 block text-[0.34em] font-medium tracking-[0.04em] text-white/70 sm:mt-2">
                  {restOfName}
                </span>
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-2 lg:mt-3"
            >
              <RotatingRole className="font-heading text-[clamp(1.75rem,1rem+6cqw,5rem)] font-bold leading-none xl:text-[clamp(3rem,1rem+7cqw,6.5rem)] 2xl:text-[clamp(3.5rem,1rem+7.5cqw,7.5rem)]" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground lg:mt-10 lg:text-xl xl:max-w-2xl xl:text-[1.6rem] xl:leading-snug 2xl:max-w-3xl 2xl:text-[1.8rem]"
          >
            I turn ideas into visuals worth sending twice &mdash; posters,
            decks, brand systems, and websites &mdash; built with an
            engineer&rsquo;s discipline for what actually scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-12 lg:gap-5 xl:justify-start"
          >
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              size="lg"
              className="group/button h-14 gap-2 rounded-full px-8 text-base shadow-[0_0_24px_rgba(230,36,41,0.35)] hover:shadow-[0_0_32px_rgba(230,36,41,0.5)] lg:h-16 lg:px-9 lg:text-lg xl:h-20 xl:px-11 xl:text-2xl"
            >
              View Work
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5 lg:size-5 xl:size-6" />
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-14 gap-2 rounded-full border-white/15 bg-white/[0.02] px-8 text-base backdrop-blur-sm hover:bg-white/[0.06] lg:h-16 lg:px-9 lg:text-lg xl:h-20 xl:px-11 xl:text-2xl"
            >
              <Mail className="size-4 lg:size-5 xl:size-6" />
              Let&rsquo;s Talk
            </Button>
          </motion.div>

          {/* Quiet trailing credential — proof of substance without
              competing with the CTA for the eye's last stop. */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
            className="mt-10 max-w-md text-balance font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/70 lg:mt-12 lg:text-sm xl:text-base"
          >
            10+ Real Projects &middot; 6+ Design Disciplines &middot;
            E&#8209;Cell, IIIT Bhubaneswar
          </motion.p>
        </div>

        {/* Focal visual — only at true desktop widths, where there's room
            for it to breathe next to the text instead of cramping it. A
            floating status chip overlaps the seam so the photo and the
            text column read as one bonded composition, not two floating
            blocks. */}
        <div className="relative hidden shrink-0 xl:block xl:w-[460px] 2xl:w-[min(32vw,660px)]">
          <div className="pointer-events-none absolute inset-y-[12%] -left-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent 2xl:-left-10" />
          <HeroVisual hasPhoto={hasPhoto} />
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
