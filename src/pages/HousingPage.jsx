import { useParams } from "react-router-dom";
import "../styles/index.scss";
import dataHousing from "../data/dataHousing.json";
import {Collapse} from "../components/Collapse";
import { Carousel } from "../components/Carousel";
import { TitleSection } from "../components/housingInfoSection";
import { HostSection } from "../components/housingHostSection";

export const HousingPage = () => {
  const {id} = useParams(); 
  const housingInfo = dataHousing.find(
    (housing) => housing.id === id
  );
  console.log(housingInfo);
  return (
    <>
      
      <div className="carouselSection">
        <Carousel data={housingInfo} />
      </div>
      <div className="infoSection">
        <TitleSection data={housingInfo}/>
        <HostSection data={housingInfo} />
      </div>
      <div className="collapseSection2">        
             <Collapse
              key={`Desc${housingInfo.id}`}
              title="Description"
              content={housingInfo.description}
            />    
            <Collapse
              key={`Equ${housingInfo.id}`}
              title="Equipements"
              content={housingInfo.equipments}
            /> 
      </div>
    </>
  );
};

/*{housingInfo.equipments.map((item, idx) => (
                <p key={`item${idx + 1}`}>{item}</p>
              )
              )}*/
