"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ExploreMore() {
  return (
    <section
      id="explore-more"
      className="relative w-full overflow-hidden px-6 py-20 lg:px-10 lg:py-24 xl:px-16 2xl:px-20"
    >
      <div className="relative mx-auto max-w-[min(94vw,2700px)]">
        <SectionHeader
          index="07"
          label="Explore More"
          heading="There's more where that came from."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mt-12 flex flex-col items-start gap-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:p-14 xl:p-16"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric-blue/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-neon-red/10 blur-[120px]" />

          <div className="relative flex items-start gap-5 xl:gap-7">
            <div className="hidden shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex xl:p-5">
              <FolderOpen className="size-7 text-electric-blue lg:size-8 xl:size-10" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white lg:text-3xl xl:text-4xl">
                View My Previous Portfolio
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg xl:max-w-2xl xl:text-xl">
                An earlier archive of additional projects and previous work
                lives on a separate site &mdash; worth a look if you want
                more range before reaching out.
              </p>
            </div>
          </div>

          <Button
            render={
              <a
                href={siteConfig.social.previousPortfolio}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            size="lg"
            variant="outline"
            className="relative h-14 shrink-0 gap-2 rounded-full border-white/15 bg-white/[0.03] px-7 text-base backdrop-blur-sm hover:bg-white/[0.08] lg:h-16 lg:px-9 lg:text-lg xl:h-[4.5rem] xl:px-10 xl:text-xl"
          >
            Explore More Work
            <ArrowUpRight className="size-5 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 xl:size-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
