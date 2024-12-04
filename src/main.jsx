import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import {Root} from "./routes/root.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { HousingPage } from "./pages/HousingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },      
      {
        path: "housing/:id",
        element: <HousingPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
