import { renderHook, act } from "@testing-library/react";
import { useGameOfLife } from "./useGameOfLife";

describe("useGameOfLife hook", () => {
  test("toggleCell changes cell state", () => {
    const { result } = renderHook(() => useGameOfLife(5, 5));
    act(() => result.current.toggleCell(2, 2));
    expect(result.current.grid[2][2]).toBe(true);
  });

  test("next updates the grid state", () => {
    const { result } = renderHook(() => useGameOfLife(3, 3));
    act(() => {
      result.current.toggleCell(0, 0);
      result.current.toggleCell(0, 1);
      result.current.toggleCell(1, 0);
    });
    const before = JSON.stringify(result.current.grid);
    act(() => result.current.next());
    const after = JSON.stringify(result.current.grid);
    expect(after).not.toEqual(before);
  });

  test("clear resets the grid", () => {
    const { result } = renderHook(() => useGameOfLife(3, 3));
    act(() => result.current.toggleCell(1, 1));
    act(() => result.current.clear());
    expect(result.current.grid.flat().every(cell => !cell)).toBe(true);
  });

  test("advanceX with invalid steps (negative) does not break", () => {
    const { result } = renderHook(() => useGameOfLife(3, 3));
    act(() => {
      result.current.advanceX(-5);
    });
    expect(result.current.grid.flat().every(cell => !cell)).toBe(true);
  });
});
