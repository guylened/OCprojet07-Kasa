import PropTypes from "prop-types";
import "../styles/index.scss";

export const Banner = ({ imgSrc, isTitle, style }) => {
  return (
    <div className="banner">
      <img src={imgSrc} alt="bannière paysage" style={style} />
      {isTitle && (
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
};

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  isTitle: PropTypes.bool.isRequired,  
};

/*
export const Banner1 = () => {
  return (
    <>
      <div className="banner">
        <img src={paysage1} alt="bannière paysage" />
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export const Banner2 = () => {
  return (
    <>
      <div className="banner">
        <img src={paysage2} alt="bannière paysage" style={{ opacity: 0.7 }} />
      </div>
    </>
  );
}*/
