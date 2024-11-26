import React, { useEffect, useRef } from "react";

function Vignette() {
  const plomberieRef = useRef(null);
  const chauffageRef = useRef(null);
  const climRef = useRef(null);

  useEffect(() => {
    const handleScroll = (ref, css) => {
      if (!ref.current) return;

      const position = ref.current.getBoundingClientRect();

      if (
        position.top <= window.innerHeight &&
        position.bottom >= 0 &&
        !ref.current.classList.contains(css)
      ) {
        ref.current.classList.add(css); 
      }
    };

    const onScroll = () => {
      handleScroll(plomberieRef, "slide-anim-right");
      handleScroll(chauffageRef, "slide-anim-left");
      handleScroll(climRef, "slide-anim-right-nd");
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="vignette">
      <div className="plomberie-vignette" ref={plomberieRef}>
        <img src="/img-plomberie.jpg" alt="img-plomberie" />
        <p>
          <span style={{ fontWeight: "bold", color: "#03295c" }}>
            PLOMBERIE
          </span>
          <br />
          <br />
          Installation et rénovation de réseaux de plomberie : pose et entretien
          de sanitaires, remplacement de canalisations, réparation de fuites,
          création de salles de bains modernes et fonctionnelles. Nous
          garantissons des solutions adaptées à vos besoins.
        </p>
      </div>

      <div className="chauffage-vignette" ref={chauffageRef}>
        <img src="/img-chauffage.jpg" alt="img-chauffage" />
        <p>
          <span style={{ fontWeight: "bold", color: "#03295c" }}>
            CHAUFFAGE
          </span>
          <br />
          <br />
          Optimisez votre confort thermique avec nos services : installation de
          chaudières, remplacement de radiateurs, mise en place de planchers
          chauffants, installation de pompes à chaleur (PAC) et entretien de
          vos équipements. Optez pour des solutions performantes et économes en
          énergie.
        </p>
      </div>

      <div className="clim-vignette" ref={climRef}>
        <img src="/img-clim.jpg" alt="img-clim" />
        <p>
          <span style={{ fontWeight: "bold", color: "#03295c" }}>
            CLIMATISATION
          </span>
          <br />
          <br />
          Installation, entretien et rénovation de systèmes de climatisation :
          unités murales, systèmes VRV, gainables, pompes à chaleur air/air et
          solutions réversibles. Profitez d’un confort optimal toute l’année
          grâce à des équipements modernes et efficaces.
        </p>
      </div>
    </div>
  );
}

export default Vignette;
