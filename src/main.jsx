import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import App from './components/App.jsx'
import Root from './routes/root.jsx';
import ErrorPage from './components/error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    /*children: [     
      {
        path: "logements",
        element: <Logements />,
      },
      {
        path: "logements/:id",
        element: <Logement />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],*/
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />   
  </StrictMode>,
)
