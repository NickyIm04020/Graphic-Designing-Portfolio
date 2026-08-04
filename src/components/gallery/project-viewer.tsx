"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  X,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectViewer({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl transition-opacity duration-200 data-closed:pointer-events-none data-ending-style:opacity-0 data-starting-style:opacity-0" />
        {project && (
          <ViewerBody key={project.slug} project={project} open={open} />
        )}
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function ViewerBody({ project, open }: { project: Project; open: boolean }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const pageCount = project.pages.length;
  const page = project.pages[pageIndex];

  function goTo(delta: number) {
    setZoomed(false);
    setPageIndex((i) => (i + delta + pageCount) % pageCount);
  }

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <DialogPrimitive.Popup
      className="fixed inset-0 z-[100] flex flex-col outline-none data-closed:pointer-events-none data-ending-style:opacity-0 data-starting-style:opacity-0"
      onDoubleClick={() => setZoomed((z) => !z)}
    >
      <DialogPrimitive.Title className="sr-only">
        {project.title}
      </DialogPrimitive.Title>
      <DialogPrimitive.Description className="sr-only">
        {project.description}
      </DialogPrimitive.Description>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-5 py-4 lg:px-10 lg:py-6 xl:px-14 xl:py-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-red lg:text-xs xl:text-sm">
            {project.categories.join(" · ")}
          </p>
          <h2 className="mt-1 font-heading text-xl font-bold text-white lg:text-2xl xl:text-3xl">
            {project.title}
          </h2>
          <p className="text-sm text-muted-foreground xl:text-base">{project.subtitle}</p>
        </div>
        <DialogPrimitive.Close
          className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10 xl:p-3.5"
          aria-label="Close"
        >
          <X className="size-5 xl:size-6" />
        </DialogPrimitive.Close>
      </div>

      {/* Image stage */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 lg:px-16 lg:pb-8"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50) goTo(delta > 0 ? -1 : 1);
          touchStartX.current = null;
        }}
      >
        {pageCount > 1 && (
          <button
            onClick={() => goTo(-1)}
            aria-label="Previous page"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-background/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:left-6 lg:p-3"
          >
            <ChevronLeft className="size-5 lg:size-6" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setZoomed((z) => !z)}
            onWheel={(e) => {
              if (e.deltaY < 0) setZoomed(true);
              if (e.deltaY > 0) setZoomed(false);
            }}
            className={cn(
              "relative max-h-full max-w-full cursor-zoom-in overflow-hidden rounded-lg shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9)] transition-transform duration-300",
              zoomed && "cursor-zoom-out"
            )}
            style={{
              aspectRatio: `${page.width} / ${page.height}`,
              width:
                page.width / page.height > 1.4 ? "min(90vw, 1400px)" : "auto",
              height: zoomed ? undefined : "min(78svh, 900px)",
            }}
          >
            <motion.div
              animate={{ scale: zoomed ? 1.9 : 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              drag={zoomed}
              dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
              dragElastic={0.1}
              className="relative h-full w-full"
            >
              <Image
                src={page.src}
                alt={`${project.title} — page ${pageIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {pageCount > 1 && (
          <button
            onClick={() => goTo(1)}
            aria-label="Next page"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-background/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:right-6 lg:p-3"
          >
            <ChevronRight className="size-5 lg:size-6" />
          </button>
        )}

        <button
          onClick={() => setZoomed((z) => !z)}
          aria-label={zoomed ? "Zoom out" : "Zoom in"}
          className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-background/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:bottom-8 lg:right-8"
        >
          {zoomed ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </button>
      </div>

      {/* Footer: description + tools + page dots */}
      <div className="border-t border-white/[0.06] bg-background/60 px-5 py-4 backdrop-blur-sm lg:px-10 lg:py-5 xl:px-14 xl:py-7">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between xl:max-w-6xl">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground xl:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white/70 xl:px-3.5 xl:py-1.5 xl:text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {project.pages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setZoomed(false);
                  setPageIndex(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === pageIndex
                    ? "w-6 bg-neon-red"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </DialogPrimitive.Popup>
  );
}
