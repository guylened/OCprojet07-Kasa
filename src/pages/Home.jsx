import "../styles/index.scss";
import { Banner1 } from "../components/Banner";
import dataHousing from "../data/dataHousing.json";
import PropTypes from "prop-types";

HousingCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function HousingCards({ data }) {
  console.log(data);
  return (
    <div className="housingInsert">
      {data.map((housing) => (
        <a
          className="housingCard"
          key={housing.id}
          href={`./housingCard:${housing.id}`}
        >
          <article>
            <img src={housing.cover} alt={housing.title} />
            <p className="housingCardText">{housing.title}</p>
          </article>
        </a>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <Banner1 />
      <HousingCards data={dataHousing} />
    </>
  );
}

export default Home;
