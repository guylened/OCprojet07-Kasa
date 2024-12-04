import { Banner } from "../components/Banner";
import {Collapse} from "../components/Collapse";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";
import paysage2 from "../assets/paysage2.png";

export const About = () => {
  
  return (
    <>
      <Banner imgSrc={paysage2} isTitle={false} style={true}/>      
      <div className="collapseSection">
        {dataAbout.map((item) => (
          
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

