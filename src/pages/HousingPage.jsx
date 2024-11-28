import "../styles/index.scss";
import dataHousing from "../data/dataHousing.json";
//import Collapse from "../components/Collapse";
import { Carousel } from "../components/Carousel";

export const HousingPage = () => {
  const housingInfo = dataHousing.filter(
    (housing) => housing.id === "c67ab8a7"
  );
  console.log(housingInfo);
  return (
    <>
      <div> titre</div>
      <div className="carouselSection">
        <Carousel data={housingInfo} />
      </div>
    </>
  );
};

/* <div className="housingDescription">
        <div className="collapse">
          {dataHousing.map((housing) => (
            <Collapse
              key={housing.id}
              title="Description"
              content={housing.description}
            />
          ))}
        </div>
        <div className="collapse">
          {dataHousing.map((housing) => (
            <Collapse
              key={housing.id}
              title="Equipements"
              content={housing.equipments}
            />
          ))}
        </div>
      </div> */
