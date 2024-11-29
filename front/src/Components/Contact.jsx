import React, { useState } from "react";

function Contact(){

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    

    return(
        <>
        <div className="contact">
            <form method="POST">
                
                <input type="text" placeholder="Prénom" name="prenom" value={prenom} />
                <input type="text" placeholder="Nom" name="nom" value={nom}/>
                <input type="email" placeholder="E-mail" name="email" value={email} />
                <input type="phone" placeholder="Téléphone" name="phone" value={phone}/>
                <textarea name="commentaire" placeholder="Votre message" value={message}></textarea>
                <button type="submit">Envoyer</button>
                
            </form>
        </div>
        </>
    )
}

export default Contact