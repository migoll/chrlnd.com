"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { WORK, getProject, type Project } from "@/lib/work";
import { handoff } from "@/lib/work-handoff";
import { TALL } from "@/lib/screens";
import { WorkDetail } from "@/components/work-detail";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const SITE_TITLE = "Christian Lund";

const slugFrom = (pathname: string | null) =>
  pathname?.match(/^\/work\/([^/]+)/)?.[1] ?? "";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const parts = (sheet: HTMLElement) => ({
  backdrop: sheet.querySelector<HTMLElement>("[data-backdrop]"),
  cover: sheet.querySelector<HTMLElement>("[data-cover]"),
  items: sheet.querySelectorAll<HTMLElement>("[data-reveal]"),
});

// Moves a box from one viewport rect onto another, scaling from its top-left corner
const flip = (from: DOMRect, to: DOMRect) =>
  `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width})`;

// Closing steps back to the entry the list pushed; a directly opened link has none, so swap the URL instead
const close = () => {
  if (handoff.pushed) window.history.back();
  else window.history.replaceState(null, "", "/");
};

const goTo = (slug: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  window.history.replaceState(null, "", `/work/${slug}`);
};

function animateIn(sheet: HTMLElement, from: DOMRect | null, withBackdrop: boolean) {
  const reduce = reducedMotion();
  const { backdrop, cover, items } = parts(sheet);
  const rise = reduce ? "none" : "translateY(16px)";

  if (withBackdrop) {
    backdrop?.animate({ opacity: [0, 1] }, { duration: reduce ? 150 : 450, easing: EASE });
  }
  if (cover && from && !reduce) {
    // The cover grows out of the hover preview it was clicked from
    cover.animate(
      { transform: [flip(from, cover.getBoundingClientRect()), "none"] },
      { duration: 750, easing: EASE }
    );
  } else {
    cover?.animate(
      { opacity: [0, 1], transform: [rise, "none"] },
      { duration: 600, delay: 100, easing: EASE, fill: "backwards" }
    );
  }
  items.forEach((el, i) =>
    el.animate(
      { opacity: [0, 1], transform: [rise, "none"] },
      { duration: 600, delay: 120 + i * 50, easing: EASE, fill: "backwards" }
    )
  );
}

function animateOut(sheet: HTMLElement, origin: DOMRect | null) {
  const reduce = reducedMotion();
  const { backdrop, cover, items } = parts(sheet);
  const running: Animation[] = [];

  items.forEach((el) =>
    running.push(el.animate({ opacity: [1, 0] }, { duration: 200, easing: "ease-out", fill: "forwards" }))
  );
  if (cover) {
    const now = cover.getBoundingClientRect();
    const onScreen = now.bottom > 0 && now.top < window.innerHeight;
    if (origin && onScreen && !reduce) {
      // Shrink back into the preview spot, then let go
      const back = flip(origin, now);
      running.push(
        cover.animate(
          [
            { transform: "none", opacity: 1 },
            { transform: back, opacity: 1, offset: 0.8 },
            { transform: back, opacity: 0 },
          ],
          { duration: 650, easing: EASE, fill: "forwards" }
        )
      );
    } else {
      running.push(cover.animate({ opacity: [1, 0] }, { duration: 250, easing: "ease-out", fill: "forwards" }));
    }
  }
  if (backdrop) {
    running.push(
      backdrop.animate(
        { opacity: [1, 0] },
        { duration: reduce ? 150 : 500, delay: reduce ? 0 : 100, easing: EASE, fill: "forwards" }
      )
    );
  }
  return Promise.all(running.map((a) => a.finished.catch(() => undefined)));
}

