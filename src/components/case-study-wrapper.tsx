"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function CaseStudyWrapper({
  children,
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  const visible = activeIndex === index;

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: visible ? 1 : 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
