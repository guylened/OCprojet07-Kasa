import { useParams } from "react-router-dom";
import "../../styles/index.scss";
import dataHousing from "../../data/dataHousing.json";
import { Collapse } from "../../components/Collapse";
import { Carousel } from "../../components/Carousel";
import { TitleSection } from "./TitleSection";
import { HostSection } from "./HostSection";

export const HousingPage = () => {
  const { id } = useParams();
  const housingInfo = dataHousing.find((housing) => housing.id === id);
  return (
    <>
      <div className="carouselSection">
        <Carousel data={housingInfo} />
      </div>
      <div className="infoSection">
        <TitleSection data={housingInfo} />
        <HostSection data={housingInfo} />
      </div>
      <div className="collapseSection2">
        <Collapse
          key={`Desc${housingInfo.id}`}
          classTitle="collapse-title2"
          title="Description"
          content={housingInfo.description}
        />
        <Collapse
          key={`Equ${housingInfo.id}`}
          classTitle="collapse-title2"
          title="Equipements"
          content={housingInfo.equipments}
        />
      </div>
    </>
  );
};
