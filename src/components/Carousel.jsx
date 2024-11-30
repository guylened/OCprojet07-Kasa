import { useState } from "react";
import "../styles/index.scss";
import PropTypes from "prop-types";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

export const Carousel = ({ data }) => {
  const arrayPictures = data.pictures;
  const title = data.title;
  const keyId = `pictures${data.id}`;
  
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === arrayPictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? arrayPictures.length - 1 : slide - 1);
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
        {arrayPictures.map((img, idx) => {
          return (
            <img
              key={`${keyId}-${idx}`}
              src={img}
              alt={`${title}-${idx+1}`}
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
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};