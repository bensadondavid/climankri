const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 4000;
require('dotenv').config();

// Configuration du middleware
app.use(cors());
app.use(express.json());

// Route POST pour le formulaire de contact
app.post('/contact', async (req, res) => {
    console.log('Requête reçue :', req.body);

    const { prenom, nom, email, phone, commentaire } = req.body;

    // Vérifiez si tous les champs requis sont présents
    if (!prenom || !nom || !email || !phone || !commentaire) {
        console.error('Champs manquants');
        return res.status(400).send('Tous les champs sont requis.');
    }

    try {
        console.log('Préparation de l\'envoi de l\'email...');

        // Vérifiez les variables d'environnement
        const gmailEmail = process.env.GMAIL_EMAIL;
        const gmailPassword = process.env.GMAIL_PASSWORD;

        console.log('GMAIL_EMAIL:', gmailEmail || 'NON DÉFINI');
        console.log('GMAIL_PASSWORD:', gmailPassword ? 'OK' : 'MISSING');

        if (!gmailEmail || !gmailPassword) {
            throw new Error('Les variables GMAIL_EMAIL ou GMAIL_PASSWORD ne sont pas définies.');
        }

        // Configurez le transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Utilisez TLS
            auth: {
                user: gmailEmail,
                pass: gmailPassword
            }
        });

        // Envoyez l'email
        await transporter.sendMail({
            from: gmailEmail,
            replyTo: email,
            to: 'contact@climankri.com',
            subject: `Nouveau message de ${prenom} ${nom} (${phone})`,
            text: commentaire
        });

        console.log('Email envoyé avec succès');
        res.status(200).send('Email envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error.message);
        res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'email.');
    }
});

// Démarrez le serveur
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});