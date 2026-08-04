"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function HeroVisual({ hasPhoto }: { hasPhoto: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.6 };
  const spx = useSpring(px, springConfig);
  const spy = useSpring(py, springConfig);

  const rotateX = useTransform(spy, [0, 1], [10, -10]);
  const rotateY = useTransform(spx, [0, 1], [-10, 10]);
  const glareX = useTransform(spx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(spy, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full"
      style={{ perspective: 1200 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {/* Orbiting rings sit behind the card, in their own layer so the
            tilt transform below only affects the glass panel itself. */}
        <div className="pointer-events-none absolute inset-[-18%] -z-10">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-electric-blue/25" />
          <div
            className="absolute inset-[8%] rounded-full border border-neon-red/20"
            style={{ animation: "spin-slow 90s linear infinite reverse" }}
          />
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.06] to-white/[0.015] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        >
          {hasPhoto && (
            <Image
              src="/profile-photo.jpg"
              alt={siteConfig.name}
              fill
              sizes="(min-width: 1536px) 560px, 440px"
              className="object-cover"
              priority
            />
          )}

          {/* Cursor-tracked glare */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: useGlareGradient(glareX, glareY),
            }}
          />

          {hasPhoto ? (
            <>
              {/* Soft bottom vignette only — keeps the label legible
                  without washing color across the actual photo. */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-black/10" />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_20px_rgba(0,0,0,0.35)]" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,36,41,0.22),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(37,99,235,0.2),transparent_55%)]" />
          )}

          {!hasPhoto && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-[7rem] font-bold leading-none tracking-tight text-white/[0.14] sm:text-[8rem]">
                {initials(siteConfig.name)}
              </span>
            </div>
          )}

          {/* Halftone corner texture for the comic-print accent — only on
              the placeholder state; a real photo doesn't need it. */}
          {!hasPhoto && (
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-screen"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function useGlareGradient(x: MotionValue<string>, y: MotionValue<string>) {
  return useTransform([x, y], ([xv, yv]) =>
    `radial-gradient(320px circle at ${xv} ${yv}, rgba(255,255,255,0.12), transparent 70%)`
  );
}
