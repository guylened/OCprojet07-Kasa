import { NavLink } from "react-router-dom";
import "../styles/index.scss";
import logo from "../assets/redLogo.svg";

export const Header = () => {
  return (
    <header>
    <div className="contentHeader">
      <div className="logoVecHeader">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </div>
    </header>
  );
}

