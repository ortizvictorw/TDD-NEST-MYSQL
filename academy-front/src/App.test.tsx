import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test login", () => {
  render(<App />);
  test("when login page is mounted", () => {
      expect(screen.getByText(/Login/i)).toBeInTheDocument();

  });
});
