"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Size = "feature" | "wide" | "square";

export function BentoProjectCard({
  project,
  size,
  index,
  onOpen,
  positionClassName,
}: {
  project: Project;
  size: Size;
  index: number;
  onOpen: () => void;
  positionClassName?: string;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      className={cn(
        "group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/25 hover:shadow-[0_25px_70px_-15px_rgba(230,36,41,0.3)] lg:aspect-auto",
        size === "feature" && "lg:col-span-2 lg:row-span-2",
        size === "wide" && "lg:col-span-2 lg:row-span-1",
        size === "square" && "lg:col-span-1 lg:row-span-1",
        positionClassName
      )}
    >
      {/* Image stage — the slide/poster is shown in full (object-contain)
          on a neutral surface instead of being cropped, since these are
          text-heavy design artifacts, not photography; cropping would cut
          into their own baked-in typography. */}
      <div className="relative min-h-0 flex-1 bg-gradient-to-br from-surface to-background p-3 lg:p-4 xl:p-5">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={project.cover.src}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={size === "feature"}
          />
        </div>

        <div className="pointer-events-none absolute inset-3 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] lg:inset-4" />

        {/* Category tags */}
        <div className="absolute left-6 top-6 flex flex-wrap gap-1.5 xl:left-7 xl:top-7 xl:gap-2">
          {project.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-background/80 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-white/85 backdrop-blur-sm xl:px-3 xl:py-1.5 xl:text-xs"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="absolute right-6 top-6 flex size-10 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-background/80 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 xl:right-7 xl:top-7 xl:size-12">
          <Expand className="size-4 xl:size-5" />
        </div>
      </div>

      {/* Caption strip — always separate from the image, so nothing ever
          collides with the artifact's own text. */}
      <div className="shrink-0 border-t border-white/[0.06] bg-background/40 p-5 lg:p-6 xl:p-7">
        <h3
          className={cn(
            "font-heading font-bold text-white",
            size === "feature" ? "text-2xl lg:text-3xl xl:text-4xl" : "text-lg lg:text-xl xl:text-2xl"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/60 lg:text-base xl:text-lg">
          {project.subtitle}
        </p>

        {/* Description + tools — revealed on hover via a pure-CSS
            grid-rows [0fr]→[1fr] trick, so it animates height:auto
            smoothly without measuring anything in JS. */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="min-h-0 overflow-hidden">
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 lg:text-[0.9375rem] xl:max-w-lg xl:text-base">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 xl:gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wide text-white/70 xl:px-3 xl:py-1.5 xl:text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
