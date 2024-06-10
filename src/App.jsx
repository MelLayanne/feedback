import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/Global"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}