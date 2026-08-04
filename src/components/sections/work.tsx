"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { BentoProjectCard } from "@/components/gallery/bento-project-card";
import { ProjectViewer } from "@/components/gallery/project-viewer";
import { featuredProjects, type Project } from "@/lib/projects";

// Explicit grid placement, not auto-flow — a fixed 4-item bento with mixed
// spans needs a fixed position per cell or the browser's auto-placement
// leaves gaps. Sizes are matched to each cover's real aspect ratio: the one
// landscape cover (Snabbit) gets the wide slot, portrait covers go
// feature/square, so nothing sits letterboxed inside a mismatched cell.
const BENTO_LAYOUT: Record<
  string,
  { size: "feature" | "wide" | "square"; position: string }
> = {
  shiprocket: {
    size: "feature",
    position: "lg:col-start-1 lg:row-start-1",
  },
  snabbit: {
    size: "wide",
    position: "lg:col-start-3 lg:row-start-1",
  },
  "zomato-sweets": {
    size: "square",
    position: "lg:col-start-3 lg:row-start-2",
  },
  "anrf-seminar": {
    size: "square",
    position: "lg:col-start-4 lg:row-start-2",
  },
};

export function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-neon-red/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-[min(94vw,168.75rem)]">
        <SectionHeader
          index="05"
          label="Featured Work"
          heading="The pieces that get sent first."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4 lg:auto-rows-[17.5rem] lg:gap-6 xl:auto-rows-[20rem] xl:gap-7 2xl:auto-rows-[22.5rem] 2xl:gap-8">
          {featuredProjects.map((project, i) => {
            const layout = BENTO_LAYOUT[project.slug] ?? {
              size: "square" as const,
              position: "",
            };
            return (
              <BentoProjectCard
                key={project.slug}
                project={project}
                size={layout.size}
                positionClassName={layout.position}
                index={i}
                onOpen={() => setActiveProject(project)}
              />
            );
          })}
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
