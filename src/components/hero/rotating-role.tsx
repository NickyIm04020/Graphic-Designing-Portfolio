"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 2400;

export function RotatingRole({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span layout className={className} style={{ display: "inline-flex" }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={roles[index]}
          layout
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="whitespace-nowrap bg-gradient-to-r from-neon-red to-electric-blue bg-clip-text text-transparent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
