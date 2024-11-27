import { useState } from "react";
import { Banner2 } from "../components/Banner";
import "../styles/index.scss";
import dataAbout from "../data/dataAbout.json";
import PropTypes from "prop-types";

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function Collapse({ title, content }) {
  const [show, setShow] = useState(false);
  const icon = <i className="fa-solid fa-angle-up" aria-hidden="true"></i>;
  return (
    <div className="collapse-card">
      <button
        className="collapse-title"
        onClick={() => {
          setShow(!show);
        }}
      >
        {title}
        {icon}
      </button>

      {show && <p className="collapse-content">{content}</p>}
    </div>
  );
}

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
