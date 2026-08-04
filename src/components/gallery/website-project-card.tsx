"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Laptop, Smartphone, Tablet } from "lucide-react";
import type { WebsiteProject } from "@/lib/website-projects";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Device = "desktop" | "tablet" | "mobile";

const DEVICES: { id: Device; icon: typeof Laptop; label: string }[] = [
  { id: "desktop", icon: Laptop, label: "Desktop" },
  { id: "tablet", icon: Tablet, label: "Tablet" },
  { id: "mobile", icon: Smartphone, label: "Mobile" },
];

const FRAME_STYLES: Record<Device, string> = {
  desktop: "aspect-[16/10] w-full rounded-lg",
  tablet: "aspect-[3/4] w-2/3 rounded-2xl",
  mobile: "aspect-[9/19] w-[38%] rounded-[1.75rem]",
};

export function WebsiteProjectCard({
  project,
  index,
}: {
  project: WebsiteProject;
  index: number;
}) {
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-white/20"
    >
      {/* Device preview stage */}
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-background p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />

        <div
          className={cn(
            "relative flex flex-col overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] transition-all duration-400 ease-out",
            FRAME_STYLES[device]
          )}
        >
          {device !== "mobile" && (
            <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
            </div>
          )}
          {device === "mobile" && (
            <div className="flex shrink-0 justify-center pt-2.5">
              <span className="h-1.5 w-10 rounded-full bg-white/15" />
            </div>
          )}
          <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(230,36,41,0.14),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(37,99,235,0.14),transparent_55%)]">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/30">
              Preview Coming Soon
            </span>
          </div>
        </div>

        {/* Device switcher */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-background/80 p-1 backdrop-blur-sm">
          {DEVICES.map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d.id)}
              aria-label={`Preview ${d.label}`}
              className={cn(
                "flex size-8 items-center justify-center rounded-full transition-colors",
                device === d.id
                  ? "bg-neon-red/20 text-neon-red"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              <d.icon className="size-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <span className="w-fit rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-white/70">
          Websites
        </span>
        <h3 className="mt-3 font-heading text-xl font-bold text-white lg:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60 lg:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.length > 0 ? (
            project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wide text-white/70"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="rounded-full border border-dashed border-white/15 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">
              Tech stack coming soon
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs uppercase tracking-wide",
              project.liveUrl
                ? "border-neon-red/40 bg-neon-red/10 text-neon-red"
                : "cursor-not-allowed border-white/10 bg-white/[0.02] text-muted-foreground/50"
            )}
          >
            <ExternalLink className="size-3.5" />
            {project.liveUrl ? "Live Demo" : "Demo Soon"}
          </span>
          <span
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs uppercase tracking-wide",
              project.githubUrl
                ? "border-white/20 bg-white/[0.03] text-white"
                : "cursor-not-allowed border-white/10 bg-white/[0.02] text-muted-foreground/50"
            )}
          >
            <GitHubIcon className="size-3.5" />
            {project.githubUrl ? "GitHub" : "Code Soon"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
