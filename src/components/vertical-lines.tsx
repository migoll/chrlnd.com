"use client";

import { motion } from "framer-motion";

export function VerticalLines() {
  return (
    <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 z-0 w-full max-w-[704px] h-full">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 w-px h-full bg-white/20 dark:bg-white/20 origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute right-0 top-0 w-px h-full bg-white/20 dark:bg-white/20 origin-top"
      />
    </div>
  );
}
