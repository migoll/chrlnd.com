"use client";

// section-index.ts
import { createContext, useContext, useRef } from "react";

const SectionIndexContext = createContext<() => number>(() => 0);

export function SectionIndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const counter = useRef(0);
  const getNextIndex = () => counter.current++;

  return (
    <SectionIndexContext.Provider value={getNextIndex}>
      {children}
    </SectionIndexContext.Provider>
  );
}

export function useNextSectionIndex() {
  const getIndex = useContext(SectionIndexContext);
  return getIndex();
}
