"use client";

import { useEffect, useRef } from "react";
import { mulberry32 } from "@/lib/seeded-random";

type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: "red" | "blue" | "white";
};

const rng = mulberry32(1337);

const particles: Particle[] = Array.from({ length: 34 }, () => {
  const roll = rng();
  const color: Particle["color"] = roll < 0.4 ? "red" : roll < 0.7 ? "blue" : "white";
  return {
    x: rng() * 100,
    y: rng() * 100,
    size: 1.5 + rng() * 2.5,
    duration: 5 + rng() * 8,
    delay: rng() * 6,
    color,
  };
});

const particleColor: Record<Particle["color"], string> = {
  red: "bg-neon-red",
  blue: "bg-electric-blue",
  white: "bg-white",
};

export function HeroBackdrop() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const parallaxARef = useRef<HTMLDivElement>(null);
  const parallaxBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const parallaxA = parallaxARef.current;
    const parallaxB = parallaxBRef.current;
    if (!spotlight) return;

    let raf = 0;
    function handlePointerMove(e: PointerEvent) {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        spotlight?.style.setProperty("--mx", `${e.clientX}px`);
        spotlight?.style.setProperty("--my", `${e.clientY}px`);

        const px = e.clientX / window.innerWidth - 0.5;
        const py = e.clientY / window.innerHeight - 0.5;
        if (parallaxA) {
          parallaxA.style.transform = `translate3d(${px * -40}px, ${py * -40}px, 0)`;
        }
        if (parallaxB) {
          parallaxB.style.transform = `translate3d(${px * 50}px, ${py * 50}px, 0)`;
        }
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Base void */}
      <div className="absolute inset-0 bg-background" />

      {/* Drifting neon glows — outer div carries mouse-parallax offset
          (plain transform), inner div carries the drift keyframe
          animation, so the two transforms don't fight the cascade. */}
      <div
        ref={parallaxARef}
        className="absolute -top-1/4 -left-1/4 transition-transform duration-300 ease-out"
        style={{ width: "min(50vw, 62rem)", height: "min(50vw, 62rem)" }}
      >
        <div className="h-full w-full rounded-full bg-neon-red/[0.18] blur-[130px] animate-drift-a" />
      </div>
      <div
        ref={parallaxBRef}
        className="absolute -bottom-1/4 -right-1/4 transition-transform duration-300 ease-out"
        style={{ width: "min(50vw, 62rem)", height: "min(50vw, 62rem)" }}
      >
        <div className="h-full w-full rounded-full bg-electric-blue/[0.14] blur-[130px] animate-drift-b" />
      </div>

      {/* Halftone dot texture */}
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Radiating web-pattern lines */}
      <svg
        className="absolute -top-1/3 -right-1/3 h-[140%] w-[140%] opacity-[0.07] animate-spin-slow"
        viewBox="0 0 800 800"
        fill="none"
      >
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          // Rounded to a fixed precision so server- and client-computed
          // trig values always serialize identically (avoids hydration
          // mismatches from last-bit Math.cos/sin differences across JS engines).
          const x2 = (400 + Math.cos(angle) * 500).toFixed(2);
          const y2 = (400 + Math.sin(angle) * 500).toFixed(2);
          return (
            <line
              key={i}
              x1="400"
              y1="400"
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? "#e62429" : "#ffffff"}
              strokeWidth="1"
            />
          );
        })}
        {[120, 220, 320, 420].map((r) => (
          <circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            stroke="#ffffff"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full animate-float-particle ${particleColor[p.color]}`}
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--particle-duration": `${p.duration}s`,
              "--particle-delay": `${p.delay}s`,
              "--particle-opacity": p.color === "white" ? 0.25 : 0.45,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(230,36,41,0.06), transparent 60%)",
        }}
      />

      {/* Vignette for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
    </div>
  );
}
