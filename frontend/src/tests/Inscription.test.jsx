import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Inscription from "../components/Insriptions/Inscription";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("Inscription", () => {
  it("shows Not logged in when no token", () => {
    render(<Inscription />);
    expect(
      screen.getByText(/Veuillez entrer vos informations de connexion :/i)
    ).toBeInTheDocument();
  });
});
