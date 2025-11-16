import { useState, useRef } from "react";
import { createEmptyGrid, getNextState, Grid } from "../services/gameService";
import { DEFAULT_ROWS, DEFAULT_COLS } from "../utils/constants";

export function useGameOfLife(rows = DEFAULT_ROWS, cols = DEFAULT_COLS) {
  const [grid, setGrid] = useState<Grid>(() => createEmptyGrid(rows, cols));
  const [isPlaying, setIsPlaying] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const toggleCell = (r: number, c: number) => {
    const copy = grid.map(row => [...row]);
    copy[r][c] = !copy[r][c];
    setGrid(copy);
  };

  const next = () => setGrid(g => getNextState(g));

  const clear = () => setGrid(createEmptyGrid(rows, cols));

  const pause = () => {
    setIsPlaying(false);
    if (timer.current) clearInterval(timer.current);
  };

  const play = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    timer.current = setInterval(() => {
      setGrid(prev => {
        const nextGen = getNextState(prev);
        const isEmpty = nextGen.flat().every(cell => !cell);
        const isStagnant = JSON.stringify(prev) === JSON.stringify(nextGen);

        if (isEmpty || isStagnant) {
          pause();
          clear();
          return createEmptyGrid(rows, cols);
        }

        return nextGen;
      });
    }, 200);
  };

  const advanceX = (steps: number) => {
    let g = grid;
    for (let i = 0; i < steps; i++) {
      const nextGen = getNextState(g);
      const isEmpty = nextGen.flat().every(cell => !cell);
      const isStagnant = JSON.stringify(g) === JSON.stringify(nextGen);
      if (isEmpty || isStagnant) {
        g = createEmptyGrid(rows, cols);
        break;
      }
      g = nextGen;
    }
    setGrid(g);
  };

  return { grid, toggleCell, next, play, pause, advanceX, clear, isPlaying };
}
