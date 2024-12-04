import { Link } from "react-router-dom";
import "../styles/index.scss";
import { Banner } from "../components/Banner";
import paysage1 from "../assets/paysage1.png";
import dataHousing from "../data/dataHousing.json";
import PropTypes from "prop-types";


export const HousingCards = ({ data }) => {
  return (
    <div className="housingInsert">
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

export const Home = () => {
  return (
    <>
      <Banner imgSrc={paysage1} isTitle={true} style={false}/>
      <HousingCards data={dataHousing} />
    </>
  );
}