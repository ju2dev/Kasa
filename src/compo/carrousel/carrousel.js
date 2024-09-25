import './carrousel.css';
import React, { useState } from "react";
import flecheRight from '../../assets/flèches/fleche-right.png';
import flecheLeft from '../../assets/flèches/fleche-left.png';

function Carrousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <img src={flecheLeft} alt="Previous slide" />
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <img src={flecheRight} alt="Next slide" />
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="slide_image"
                />
                {length > 1 && (
                  <span className="slider_number">
                    {current + 1}/{length}
                  </span>
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;

