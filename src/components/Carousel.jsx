import { useState } from "react";
import "../styles/index.scss";
import PropTypes from "prop-types";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel">
        <img
          src={arrowLeft}
          alt="Bouton image précédente"
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.map((housing, idx) => {
          return (
            <img
              key={housing.id.idx}
              src={housing.pictures}
              alt={housing.title}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <img
          src={arrowRight}
          alt="Bouton image suivante"
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
