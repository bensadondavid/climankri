import React from "react";
import { Link } from "react-router-dom"; // Import React Router Link
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

  const slides = [
    {
      image: "/clim.webp",
      btn: "DEMANDEZ UN DEVIS",
      txt: "REDUISEZ DES MAINTENANT VOS FACTURES D'ENERGIE",
      lien: "/#contact" // Formulaire de contact
    },
    {
      image: "/panneaux.jpg",
      btn: "NOS SOLUTIONS",
      txt: "UN PROJET DE RENOVATION ? RENCONTRONS NOUS !",
      lien: "/plomberie#renovation" // Plomberie > Rénovation
    },
    {
      image: "/pac.jpg",
      btn: "POMPES A CHALEUR",
      txt: "PASSEZ AUX ENERGIES VERTES",
      lien: "/chauffage#installation" // Chauffage > Installation Moderne
    },
  ];

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {slides.map((slide, index) => (
          <div key={index} className="slider-container">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
            <div className="slider-content">
              <p className="slider-text"> {slide.txt} </p>
              <Link to={slide.lien}>
                <button className="slider-button">{slide.btn}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
