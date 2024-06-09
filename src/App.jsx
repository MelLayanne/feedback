import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import theme from "./assets/theme";
import { GlobalStyle } from "./styles/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
