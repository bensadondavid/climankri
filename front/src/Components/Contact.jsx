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

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const response = await fetch('https://localhost:5173/contact',{
                method : 'POST',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify(formData)
            }
            )
            if(!response.ok){
                console.log('formulaire non envoyé')
            }
            else{
                const data = await response.json()
                console.log(data);
                alert('Envoyé')
            }
        }
        catch(error){
            console.log('Une erreur est survenue')
        }
    }

    return(
        <>
            <form method="POST" onSubmit={handleSubmit}>

                <div className="first-part-form">
                    <input type="text" placeholder="Prénom" name="prenom" required value={formData.prenom} onChange={handleChange} />
                    <input type="text" placeholder="Nom" name="nom" required value={formData.nom} onChange={handleChange} />
                    <input type="email" placeholder="E-mail" name="email" required value={formData.email} onChange={handleChange} />
                    <input type="phone" placeholder="Téléphone" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>

                <div className="scnd-part-form">
                    <textarea name="commentaire" placeholder="Votre message" required value={formData.commentaire} onChange={handleChange} ></textarea>
                    <button type="submit">Envoyer</button>
                </div>
                
            </form>
        </>
    )
}

export default Contact