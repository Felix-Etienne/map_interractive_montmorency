// import React from "react";
// import { render, screen, cleanup } from "@testing-library/react";
// import { afterEach, describe, it, expect, vi } from "vitest";
// import Header from "../components/Header/Header";
// import { AuthContext } from "../components/AuthContext/AuthContext";
// import { BrowserRouter } from "react-router-dom";
// import ErrorPage from "../Containers/ErrorPage";
// import Map from "../components/Map/Map";
// // ...existing code...
import { afterEach, describe, it, expect, vi } from "vitest";

const mockedUsedNavigate = vi.fn();
// mock react-router-dom BEFORE importing Header (or any module that uses its hooks)

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
// ...existing code...
