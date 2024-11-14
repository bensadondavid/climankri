import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    infinite: true,       // Boucle infinie des images
    speed: 500,           // Vitesse de transition (en ms)
    slidesToShow: 1,      // Nombre d'images visibles
    slidesToScroll: 1,    // Nombre d'images défilant à chaque transition
    autoplay: true,       // Lecture automatique
    autoplaySpeed: 3000,  // Intervalle entre chaque slide (en ms)
  };

  const images = [
    "/clim.webp",
    "/pac.jpg",
    "/panneaux.jpg",
  ];

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {images.map((url, index) => (
          <div key={index} className="slider-container">
            <img src={url} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
