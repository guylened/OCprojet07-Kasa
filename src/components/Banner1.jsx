import "../styles/index.scss";
import paysage1 from "../assets/paysage1.png";

export const Banner1 = () => {
  return (
    
      <div className="banner">
        <img src={paysage1} alt="bannière paysage" />
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      </div>
    
  );
}

