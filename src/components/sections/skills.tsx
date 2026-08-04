"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  PenTool,
  Component,
  Presentation as PresentationIcon,
  FileSliders,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Tool = {
  name: string;
  icon: LucideIcon;
  tier: "Primary" | "Proficient" | "Familiar";
};

const designTools: Tool[] = [
  { name: "Canva", icon: Palette, tier: "Primary" },
  { name: "Adobe Photoshop", icon: Layers, tier: "Proficient" },
  { name: "Adobe Illustrator", icon: PenTool, tier: "Proficient" },
  { name: "Figma", icon: Component, tier: "Familiar" },
];

const presentationTools: Tool[] = [
  { name: "Microsoft PowerPoint", icon: PresentationIcon, tier: "Proficient" },
  { name: "Google Slides", icon: FileSliders, tier: "Proficient" },
];

const tierStyles: Record<Tool["tier"], string> = {
  Primary: "border-neon-red/40 bg-neon-red/10 text-neon-red",
  Proficient: "border-electric-blue/30 bg-electric-blue/10 text-electric-blue",
  Familiar: "border-white/10 bg-white/[0.03] text-muted-foreground",
};

function ToolGroup({ title, tools, delay }: { title: string; tools: Tool[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:text-sm xl:text-base">
        {title}
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.14] xl:p-6"
          >
            <div className="flex items-center gap-3">
              <tool.icon className="size-5 text-white/70 xl:size-6" />
              <span className="text-base font-medium text-white lg:text-lg xl:text-xl">
                {tool.name}
              </span>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide xl:px-3.5 xl:py-1.5 xl:text-xs",
                tierStyles[tool.tier]
              )}
            >
              {tool.tier}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="relative mx-auto max-w-[min(94vw,2700px)]">
        <SectionHeader
          index="03"
          label="Skills"
          heading="The toolkit behind the work."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          <ToolGroup title="Design Tools" tools={designTools} delay={0} />
          <ToolGroup title="Presentation Tools" tools={presentationTools} delay={0.08} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground lg:text-sm xl:text-base">
              How I Work
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg xl:text-xl">
              Every deliverable is designed by hand and refined until it&rsquo;s
              ready to send &mdash; no templates, no shortcuts, just the tools
              above put to deliberate use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
