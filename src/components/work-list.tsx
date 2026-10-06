"use client";

import { useRef, useState } from "react";
import { clsx } from "clsx";
import { WORK, previewOf } from "@/lib/work";
import { handoff } from "@/lib/work-handoff";
import { CoverCard } from "@/components/work-cover";

export function WorkList() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const open = (e: React.MouseEvent<HTMLAnchorElement>, i: number) => {
    // Modified clicks still open the standalone page in a new tab or window
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();

    const card = previewRef.current?.getBoundingClientRect();
    handoff.from = active === i && card && card.width > 0 ? card : null;
    handoff.animate = true;
    // Only hand focus back on close for keyboard users; a mouse user has moved on
    handoff.trigger = e.detail === 0 ? e.currentTarget : null;
    handoff.pushed = true;
    window.history.pushState(null, "", `/work/${WORK[i].slug}`);
  };

  return (
    <div data-work-list className="relative">
      {/* Preview: every cover is mounted up front so hovering never waits on a load */}
      <div
        ref={previewRef}
        aria-hidden
        className={clsx(
          "pointer-events-none absolute bottom-full right-0 mb-8 hidden w-[300px] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
          active === null ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <CoverCard>
          {WORK.map((project, i) => (
            <CoverCard
              key={project.slug}
              src={previewOf(project).src}
              sizes="300px"
              className={clsx(
                "!absolute inset-0 !bg-transparent !ring-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                active === i ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
              )}
            />
          ))}
        </CoverCard>
      </div>

      <h2 className="mb-3 font-mono text-[14px] uppercase tracking-[0.05em] text-paper/40">
        Selected work
      </h2>
      <ul onMouseLeave={() => setActive(null)}>
        {WORK.map((project, i) => (
          <li key={project.slug} className="text-base font-normal">
            <a
              href={`/work/${project.slug}`}
              onClick={(e) => open(e, i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={clsx(
                "grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-4 py-[7px] transition-opacity duration-300",
                active !== null && active !== i && "opacity-30"
              )}
            >
              <span className="font-mono text-[14px] tabular-nums text-paper/40">
                {project.year}
              </span>
              <span className="text-[15px]">{project.name}</span>
              <span className="font-mono text-[14px] uppercase tracking-[0.05em] text-paper/40">
                {project.kind}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
