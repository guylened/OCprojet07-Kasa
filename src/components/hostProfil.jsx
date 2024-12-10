import "../styles/index.scss";
import PropTypes from "prop-types";

export const HostProfil = ({ name, picture }) => {
  const nameArray = name.split(" ");

  return (
    <div className="hostProfil">
      <div className="hostName">
        {nameArray[0]}
        <br />
        {nameArray[1]}
      </div>
      <img className="hostPicture" src={picture} alt="Photo de l'hôte" />
    </div>
  );
};

HostProfil.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
