import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App integration", () => {
  test("clicking Next updates the board", () => {
    render(<App />);
    const cells = screen.getAllByTestId("cell");

    // Activate a cell
    fireEvent.click(cells[0]);
    const before = cells.map((c) => c.className).join("");

    // Click Next
    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    const after = cells.map((c) => c.className).join("");
    expect(after).not.toEqual(before); // board changed
  });

  test("Clear button resets the board", () => {
    render(<App />);
    const cells = screen.getAllByTestId("cell");

    // Activate a cell
    fireEvent.click(cells[0]);
    expect(cells[0].className).toContain("bg-dark"); // alive

    // Click Clear
    const clearButton = screen.getByText(/Clear/i);
    fireEvent.click(clearButton);

    // After clear, all cells should be empty
    expect(cells.every((cell) => cell.className.includes("bg-light"))).toBe(
      true
    );
  });
});
