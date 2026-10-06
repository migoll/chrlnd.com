// One step of Conway's Game of Life (B3/S23) on a grid whose edges wrap around.
// Every cell is decided from the previous grid, so the whole board updates at once.
export function nextGeneration(grid: Uint8Array, cols: number, rows: number) {
  const next = new Uint8Array(cols * rows);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let neighbours = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          neighbours +=
            grid[((y + dy + rows) % rows) * cols + ((x + dx + cols) % cols)];
        }
      }

      const i = y * cols + x;
      // Survive with two or three neighbours, be born with exactly three
      if (grid[i] ? neighbours === 2 || neighbours === 3 : neighbours === 3) {
        next[i] = 1;
      }
    }
  }

  return next;
}
