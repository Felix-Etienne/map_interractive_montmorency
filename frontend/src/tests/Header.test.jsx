// import React from "react";
// import { render, screen, cleanup } from "@testing-library/react";
// import { afterEach, describe, it, expect } from "vitest";
// import Header from "../components/Header/Header";
// import { AuthContext } from "../components/AuthContext/AuthContext";
// import { createMemoryRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "../Containers/ErrorPage";
// import Map from "../components/Map/Map";

// const mockUsedNavigate = vi.fn();
// // vi.mock("react-router-dom", async () => {
// //   const actual = await vi.importActual("react-router-dom");
// //   return {
// //     ...actual,
// //     useNavigate: () => mockUsedNavigate,
// //   };
// // });
// const router = createMemoryRouter([
//   {
//     path: "/",
//     element: <Header />,
//     errorElement: <ErrorPage />,
//     children: [{ path: "", element: <Map /> }],
//   },
//   // Add other necessary routes
// ]);
// afterEach(() => {
//   cleanup();
//   localStorage.clear();
// });

// // describe("Header", () => {
// //   it("Montre Connexion sans infos utilisateur", () => {
// //     render(
// //       <RouterProvider router={router}>
// //         <Header />
// //       </RouterProvider>
// //     );
// //     expect(screen.getByText(/Connection/i)).toBeInTheDocument();
// //   });
// // });
