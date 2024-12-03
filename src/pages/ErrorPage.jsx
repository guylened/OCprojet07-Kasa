import { useRouteError } from "react-router-dom";
import "../styles/index.scss";
//import Header from "../layout/Header.jsx";
//import Footer from "../layout/Footer.jsx";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h2 className="errorStatus">404</h2>
        <p className="messageError">
          Oups! La page que vous demandez n existe pas.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="./" className="linkHomeError">
          Retourner sur la page d accueil
        </a>      
    </>
  );
}
