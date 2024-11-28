import { Banner2 } from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";

function About() {
  return (
    <>
      <div>
        <Banner2 />
      </div>
      <div className="collapse">
        {dataAbout.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

export default About;
