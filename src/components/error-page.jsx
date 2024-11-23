import { useRouteError } from "react-router-dom";
import '../styles/error.scss';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
    <Header />
    <div id="error-page">
      <h2 className="errorStatus">404</h2>
      <p className="messageError">Oups! La page que vous demandez n existe pas.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="./" className="linkHomeError">Retourner sur la page d accueil</a>
    </div>    
    <Footer />
    </>
  );
}