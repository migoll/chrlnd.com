"use client";

import { motion } from "framer-motion";

export function VerticalLines() {
  return (
    <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 z-0 w-full max-w-[704px] h-full">
      {/* Left Line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 1 }}
        animate={{ scaleY: 1, opacity: 0.2 }}
        transition={{
          scaleY: { duration: 1.2 },
          opacity: { delay: 1.2, duration: 0.4 },
        }}
        className="absolute left-0 top-0 w-px h-full bg-black dark:bg-white origin-top"
      />

      {/* Right Line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 1 }}
        animate={{ scaleY: 1, opacity: 0.2 }}
        transition={{
          scaleY: { duration: 1.2, delay: 0.4 },
          opacity: { delay: 1.2, duration: 0.4 },
        }}
        className="absolute right-0 top-0 w-px h-full bg-black dark:bg-white origin-top"
      />
    </div>
  );
}
