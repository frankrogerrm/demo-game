import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Demo Game/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Next button", () => {
  render(<App />);
  const nextButton = screen.getByText(/Next/i);
  expect(nextButton).toBeInTheDocument();
});
