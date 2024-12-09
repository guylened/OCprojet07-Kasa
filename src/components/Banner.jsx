import "../styles/index.scss";
import PropTypes from "prop-types";


export const Banner = ({ imgSrc, isTitle, style }) => {
  return (
    <div className="banner">
      <img src={imgSrc} alt="bannière paysage" className={style} />
      {isTitle && (
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
};

Banner.propTypes = {
  imgSrc : PropTypes.string.isRequired,
  isTitle: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
};