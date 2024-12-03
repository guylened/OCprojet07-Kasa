import { Banner2 } from "../components/Banner";
import {Collapse} from "../components/Collapse";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";

export const About = () => {
  
  return (
    <>
      <Banner2 />      
      <div className="collapseSection">
        {dataAbout.map((item) => (
          
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

