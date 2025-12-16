import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Map from "../components/Map/Map";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("Map", () => {
  it("S'affiche", () => {
    render(<Map />);
    expect(
      screen.getByText(/Voici la Map interactive du college Montmorency :/i)
    ).toBeInTheDocument();
  });
});
