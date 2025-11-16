import React from "react";

export function Board({ grid, onToggle }: any) {
  return (
    <div
      className="d-grid"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, 25px)`,
        gap: "1px",
      }}
    >
      {grid.map((row: boolean[], r: number) =>
        row.map((cell: boolean, c: number) => (
          <div
            key={`${r}-${c}`}
            data-testid="cell" // 👈 añadido para los tests
            className={`border ${cell ? "bg-dark" : "bg-light"}`}
            style={{ width: 25, height: 25, cursor: "pointer" }}
            onClick={() => onToggle(r, c)}
          />
        ))
      )}
    </div>
  );
}
