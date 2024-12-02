import { useState } from "react";
import "../styles/index.scss";
import PropTypes from "prop-types";

export const Collapse = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const icon = (
    <i
      className={`fa-solid fa-angle-up fa-style ${active && "active"}`}
      aria-hidden="true"
    ></i>
  );
  const handleToogle = () => {
    setActive(!active);
  };

  return (
    <div className={`collapse-card ${active && "active"}`}>
      <div className="collapse-title" onClick={handleToogle}>
        {title}
        {icon}
      </div>
      <div className={`collapse-content ${active && "active"}`}>{ Array.isArray(content) ? (
                <ul>
                  {content.map((contentItem, idx) => (
                    <li key={`item${idx + 1}`}>{contentItem}</li>
                  ))}
                </ul>
              ) : (
                content
              )}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};