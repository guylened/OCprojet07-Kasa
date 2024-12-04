import { useRouteError } from "react-router-dom";
import "../styles/index.scss";
//import Header from "../layout/Header.jsx";
//import Footer from "../layout/Footer.jsx";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
    <div className="errorSection">
    <p className="errorStatus">404</p>
        <p className="messageError">
          Oups! La page que vous demandez n existe pas.
        </p>        
        <a href="./" className="linkHomeError">
          Retourner sur la page d accueil
        </a>  
    </div>          
    </>
  );
}
