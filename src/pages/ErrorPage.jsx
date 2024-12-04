import { useRouteError } from "react-router-dom";
import "../styles/index.scss";
import {Header} from "../layout/Header.jsx";
import {Footer} from "../layout/Footer.jsx";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const p = "Oups! La page que vous demandez n'existe pas."
  const a = "Retourner sur la page d'accueil"
  return (
    <>
    <Header />
    <div className="errorSection">
    <p className="errorStatus">404</p>
        <p className="messageError">{p}        
        </p>        
        <a href="./" className="linkHomeError"> {a}          
        </a>  
    </div>   
    <Footer /> 
    </>      
    
  );
}
