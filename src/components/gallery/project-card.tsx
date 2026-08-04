"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  onOpen,
  size = "default",
}: {
  project: Project;
  onOpen: () => void;
  size?: "default" | "large";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 22, mass: 0.6 };
  const spx = useSpring(px, spring);
  const spy = useSpring(py, spring);
  const rotateX = useTransform(spy, [0, 1], [6, -6]);
  const rotateY = useTransform(spx, [0, 1], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const isLandscape = project.cover.width / project.cover.height > 1.3;

  return (
    <motion.button
      ref={ref}
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-card text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(230,36,41,0.25)]",
        size === "large" && "lg:rounded-3xl"
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-surface",
          isLandscape ? "aspect-[16/10]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={project.cover.src}
          alt={project.title}
          fill
          sizes={
            size === "large"
              ? "(min-width: 1024px) 45vw, 100vw"
              : "(min-width: 1024px) 30vw, 100vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Halftone accent on hover */}
        <div
          className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        <div className="absolute right-4 top-4 flex size-9 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-background/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Expand className="size-4" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="mt-3 font-heading text-xl font-bold text-white lg:text-2xl xl:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/60 lg:text-base xl:text-lg">
            {project.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
