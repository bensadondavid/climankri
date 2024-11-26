import React from "react";

function Contact(){

    return(
        <>
        <div className="contact">
            <form method="POST">
                
                <input type="text" placeholder="Prénom" value='prenom' name="prenom" />
                <input type="text" placeholder="Nom" value='nom' name="nom" />
                <input type="email" placeholder="E-mail" value='email' name="email" />
                <input type="phone" placeholder="Téléphone" value='phone' name="phone" />
                <textarea name="commentaire" placeholder="Votre message" value='message'></textarea>
                <button type="submit">Envoyer</button>
                
            </form>
        </div>
        </>
    )
}

export default Contact