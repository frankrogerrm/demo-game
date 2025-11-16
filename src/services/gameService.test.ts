import { createEmptyGrid, getNextState } from "./gameService";

describe("Game of Life rules", () => {
  test("single live cell dies (underpopulation)", () => {
    const grid = createEmptyGrid(3, 3);
    grid[1][1] = true;
    const next = getNextState(grid);
    expect(next[1][1]).toBe(false);
  });

  test("cell with two neighbors survives", () => {
    const grid = createEmptyGrid(3, 3);
    grid[1][1] = true;
    grid[0][1] = true;
    grid[1][0] = true;
    const next = getNextState(grid);
    expect(next[1][1]).toBe(true);
  });

  test("dead cell with three neighbors becomes alive", () => {
    const grid = createEmptyGrid(3, 3);
    grid[0][0] = true;
    grid[0][1] = true;
    grid[1][0] = true;
    const next = getNextState(grid);
    expect(next[1][1]).toBe(true);
  });

  test("empty grid stays empty", () => {
    const grid = createEmptyGrid(5, 5);
    const next = getNextState(grid);
    expect(next.flat().every(cell => !cell)).toBe(true);
  });
});
