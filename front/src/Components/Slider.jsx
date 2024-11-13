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
    <Slider {...settings} className="slider">
      {images.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "70vh" }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
