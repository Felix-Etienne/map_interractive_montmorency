import { afterEach, describe, it, expect, vi } from "vitest";

const mockedUsedNavigate = vi.fn();

vi.doMock("react-router-dom", async () => ({
  ...(await vi.importOriginal("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen, cleanup } from "@testing-library/react";
import Inscription from "../components/Insriptions/Inscription";
import { AuthContext } from "../components/AuthContext/AuthContext";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  mockedUsedNavigate.mockClear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("Inscription", () => {
  it("S'affiche", async () => {
    await render(
      <BrowserRouter>
        <Inscription />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Veuillez entrer vos informations de connexion :/i)
    ).toBeInTheDocument();
  });
});
