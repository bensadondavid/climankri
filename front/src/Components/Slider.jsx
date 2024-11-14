import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Chaque objet inclut une image et un texte de bouton associé
  const slides = [
    { image: "/clim.webp", btn: "POMPES A CHALEUR", txt: "REDUISEZ DES MAINTENANT VOS FACTURES D'ENERGIE" },
    { image: "/panneaux.jpg", btn: "PANNEAUX PHOTOVOLTAIQUES", txt: "PASSEZ AUX ENERGIES VERTES" },
    { image: "/pac.jpg", btn: "POMPES A CHALEUR", txt: "UN PROJET DE RENOVATION ? RENCONTRONS NOUS !"},
  ];

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {slides.map((slide, index) => (
          <div key={index} className="slider-container">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
              <div className="slider-content">
                  <p className="slider-text"> {slide.txt} </p>
                  <button className="slider-button">{slide.btn}</button>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
