import React from "react";
import { useGameOfLife } from "./hooks/useGameOfLife";
import { Board } from "./components/board";
import { Controls } from "./components/controls";
import "bootstrap/dist/css/bootstrap.min.css";
import { DEFAULT_ROWS, DEFAULT_COLS } from "./utils/constants";

export default function App() {
  const { grid, toggleCell, next, play, pause, advanceX, clear, isPlaying } =
    useGameOfLife(DEFAULT_ROWS, DEFAULT_COLS);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col text-center">
          <h1 className="display-5 fw-bold text-primary">Demo Game</h1>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col d-flex justify-content-center">
          <Controls
            next={next}
            play={play}
            pause={pause}
            advanceX={advanceX}
            clear={clear}
            isPlaying={isPlaying}
          />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <Board grid={grid} onToggle={toggleCell} />
        </div>
      </div>
    </div>
  );
}
