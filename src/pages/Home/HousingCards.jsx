import "../../styles/index.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export const HousingCards = ({ data }) => {
  return (
    <div className="housingSection">
      {data.map((housing) => (
        <Link
          className="housingCard"
          key={housing.id}
          to={`/housing/${housing.id}`}
        >
          <article>
            <img src={housing.cover} alt={housing.title} />
            <p className="housingCardText">{housing.title}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

HousingCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};