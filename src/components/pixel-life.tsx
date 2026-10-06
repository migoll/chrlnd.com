"use client";

import { useEffect, useRef } from "react";
import { nextGeneration } from "@/lib/life";

// Conway's Game of Life on a tiny pixel grid. Hover to draw, click to drop a glider.
const CELL = 8;
const COLS = 26;
const ROWS = 26;
const TICK_MS = 140;

const GLIDER = [
  [1, 0],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
];

export function PixelLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const genRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = COLS * CELL * dpr;
    canvas.height = ROWS * CELL * dpr;
    ctx.scale(dpr, dpr);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let grid = new Uint8Array(COLS * ROWS);
    // Per-cell brightness, eased toward the cell's state so births and deaths fade
    const glow = new Float32Array(COLS * ROWS);
    let generation = 0;

    const idx = (x: number, y: number) =>
      ((y + ROWS) % ROWS) * COLS + ((x + COLS) % COLS);

    const sprinkle = (density: number) => {
      for (let i = 0; i < grid.length; i++) {
        if (Math.random() < density) grid[i] = 1;
      }
    };

    // Places a pattern centred on (cx, cy), randomly flipped and turned
    const stamp = (cells: number[][], cx: number, cy: number) => {
      const flipX = Math.random() < 0.5 ? -1 : 1;
      const flipY = Math.random() < 0.5 ? -1 : 1;
      const turn = Math.random() < 0.5;
      for (const [dx, dy] of cells) {
        const [ox, oy] = turn ? [dy - 1, dx - 1] : [dx - 1, dy - 1];
        grid[idx(cx + ox * flipX, cy + oy * flipY)] = 1;
      }
    };

    // Pure Life: after the random start, only the rules (and the visitor) change the board
    const step = () => {
      grid = nextGeneration(grid, COLS, ROWS);
      generation++;

      if (genRef.current) {
        genRef.current.textContent = generation.toLocaleString("en-US");
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, COLS * CELL, ROWS * CELL);
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = idx(x, y);
          glow[i] += (grid[i] - glow[i]) * (reduceMotion ? 1 : 0.22);
          const alpha = 0.07 + glow[i] * 0.85;
          ctx.fillStyle = `rgba(240, 240, 240, ${alpha})`;
          ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1);
        }
      }
    };

    sprinkle(0.2);

    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      if (t - last > (reduceMotion ? TICK_MS * 4 : TICK_MS)) {
        step();
        last = t;
      }
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const cellAt = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return [
        Math.floor(((e.clientX - rect.left) / rect.width) * COLS),
        Math.floor(((e.clientY - rect.top) / rect.height) * ROWS),
      ];
    };

    const onMove = (e: PointerEvent) => {
      const [x, y] = cellAt(e);
      grid[idx(x, y)] = 1;
      grid[idx(x + 1, y)] = 1;
      grid[idx(x, y + 1)] = 1;
    };
    const onDown = (e: PointerEvent) => {
      const [x, y] = cellAt(e);
      stamp(GLIDER, x, y);
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <figure className="relative flex flex-col gap-3 select-none">
      <canvas
        ref={canvasRef}
        className="cursor-crosshair touch-none"
        style={{ width: COLS * CELL, height: ROWS * CELL }}
        aria-label="Conway's Game of Life. Move over it to draw, click to drop a glider."
        role="img"
      />
      {/* The caption works like a footnote: hover or focus it for what this is */}
      <figcaption className="group/note self-start font-mono text-[12px] uppercase tracking-[0.05em] text-paper/40 tabular-nums">
        <span
          tabIndex={0}
          aria-describedby="life-note"
          className="cursor-help underline decoration-dotted decoration-paper/30 underline-offset-[0.35em] outline-none transition-colors group-hover/note:text-paper/80 focus-visible:text-paper/80"
        >
          Life, gen <span ref={genRef}>0</span>
        </span>
        <span
          id="life-note"
          role="tooltip"
          className="pointer-events-none absolute right-0 top-full z-20 w-[300px] translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/note:pointer-events-auto group-focus-within/note:translate-y-0 group-focus-within/note:opacity-100 group-hover/note:pointer-events-auto group-hover/note:translate-y-0 group-hover/note:opacity-100"
        >
          <span className="flex flex-col gap-3 rounded-md bg-[#161616] p-4 font-sans text-[14px] normal-case leading-relaxed tracking-normal text-paper/60 ring-1 ring-paper/[0.08]">
            <span className="text-paper">Conway&apos;s Game of Life</span>
            <span>
              Each tick, every cell counts its eight neighbours. Two or three
              keep it alive, three bring an empty one to life, anything else
              and it dies. Gen counts the ticks since you arrived.
            </span>
            <span>Move over the grid to draw. Click to drop a glider.</span>
            <a
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="_blank"
              rel="noreferrer"
              className="link self-start font-mono text-[12px] uppercase tracking-[0.05em]"
            >
              Source: John Conway, 1970 ↗
            </a>
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
