import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import CurrentUser from "../components/CurrentUser/CurrentUser";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("CurrentUser", () => {
  it("shows Not logged in when no token", () => {
    render(<CurrentUser />);
    expect(screen.getByText(/Not logged in/i)).toBeInTheDocument();
  });
});
