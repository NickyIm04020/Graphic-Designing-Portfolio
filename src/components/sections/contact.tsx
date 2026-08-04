"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden px-6 py-24 lg:px-10 lg:py-32 xl:px-16 2xl:px-20"
    >
      {/* Decorative radiating line pattern, echoing the hero's web motif */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        viewBox="0 0 800 800"
        fill="none"
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          // Rounded to a fixed precision so server- and client-computed
          // trig values always serialize identically (avoids hydration
          // mismatches from last-bit Math.cos/sin differences across JS engines).
          const x2 = (400 + Math.cos(angle) * 420).toFixed(2);
          const y2 = (400 + Math.sin(angle) * 420).toFixed(2);
          return (
            <line
              key={i}
              x1="400"
              y1="400"
              x2={x2}
              y2={y2}
              stroke={i % 4 === 0 ? "#e62429" : "#ffffff"}
              strokeWidth="1"
            />
          );
        })}
        {[160, 280, 400].map((r) => (
          <circle key={r} cx="400" cy="400" r={r} stroke="#ffffff" strokeWidth="1" />
        ))}
      </svg>

      <div className="relative mx-auto flex max-w-[min(94vw,2700px)] flex-col items-center text-center">
        <SectionHeader index="08" label="Contact" heading="Let's build something worth sending twice." align="center" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl xl:max-w-3xl xl:text-2xl"
        >
          Open to graphic design, presentation design, brand identity, and
          website design work &mdash; freelance, internships, or full-time.
          If it needs to look considered, I want to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:mt-12"
        >
          <Button
            render={<a href={`mailto:${siteConfig.email}`} />}
            nativeButton={false}
            size="lg"
            className="h-14 gap-2 rounded-full px-8 text-lg shadow-[0_0_24px_rgba(230,36,41,0.35)] hover:shadow-[0_0_32px_rgba(230,36,41,0.5)] lg:h-[4.5rem] lg:px-10 lg:text-xl xl:h-20 xl:px-12 xl:text-2xl"
          >
            <Mail className="size-5 lg:size-6 xl:size-7" />
            {siteConfig.email}
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="lg"
            className="h-14 gap-2 rounded-full border-white/15 bg-white/[0.02] px-6 text-lg backdrop-blur-sm hover:bg-white/[0.06] lg:h-[4.5rem] lg:text-xl xl:h-20 xl:px-8 xl:text-2xl"
          >
            {copied ? <Check className="size-4 text-electric-blue" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy email"}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:mt-14"
        >
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] py-3 pl-4 pr-5 text-sm text-white/80 backdrop-blur-sm transition-colors hover:border-electric-blue/40 hover:bg-white/[0.06] hover:text-white lg:py-3.5 lg:pl-5 lg:pr-6 lg:text-base xl:py-4 xl:pl-6 xl:pr-7 xl:text-lg"
          >
            <LinkedInIcon className="size-4 text-electric-blue lg:size-5 xl:size-6" />
            LinkedIn
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] py-3 pl-4 pr-5 text-sm text-white/80 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/[0.06] hover:text-white lg:py-3.5 lg:pl-5 lg:pr-6 lg:text-base xl:py-4 xl:pl-6 xl:pr-7 xl:text-lg"
          >
            <GitHubIcon className="size-4 lg:size-5 xl:size-6" />
            GitHub
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
