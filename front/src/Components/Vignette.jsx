import React from "react";

function Vignette(){

    return(
        <>
        <div className="vignette">

            <div className="plomberie-vignette">
                <img src="/img-plomberie.jpg" alt="img-plomberie" />
                <p>
                    <span>PLOMBERIE</span> <br /><br />
                    Installation et rénovation de réseaux de plomberie :
                    pose et entretien de sanitaires, remplacement de canalisations,
                    réparation de fuites, création de salles de bains modernes
                    et fonctionnelles. Nous garantissons des solutions adaptées
                    à vos besoins.
                </p>
            </div>

            <div className="chauffage-vignette">
                <img src="/img-chauffage.jpg" alt="img-chauffage" />
                <p>
                <span>CHAUFFAGE</span> <br /><br />
                    Optimisez votre confort thermique avec nos services :
                    installation de chaudières, remplacement de radiateurs,
                    mise en place de planchers chauffants, installation de pompes
                    à chaleur (PAC) et entretien de vos équipements.
                    Optez pour des solutions performantes et économes en énergie. 
                </p>
            </div>

            <div className="clim-vignette">
                <img src="img-clim.jpg" alt="img-clim" />
                <p>
                    <span>CLIMATISATION</span> <br /><br />
                    Installation, entretien et rénovation de
                    systèmes de climatisation : unités murales,
                    systèmes VRV, gainables, pompes à chaleur
                    air/air et solutions réversibles. Profitez
                    d’un confort optimal toute l’année grâce
                    à des équipements modernes et efficaces.
                </p>
            </div>
        </div>
        </>
    )
}

export default Vignette