import { Banner2 } from "../components/Banner2";
import {Collapse} from "../components/Collapse";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";


export const About = () => {
  
  return (
    <>
      <Banner2 />      
      <div className="collapseSection">
        {dataAbout.map((item) => (
          
          <Collapse key={item.id} classTitle="collapse-title" title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

