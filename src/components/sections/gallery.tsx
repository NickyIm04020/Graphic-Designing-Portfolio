"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/gallery/project-card";
import { WebsiteProjectCard } from "@/components/gallery/website-project-card";
import { ComingSoonCard } from "@/components/gallery/coming-soon-card";
import { ProjectViewer } from "@/components/gallery/project-viewer";
import { allCategories, projects, type Project } from "@/lib/projects";
import { websiteProjects } from "@/lib/website-projects";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const FILTERS = ["All", ...allCategories] as const;
type Filter = (typeof FILTERS)[number];

const emptyCategoryPlaceholders = 2;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const showWebsites = filter === "All" || filter === "Websites";
  const showComingSoon =
    filter !== "All" && filter !== "Websites" && filtered.length === 0;

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-electric-blue/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-[min(94vw,168.75rem)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="06"
            label="Gallery"
            heading="Every project, filtered your way."
          />

          <div className="flex flex-wrap gap-2 xl:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors lg:text-sm xl:px-6 xl:py-3 xl:text-base",
                  filter === f
                    ? "border-neon-red/40 bg-neon-red/15 text-white"
                    : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
            >
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onOpen={() => setActiveProject(project)}
                />
              ))}

              {showWebsites &&
                websiteProjects.map((project, i) => (
                  <WebsiteProjectCard key={project.slug} project={project} index={i} />
                ))}

              {showComingSoon &&
                Array.from({ length: emptyCategoryPlaceholders }).map((_, i) => (
                  <ComingSoonCard key={i} category={filter} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ProjectViewer
        project={activeProject}
        open={!!activeProject}
        onOpenChange={(open) => !open && setActiveProject(null)}
      />
    </section>
  );
}
