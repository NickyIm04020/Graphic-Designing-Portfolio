"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

const credentials = [
  {
    icon: Briefcase,
    title: "Creative Designer",
    subtitle: "E-Cell, IIIT Bhubaneswar",
  },
  {
    icon: GraduationCap,
    title: "B.Tech, Computer Science & Engineering",
    subtitle: "IIIT Bhubaneswar",
  },
  {
    icon: Sparkles,
    title: "Design partner to faculty & research teams",
    subtitle: "Presentations · Posters · Branding",
  },
];

const strengths = [
  "Visual Storytelling",
  "Brand Identity",
  "Presentation Design",
  "Typography & Layout",
  "Poster & Print Design",
  "Social Media Design",
  "Canva Expert",
  "Website Design",
  "Creative Direction",
  "Design Systems",
  "Cross-Functional Collaboration",
  "Attention to Detail",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function About({ hasPhoto }: { hasPhoto: boolean }) {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      {/* faint corner glow to tie into the hero's neon-void language */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-electric-blue/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[min(94vw,2700px)]">
        <SectionHeader
          index="01"
          label="About"
          heading="Design with an engineer's discipline."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[420px_1fr] lg:gap-16 xl:grid-cols-[500px_1fr] xl:gap-24 2xl:grid-cols-[580px_1fr] 2xl:gap-28">
          {/* Photo + credentials column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card to-surface shadow-[0_30px_70px_-25px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.06] ring-offset-2 ring-offset-background"
            >
              {hasPhoto ? (
                <>
                  <Image
                    src="/profile-photo.jpg"
                    alt={siteConfig.name}
                    fill
                    sizes="(min-width: 1536px) 580px, (min-width: 1280px) 500px, (min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_15px_rgba(0,0,0,0.3)]" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-8xl font-bold text-white/[0.08]">
                      {initials(siteConfig.name)}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,36,41,0.15),transparent_60%)]" />
                </>
              )}
              {!hasPhoto && (
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-background/60 px-5 py-3 backdrop-blur-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Photo coming soon
                  </p>
                </div>
              )}
            </motion.div>

            <div className="flex flex-col gap-3">
              {credentials.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 xl:gap-4 xl:p-5"
                >
                  <item.icon className="mt-0.5 size-5 shrink-0 text-neon-red xl:size-6" />
                  <div>
                    <p className="text-base font-medium leading-snug text-white xl:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground xl:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copy column */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="font-heading text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[3.5rem]"
            >
              I build the visual layer for teams that move fast and can&rsquo;t
              afford it to look rushed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground lg:text-xl xl:text-2xl 2xl:text-[1.7rem]"
            >
              <p>
                I&rsquo;m a creative designer working across graphic design,
                presentation design, brand identity, and website design
                &mdash; currently with E-Cell, IIIT Bhubaneswar, where
                I&rsquo;m responsible for how every event, campaign, and
                stakeholder touchpoint looks and reads: posters, decks,
                social creative, and the brand guidelines that keep a dozen
                collaborators consistent.
              </p>
              <p>
                Faculty bring me the work that has to hold up in front of a
                room: conference posters, thesis defense decks, certificates,
                department branding. A Computer Science degree means I can
                sit inside the technical detail of a project long enough to
                design around it accurately, not just decorate the surface.
              </p>
              <p>
                I&rsquo;m a self-learner by default &mdash; constantly
                testing new design trends, tools, and creative workflows,
                and folding whatever actually works back into how I design.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
              className="border-l-2 border-neon-red py-1 pl-6 font-heading text-xl font-medium leading-snug text-white/90 lg:text-2xl xl:text-3xl 2xl:text-[2.1rem]"
            >
              Good design doesn&rsquo;t decorate a problem. It resolves one
              &mdash; and it should still make someone feel something on the
              way there.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
              className="flex flex-wrap gap-2"
            >
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:border-white/20 hover:text-white lg:text-sm xl:px-4 xl:py-2.5 xl:text-base"
                >
                  {strength}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
