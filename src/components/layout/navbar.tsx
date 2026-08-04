"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-white/[0.03] bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[4.75rem] xl:h-24 xl:max-w-[min(94vw,168.75rem)] xl:px-8 2xl:h-28 2xl:px-14">
        <a
          href="#home"
          className="font-heading text-xl font-bold tracking-tight text-white lg:text-2xl xl:text-2xl 2xl:text-3xl"
        >
          {siteConfig.shortName}
          <span className="text-neon-red">.</span>
        </a>

        <ul className="hidden items-center gap-8 xl:flex xl:gap-6 2xl:gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-white lg:text-sm xl:text-[0.8125rem] 2xl:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            size="sm"
            className="rounded-full px-5 text-sm shadow-[0_0_16px_rgba(230,36,41,0.3)] lg:h-11 lg:px-6 lg:text-base xl:h-12 xl:px-6 xl:text-base 2xl:h-14 2xl:px-8 2xl:text-lg"
          >
            Get in Touch
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
          <SheetContent
            side="right"
            className="border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-xl">
                {siteConfig.shortName}
                <span className="text-neon-red">.</span>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto p-4">
              <Button
                render={<a href="#contact" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="w-full rounded-full"
              >
                Get in Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
