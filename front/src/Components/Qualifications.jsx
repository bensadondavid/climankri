import React from "react";

function Qualifications (){

    return(
        <>
        <div className="qualifs">
            <h2 style={{color: '#03295c'}}>CLIMANKRI <br /> UNE ENTREPRISE QUALIFIEE</h2>
            <p> <span style={{color: '#03295c', fontWeight: 'bold'}}>Climankri</span> vous propose des <span style={{color: '#03295c', fontWeight: 'bold'}}>solutions de rénovation énergétique </span> sur mesure,
                avec une prise en charge complète de votre projet. <br /><br />
                De l’étude de faisabilité à la réalisation des travaux,
                en passant par la gestion des démarches administratives
                et la collecte des aides financières, nous assurons un suivi
                rigoureux à chaque étape. <br /><br />
                Notre engagement : <span style={{color: '#03295c', fontWeight: 'bold'}}>garantir des travaux réalisés dans les règles de l’art</span>,
                pour des performances énergétiques optimales et une satisfaction durable.
            </p>
            <div className="img-qualifs">
                <img src="qualipac.png" alt="qualipac" />
                <img src="qualipv.png" alt="qualipv" />
                <img src="qualitenr.png" alt="qualitenr"  className="qualitenr"/>
            </div>
        </div>
        </>
    )
}

export default Qualifications