"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SectionHeader({
  index,
  label,
  heading,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-neon-red lg:text-sm xl:text-base"
      >
        <span className="text-white/30">{index}</span>
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        className="mt-4 max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:mt-5 lg:text-6xl xl:max-w-4xl xl:text-8xl 2xl:text-[7.5rem]"
      >
        {heading}
      </motion.h2>
    </div>
  );
}
