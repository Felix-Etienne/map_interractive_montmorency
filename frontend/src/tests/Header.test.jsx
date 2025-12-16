import { afterEach, describe, it, expect, vi } from "vitest";

const mockedUsedNavigate = vi.fn();

vi.doMock("react-router-dom", async () => ({
  ...(await vi.importOriginal("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen, cleanup } from "@testing-library/react";
import Header from "../components/Header/Header";
import { AuthContext } from "../components/AuthContext/AuthContext";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  mockedUsedNavigate.mockClear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("Header", () => {
  it("Montre Connexion sans infos utilisateur", async () => {
    await render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/Connection/i)).toBeInTheDocument();
  });
});
