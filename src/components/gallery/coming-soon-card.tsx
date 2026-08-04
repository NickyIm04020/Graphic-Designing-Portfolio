import { Sparkles } from "lucide-react";

export function ComingSoonCard({ category }: { category: string }) {
  return (
    <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-white/12 bg-white/[0.015] p-6 text-center">
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />
      <Sparkles className="size-5 text-muted-foreground xl:size-6" />
      <div>
        <p className="font-heading text-base font-semibold text-white/70 xl:text-lg">
          {category}
        </p>
        <p className="mt-1 text-xs text-muted-foreground xl:text-sm">
          New work landing here soon
        </p>
      </div>
    </div>
  );
}