// A project opened on top of the home page. The URL is the source of truth, so clicks,
// the close button, Esc, and the browser's back and forward buttons all go through it
export function WorkSheet() {
  const routed = getProject(slugFrom(usePathname())) ?? null;

  // What's on screen. It trails the URL while the closing animation plays
  const [shown, setShown] = useState<Project | null>(routed);
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shownSlug = useRef(routed?.slug ?? null);
  // Where the cover grew from, so closing can shrink it back into place
  const originRef = useRef<DOMRect | null>(null);
  // Bumped on every open, so a close that's still animating knows it's been overtaken
  const run = useRef(0);
  // Which project's next-project bar is slid in. Keyed by slug, so switching hides it
  const [nextFor, setNextFor] = useState<string | null>(null);

  useEffect(() => {
    const sheet = sheetRef.current;
    if (routed) {
      run.current++;
      sheet?.getAnimations({ subtree: true }).forEach((a) => a.cancel());
      setShown(routed);
      return;
    }
    if (!sheet) return;

    const current = ++run.current;
    handoff.pushed = false;
    animateOut(sheet, originRef.current).then(() => {
      if (current !== run.current) return;
      originRef.current = null;
      setShown(null);
      handoff.trigger?.focus({ preventScroll: true });
      handoff.trigger = null;
    });
  }, [routed]);

  // Runs before paint, so the cover never flashes in its final spot before flying there
  useLayoutEffect(() => {
    const previous = shownSlug.current;
    shownSlug.current = shown?.slug ?? null;
    const sheet = sheetRef.current;
    if (!shown || !sheet) return;

    if (previous && previous !== shown.slug) {
      // Switched project from inside the sheet
      originRef.current = null;
      sheet.scrollTop = 0;
      animateIn(sheet, null, false);
      return;
    }
    // A directly opened link is already rendered open by the server
    if (!handoff.animate) return;
    handoff.animate = false;
    originRef.current = handoff.from;
    handoff.from = null;
    animateIn(sheet, originRef.current, true);
    closeRef.current?.focus({ preventScroll: true });
  }, [shown]);

  useEffect(() => {
    if (!shown) return;
    const root = document.documentElement;
    const page = document.querySelectorAll<HTMLElement>("[data-page]");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    root.style.overflow = "hidden";
    page.forEach((el) => el.setAttribute("inert", ""));
    document.title = `${shown.name} — ${SITE_TITLE}`;
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      page.forEach((el) => el.removeAttribute("inert"));
      document.title = SITE_TITLE;
      window.removeEventListener("keydown", onKey);
    };
  }, [shown]);

  // On tall screens the sheet never scrolls, so nothing can stretch or bounce.
  // Scrolling down slides the next-project bar in; scrolling up slides it back out
  useEffect(() => {
    const sheet = sheetRef.current;
    if (!shown || !sheet) return;
    const tall = window.matchMedia(TALL);
    const reveal = (show: boolean) => {
      if (tall.matches) setNextFor(show ? shown.slug : null);
    };
    let touchY: number | null = null;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 2) reveal(e.deltaY > 0);
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY === null) return;
      const dy = touchY - e.touches[0].clientY;
      if (Math.abs(dy) < 24) return;
      reveal(dy > 0);
      touchY = null;
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "End"].includes(e.key)) reveal(true);
      if (["ArrowUp", "PageUp", "Home"].includes(e.key)) reveal(false);
    };

    sheet.addEventListener("wheel", onWheel, { passive: true });
    sheet.addEventListener("touchstart", onTouchStart, { passive: true });
    sheet.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      sheet.removeEventListener("wheel", onWheel);
      sheet.removeEventListener("touchstart", onTouchStart);
      sheet.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [shown]);

  if (!shown) return null;

  const index = WORK.indexOf(shown);
  const next = WORK[(index + 1) % WORK.length];

  return (
    <div
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-title"
      className="fixed inset-0 z-40 overflow-y-auto overscroll-none tall:overflow-hidden"
    >
      <div data-backdrop className="fixed inset-0 bg-ink" />
      <button
        ref={closeRef}
        data-reveal
        type="button"
        onClick={close}
        className="fixed right-6 top-6 z-10 flex items-center gap-3 font-mono text-[14px] uppercase tracking-[0.05em] text-paper/60 transition-colors hover:text-paper tall:right-[10vw] tall:top-[4.5vh]"
      >
        Close
        <kbd className="rounded border border-paper/15 px-1.5 py-px font-mono text-[11px] text-paper/40">
          Esc
        </kbd>
      </button>
      <div className="relative">
        <WorkDetail
          key={shown.slug}
          project={shown}
          index={index}
          total={WORK.length}
          next={next}
          nextShown={nextFor === shown.slug}
          onNext={goTo(next.slug)}
        />
      </div>
    </div>
  );
}
