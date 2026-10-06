// The favicon: a glider on a 5×5 board whose edges wrap. It's the smallest board a glider
// survives on, and it loops back to the start every 20 generations
export const ICON_BOARD = 5;

export const iconStart = () => {
  const grid = new Uint8Array(ICON_BOARD * ICON_BOARD);
  for (const [x, y] of [[2, 1], [3, 2], [1, 3], [2, 3], [3, 3]]) grid[y * ICON_BOARD + x] = 1;
  return grid;
};

// Shared by the static icons and the live one, so the first frame matches exactly
export const iconGeometry = (size: number) => {
  const pad = size * 0.12;
  const gap = size * 0.035;
  const cell = (size - pad * 2 - gap * (ICON_BOARD - 1)) / ICON_BOARD;
  return { pad, gap, cell, radius: size * 0.22 };
};

export const ALIVE = "#f0f0f0";
export const DEAD = "rgba(240, 240, 240, 0.12)";

// The glider at rest, drawn with divs for next/og
export function GliderIcon({ size, rounded = true }: { size: number; rounded?: boolean }) {
  const grid = iconStart();
  const { gap, cell, radius } = iconGeometry(size);
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "#111111",
        borderRadius: rounded ? radius : 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap,
      }}
    >
      {Array.from({ length: ICON_BOARD }, (_, y) => (
        <div key={y} style={{ display: "flex", gap }}>
          {Array.from({ length: ICON_BOARD }, (_, x) => (
            <div
              key={x}
              style={{ width: cell, height: cell, background: grid[y * ICON_BOARD + x] ? ALIVE : DEAD }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
