import "../../styles/index.scss";
import dataHousing from "../../data/dataHousing.json";
import { Banner1 } from "../../components/Banner1";
import {HousingCards} from "./HousingCards"



export const Home = () => {
  return (
    <>
      <Banner1 />
      <HousingCards data={dataHousing} />
    </>
  );
}