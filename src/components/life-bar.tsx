"use client";

import { useEffect, useRef, useState } from "react";

const LIFE_EXPECTANCY = 80.4;
const BIRTH_DATE = new Date("2002-06-14").getTime();
const YEAR_MS = 1000 * 60 * 60 * 24 * 365.25;

const ageNow = () => (Date.now() - BIRTH_DATE) / YEAR_MS;

// The thin bar along the bottom edge: how much of an average Danish life is used up
export function LifeBar() {
  const [percentage, setPercentage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const ageRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const start = setTimeout(
      () => setPercentage((ageNow() / LIFE_EXPECTANCY) * 100),
      300
    );

    let raf = 0;
    const tick = () => {
      const age = ageNow();
      if (ageRef.current) ageRef.current.textContent = age.toFixed(9);
      if (pctRef.current) {
        pctRef.current.textContent = ((age / LIFE_EXPECTANCY) * 100).toFixed(5);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, []);

  const width = `${Math.min(percentage, 100)}%`;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 h-3 flex items-end"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative w-full h-[2px] bg-paper/[0.06]">
        <div
          className="absolute inset-y-0 left-0 bg-paper/70 transition-[width] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width }}
        />
        <div
          className="absolute bottom-3 -translate-x-full pr-1 font-mono text-[12px] uppercase tracking-[0.05em] tabular-nums whitespace-nowrap pointer-events-none transition-opacity duration-300"
          style={{ left: width, opacity: hovering ? 1 : 0 }}
        >
          <span className="text-paper/90">
            <span ref={ageRef} /> years
          </span>
          <span className="text-paper/40">
            {" "}
            · <span ref={pctRef} />% of {LIFE_EXPECTANCY}
          </span>
        </div>
      </div>
    </div>
  );
}
