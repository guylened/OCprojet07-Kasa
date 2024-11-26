import { useState } from "react";
import { Banner2 } from "../components/Banner";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";
import PropTypes from "prop-types";

function Collapse({ title, content }) {
  const [show, setShow] = useState(false);

  return (
    <div className="collapse-card">
      <button
        className="collapse-title"
        onClick={() => {
          setShow(!show);
        }}
      >
        {title}
      </button>

      {show && <p className="collapse-content">{content}</p>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function About() {
  return (
    <>
      <div>
        <Banner2 />
      </div>
      <div className="collapse">
        {dataAbout.map((item, id) => (
          <Collapse key={id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

export default About;
