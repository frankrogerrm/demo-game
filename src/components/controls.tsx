import React, { useState } from "react";

export function Controls({
  next,
  play,
  pause,
  advanceX,
  clear,
  isPlaying,
}: any) {
  const [steps, setSteps] = useState(1);

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-auto d-flex flex-wrap gap-2">
        <button className="btn btn-primary" onClick={next} disabled={isPlaying}>
          Next
        </button>

        {!isPlaying ? (
          <button className="btn btn-success" onClick={play}>
            Play
          </button>
        ) : (
          <button className="btn btn-warning" onClick={pause}>
            Pause
          </button>
        )}

        <div className="input-group" style={{ width: "200px" }}>
          <input
            type="number"
            min={1}
            value={steps}
            onChange={(e) => {
              const val = Number(e.target.value);
              setSteps(val > 0 ? val : 1);
            }}
            className="form-control"
          />
          <button
            className="btn btn-info"
            onClick={() => {
              if (steps >= 1) {
                advanceX(steps);
              }
            }}
            disabled={isPlaying}
          >
            Advance X
          </button>
        </div>
      </div>

      <div className="col text-end">
        <button className="btn btn-danger" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
