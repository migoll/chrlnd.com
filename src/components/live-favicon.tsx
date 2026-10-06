"use client";

import { useEffect } from "react";
import { nextGeneration } from "@/lib/life";
import { ALIVE, DEAD, ICON_BOARD, iconGeometry, iconStart } from "@/lib/glider";

// Drawn at 2x; the browser scales it down for the tab
const SIZE = 64;
const TICK_MS = 400;

// The tab icon is alive too: the glider from the static favicon walks its board
export function LiveFavicon() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const links = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]'));
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    if (!links.length || !ctx) return;

    const original = links.map((link) => link.href);
    const { pad, gap, cell, radius } = iconGeometry(SIZE);
    let grid = iconStart();

    const tick = () => {
      grid = nextGeneration(grid, ICON_BOARD, ICON_BOARD);
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.fillStyle = "#111111";
      ctx.beginPath();
      ctx.roundRect(0, 0, SIZE, SIZE, radius);
      ctx.fill();
      for (let y = 0; y < ICON_BOARD; y++) {
        for (let x = 0; x < ICON_BOARD; x++) {
          ctx.fillStyle = grid[y * ICON_BOARD + x] ? ALIVE : DEAD;
          ctx.fillRect(pad + x * (cell + gap), pad + y * (cell + gap), cell, cell);
        }
      }
      const href = canvas.toDataURL("image/png");
      links.forEach((link) => (link.href = href));
    };

    const id = setInterval(tick, TICK_MS);
    return () => {
      clearInterval(id);
      links.forEach((link, i) => (link.href = original[i]));
    };
  }, []);

  return null;
}
