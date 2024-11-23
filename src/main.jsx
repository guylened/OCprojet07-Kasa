import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.scss'

import Root from './routes/root.jsx';
import ErrorPage from './components/error-page.jsx';
import About from './components/About.jsx';
import App from './components/App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
   children: [     
     {
        path: "/",
        element: <App />,
      },
       /*{
        path: "logements/:id",
        element: <Logement />,
      },*/
      {
        path: "about",
        element: <About />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />      
  </StrictMode>,
)
