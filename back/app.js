const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

app.post('/contact', async (req, res) => {
    console.log('Requête reçue :', req.body);

    const { prenom, nom, email, phone, commentaire } = req.body;
    if (!prenom || !nom || !email || !phone || !commentaire) {
        console.error('Champs manquants');
        return res.status(400).send('Tous les champs sont requis.');
    }

    try {
        console.log('Préparation de l\'envoi de l\'email...');
        console.log('GMAIL_EMAIL:', process.env.GMAIL_EMAIL);
        console.log('GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD ? 'OK' : 'MISSING');

        await transporter.sendMail({
            from: process.env.GMAIL_EMAIL,
            replyTo: email,
            to: 'contact@climankri.com',
            subject: `Nouveau message de ${prenom} ${nom} (${phone})`,
            text: commentaire
        });

        console.log('Email envoyé avec succès');
        res.status(200).send('Email envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error.message);
        res.status(500).send('Erreur serveur.');
    }
});

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
} )