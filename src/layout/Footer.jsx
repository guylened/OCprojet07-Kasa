import "../styles/index.scss";
import logo from "../assets/whiteLogo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="contentFooter">
        <div className="logoVecFooter">
          <img src={logo} alt="Logo Kasa" />
        </div>
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
