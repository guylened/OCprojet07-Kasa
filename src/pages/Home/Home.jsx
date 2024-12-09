import "../../styles/index.scss";
import paysage1 from "../../assets/paysage1.png";
import dataHousing from "../../data/dataHousing.json";
import { Banner } from "../../components/Banner";
import {HousingCards} from "./HousingCards"




export const Home = () => {
  return (
    <>
      <Banner imgSrc= {paysage1} isTitle={true} style="img1"/>
      <HousingCards data={dataHousing} />
    </>
  );
}