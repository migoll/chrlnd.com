"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useNextSectionIndex } from "@/components/section-index";

export interface SectionProps {
  children?: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
  delayIndex?: number; // Optional prop to control the delay for animation
  hideLine?: boolean; // Optional prop to hide the top line
}

export function Section(props: SectionProps) {
  const { children, contentClassName, containerClassName, hideLine } = props;
  const delayIndex = useNextSectionIndex();

  return (
    <div className={clsx("relative", containerClassName)}>
      {/* Én top-linje fra venstre → hele bredden */}
      {!hideLine && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{
            duration: delayIndex === 0 ? 0.4 : 1,
            delay: (delayIndex ?? 0) * 0.1,
          }}
          className="absolute top-0 left-0 h-px w-full bg-black dark:bg-white origin-left"
        />
      )}

      {/* Content wrapper */}
      <div
        className={clsx(
          "relative z-10 max-w-full mx-auto box-content px-8 custom-sm:max-w-screen-sm custom-sm:w-full",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
