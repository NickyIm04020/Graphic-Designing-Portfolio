"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Service = {
  emoji: string;
  title: string;
  summary: string;
  items: string[];
};

const services: Service[] = [
  {
    emoji: "🎨",
    title: "Graphic Design",
    summary: "Print and digital creative that holds up at any size.",
    items: ["Posters", "Flyers", "Pamphlets", "Brochures", "Certificates"],
  },
  {
    emoji: "🖥️",
    title: "Presentation Design",
    summary: "Decks built to be read, remembered, and sent onward.",
    items: [
      "Pitch Decks",
      "College Presentations",
      "Business Presentations",
      "Investor Decks",
      "Professional Slides",
    ],
  },
  {
    emoji: "🌐",
    title: "Website Design",
    summary: "Interfaces designed with the same rigor as print work.",
    items: [
      "Portfolio Websites",
      "Landing Pages",
      "Modern UI Design",
      "Responsive Websites",
    ],
  },
  {
    emoji: "🧩",
    title: "Brand Identity",
    summary: "Systems that keep every touchpoint recognizably one thing.",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Color Systems",
      "Typography",
      "Brand Assets",
    ],
  },
  {
    emoji: "📱",
    title: "Social Media Design",
    summary: "Scroll-stopping creative built for every platform.",
    items: [
      "Instagram Posts",
      "Story Templates",
      "Carousel Designs",
      "Highlight Covers",
      "Campaign Kits",
    ],
  },
  {
    emoji: "✨",
    title: "Canva Expert",
    summary: "Fast, on-brand production at team scale.",
    items: [
      "Canva Templates",
      "Marketing Creatives",
      "Social Media Kits",
      "Business Designs",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: EASE }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((e) => !e)}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-neon-red/30 hover:bg-white/[0.04] lg:p-9 xl:p-11"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-neon-red/0 to-electric-blue/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:from-neon-red/15 group-hover:to-electric-blue/10 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl transition-transform duration-300 group-hover:scale-105 lg:size-16 lg:text-3xl xl:size-20 xl:text-4xl">
          <span aria-hidden>{service.emoji}</span>
        </div>
        <ArrowUpRight
          className={cn(
            "size-5 text-muted-foreground transition-all duration-300 group-hover:text-neon-red xl:size-6",
            expanded && "translate-x-1 -translate-y-1"
          )}
        />
      </div>

      <h3 className="relative mt-6 font-heading text-2xl font-bold text-white lg:mt-8 lg:text-3xl xl:mt-10 xl:text-4xl">
        {service.title}
      </h3>
      <p className="relative mt-3 text-base leading-relaxed text-muted-foreground lg:text-lg xl:text-xl">
        {service.summary}
      </p>

      <motion.div
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
          marginTop: expanded ? 20 : 0,
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative overflow-hidden"
      >
        <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
          {service.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide text-white/70 lg:text-sm xl:px-4 xl:py-2 xl:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="relative mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neon-red lg:text-sm xl:mt-8 xl:text-base">
        Learn more
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 xl:size-4" />
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-neon-red/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-[min(94vw,2700px)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="04"
            label="Services"
            heading="I don't just design graphics — I design complete visual experiences."
            className="max-w-4xl"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
