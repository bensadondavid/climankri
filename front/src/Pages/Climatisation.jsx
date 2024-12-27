import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../clim.css'
import Contact from '../Components/Contact'

function Climatisation() {

    const handleScrollToContact = () => {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({behavior : 'smooth'})
    }

  return (
    <>
      <Header />
      <div className="climatisation-page">

        {/* Section Systèmes sur Mesure */}
        <section id="systemes">
          <h2>Systèmes sur Mesure</h2>
          <p>
            CLIMANKRI vous propose des solutions de climatisation adaptées à vos besoins spécifiques. 
            Que ce soit pour votre domicile ou vos locaux professionnels, nos systèmes garantissent un 
            confort optimal tout en respectant votre budget.
          </p>
          <ul>
            <li>Installation de climatiseurs monosplit et multisplit.</li>
            <li>Systèmes gainables pour une intégration discrète.</li>
            <li>Climatisation réversible pour un confort été comme hiver.</li>
          </ul>
          <img src="/img-clim-systeme.jpg" alt="Systèmes sur mesure climatisation" />
          <button onClick={handleScrollToContact}>Demandez un devis</button>
        </section>

        {/* Section Nettoyage & Contrôle */}
        <section id="nettoyage">
          <h2>Nettoyage & Contrôle</h2>
          <p>
            Un entretien régulier de votre système de climatisation est essentiel pour assurer son bon 
            fonctionnement et prolonger sa durée de vie. Nos experts s’occupent du nettoyage et du contrôle 
            de vos équipements pour des performances optimales.
          </p>
          <ul>
            <li>Nettoyage des filtres pour garantir une bonne qualité de l'air.</li>
            <li>Vérification des circuits de fluide frigorigène et tests d'étancheité sur réseaux.</li>
            <li>Test des performances et optimisation des réglages.</li>
          </ul>
          <img src="/img-clim-nettoyage.webp" alt="Nettoyage climatisation" />
        </section>

        {/* Section Diagnostic & Réparation */}
        <section id="diagnostic">
          <h2>Diagnostic & Réparation</h2>
          <p>
            Une panne ou une baisse de performance ? CLIMANKRI intervient rapidement pour diagnostiquer 
            et réparer vos systèmes de climatisation. Nos techniciens sont formés pour travailler avec 
            toutes les marques et tous les types d’équipements.
          </p>
          <ul>
            <li>Réparation de pannes mécaniques ou électriques.</li>
            <li>Remplacement de pièces défectueuses.</li>
            <li>Diagnostic précis pour éviter les futures pannes.</li>
          </ul>
          <img src="/img-clim-diagnostic.jpg" alt="Diagnostic et réparation climatisation" />
          <button onClick={handleScrollToContact}>Contactez-nous</button>
        </section>

      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Climatisation;
