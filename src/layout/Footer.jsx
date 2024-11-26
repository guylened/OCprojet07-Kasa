import "../styles/index.scss";
import logo from "../assets/WhiteLogo.svg";

function Footer() {
  return (
    <div className="contentFooter">
      <div className="logoVecFooter">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
