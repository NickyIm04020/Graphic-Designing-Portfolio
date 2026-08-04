"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-10 lg:px-10 lg:py-14 xl:px-16 xl:py-16">
      <div className="mx-auto flex max-w-[min(94vw,168.75rem)] flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-lg font-bold tracking-tight text-white xl:text-xl"
        >
          {siteConfig.shortName}
          <span className="text-neon-red">.</span>
        </motion.a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 xl:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-white xl:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground xl:text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
