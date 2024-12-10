import "../../styles/index.scss";
import PropTypes from "prop-types";
import { Rating } from "../../components/Rating.jsx";
import { HostProfil } from "../../components/hostProfil.jsx";

export const HostSection = ({ data }) => {
  return (
    <div className="hostSection">
      <HostProfil name={data.host.name} picture={data.host.picture} />
      <Rating value={data.rating} id={data.id} />
    </div>
  );
};

HostSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
