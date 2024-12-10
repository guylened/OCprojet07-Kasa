import "../styles/index.scss";
import paysage2 from "../assets/paysage2.png";
import dataAbout from "../data/dataAbout.json";
import { Banner } from "../components/Banner";
import { Collapse } from "../components/Collapse";

export const About = () => {
  return (
    <>
      <Banner imgSrc={paysage2} isTitle={false} style="img2" />
      <div className="collapseSection">
        {dataAbout.map((item) => (
          <Collapse
            key={item.id}
            classTitle="collapse-title"
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
};
