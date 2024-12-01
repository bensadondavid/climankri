import React, { useState } from "react";

function Contact(){

    const [formData, setFormdata] = useState({
        prenom : '',
        nom : '', 
        email : '',
        phone : '',
        commentaire : ''
    })
    
    const handleChange = (e)=>{

        setFormdata((prevData)=>({
            ...prevData, [e.target.name] : e.target.value
        }))
    }

    return(
        <>
        <div className="contact">
            <form method="POST">
                
                <input type="text" placeholder="Prénom" name="prenom" value={formData.prenom} onClick={handleChange} />
                <input type="text" placeholder="Nom" name="nom" value={formData.nom}/>
                <input type="email" placeholder="E-mail" name="email" value={formData.email} />
                <input type="phone" placeholder="Téléphone" name="phone" value={formData.phone}/>
                <textarea name="commentaire" placeholder="Votre message" value={formData.commentaire}></textarea>
                <button type="submit">Envoyer</button>
                
            </form>
        </div>
        </>
    )
}

export default Contact