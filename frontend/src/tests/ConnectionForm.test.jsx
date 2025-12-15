import { afterEach, describe, it, expect, vi } from "vitest";

const mockedUsedNavigate = vi.fn();

vi.doMock("react-router-dom", async () => ({
  ...(await vi.importOriginal("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen, cleanup } from "@testing-library/react";
import ConnectionForm from "../components/ConnectionForm/ConnectionForm";
import { AuthContext } from "../components/AuthContext/AuthContext";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  mockedUsedNavigate.mockClear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("ConnectionForm", () => {
  it("S'affiche", async () => {
    await render(
      <BrowserRouter>
        <ConnectionForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/Connection Utilisateur/i)).toBeInTheDocument();
  });
});
