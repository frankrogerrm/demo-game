export type Grid = boolean[][];

export function createEmptyGrid(rows: number, cols: number): Grid {
  return Array.from({ length: rows }, () => Array(cols).fill(false));
}

function countNeighbors(grid: Grid, r: number, c: number): number {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
        count += grid[nr][nc] ? 1 : 0;
      }
    }
  }
  return count;
}

export function getNextState(grid: Grid): Grid {
  const rows = grid.length;
  const cols = grid[0].length;
  const next = createEmptyGrid(rows, cols);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const neighbors = countNeighbors(grid, r, c);
      const alive = grid[r][c];
      next[r][c] = (alive && (neighbors === 2 || neighbors === 3)) || (!alive && neighbors === 3);
    }
  }
  return next;
}

export function advanceStates(grid: Grid, steps: number): Grid {
  let current = grid;
  for (let i = 0; i < steps; i++) {
    current = getNextState(current);
  }
  return current;
}
