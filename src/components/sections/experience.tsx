"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const EASE = [0.16, 1, 0.3, 1] as const;

type ExperienceEntry = {
  status: string;
  role: string;
  org: string;
  summary: string;
  highlights: string[];
};

const entries: ExperienceEntry[] = [
  {
    status: "Current",
    role: "Creative Designer",
    org: "E-Cell, IIIT Bhubaneswar",
    summary:
      "Leading the design function for the college's entrepreneurship cell — the person accountable when an event's visual identity has to come together across a dozen moving parts and just as many collaborators.",
    highlights: [
      "Direct both the design and technical teams, translating event briefs into a shared visual system",
      "Own branding for flagship campus events end to end — posters, stage identity, and campaign creative",
      "Design the social media rollout and marketing assets that carry each event's identity across platforms",
      "Build and maintain presentation decks used for sponsor pitches and internal reviews",
      "Rebuilt the team's design workflow to cut turnaround time and keep output consistent under deadline pressure",
    ],
  },
  {
    status: "Ongoing",
    role: "Design Partner to Faculty",
    org: "IIIT Bhubaneswar",
    summary:
      "The go-to for professors and research groups who need academic work to look as considered as the research behind it — often on short notice, always under scrutiny.",
    highlights: [
      "Designed conference posters and thesis defense decks for faculty-led research presentations",
      "Produced logos, certificates, and brand assets for departmental initiatives and seminars",
      "Built flyers and pamphlets for academic events, seminars, and outreach programs",
      "Worked directly with stakeholders to translate dense technical content into clear visual narratives",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-neon-red/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[min(94vw,168.75rem)]">
        <SectionHeader
          index="02"
          label="Experience"
          heading="Leadership, on a deadline."
        />

        <div className="relative mt-14 lg:mt-20">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-neon-red/60 via-white/10 to-transparent sm:block" />

          <div className="flex flex-col gap-10 lg:gap-14">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative pl-0 sm:pl-10"
              >
                <span className="absolute left-0 top-2 hidden size-[15px] items-center justify-center rounded-full border-2 border-neon-red bg-background sm:flex">
                  <span className="size-1.5 rounded-full bg-neon-red shadow-[0_0_8px_2px_rgba(230,36,41,0.6)]" />
                </span>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] lg:p-8 xl:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-neon-red/30 bg-neon-red/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neon-red xl:px-4 xl:py-2 xl:text-sm">
                      {entry.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-3xl font-bold text-white lg:text-4xl xl:mt-5 xl:text-5xl">
                    {entry.role}
                  </h3>
                  <p className="mt-1.5 font-mono text-base uppercase tracking-[0.1em] text-electric-blue lg:text-lg xl:text-xl">
                    {entry.org}
                  </p>

                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl xl:max-w-4xl xl:text-2xl">
                    {entry.summary}
                  </p>

                  <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2 xl:mt-9 xl:gap-y-5">
                    {entry.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-base leading-relaxed text-white/80 xl:text-lg"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-white/30" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
