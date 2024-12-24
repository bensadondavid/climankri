const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

app.use(cors())
app.use(express.json())

app.post('/contact', async (req, res)=>{
    const { prenom, nom, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Serveur SMTP d'Outlook
        port: 587, // Port sécurisé pour TLS
        secure: false, // `false` pour TLS
        auth: {
            user: process.env.OUTLOOK_EMAIL, // Variable d'environnement
            pass: process.env.OUTLOOK_PASSWORD // Variable d'environnement
        }
    });

    const mailOptions = {
        from: email, // Adresse de l'utilisateur (optionnel)
        to: 'contact@climankri.com', // Adresse Gmail de destination
        subject: `Nouveau message de ${prenom} ${nom} ${phone}`,
        text: message
    };

    try {
        // Envoyer l'email
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'email.');
    }
});

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
} )