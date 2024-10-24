// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";
// scroll animation fra kilde: https://www.framer.com/motion/scroll-animations/
import { motion } from "framer-motion";

// clsx sørger for at jeg kan have to forskellige class strings på samme element fx containerClassName og contentClassName
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface SectionProps {
  children?: ReactNode;
  contentClassName?: string;
  containerClassName?: string;
}

export function Section(props: SectionProps) {
  const { children, contentClassName, containerClassName } = props;

  return (
    <motion.div
      className={clsx(
        "border-b border-neutral-950 last:border-b-0 border-opacity-10",
        containerClassName
      )}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={clsx(
          "w-full max-w-screen-sm mx-auto border-x border-neutral-950 border-opacity-10 box-content px-8",
          contentClassName
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
