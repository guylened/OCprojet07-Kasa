import { NavLink } from "react-router-dom";
import "../styles/index.scss";
import logo from "../assets/RedLogo.svg";

export function Header() {
  return (
    <div className="contentHeader">
      <div className="logoVecHeader">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
