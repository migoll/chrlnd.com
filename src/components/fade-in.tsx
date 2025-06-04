"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px", // adjust as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
