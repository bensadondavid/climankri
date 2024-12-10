import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../chauffage.css';

function Chauffage() {
  return (
    <>
      <div className="chauffage-page">

        {/* Section Installation Moderne */}
        <section id="installation">
          <h2>Installation Moderne</h2>
          <p>
            Chez CLIMANKRI, nous installons des solutions de chauffage modernes et performantes, y compris des 
            Pompes à Chaleur (PAC) pour un chauffage écologique et économique. Que ce soit pour une chaudière, 
            un radiateur, un plancher chauffant ou une PAC, nous vous proposons des équipements adaptés à vos besoins et à votre budget.
          </p>
          <ul>
            <li>Installation de chaudières gaz, fioul ou électriques.</li>
            <li>Pose de radiateurs modernes et économes en énergie.</li>
            <li>Mise en place de planchers chauffants pour un confort optimal.</li>
            <li>Installation de PAC Air-Air et PAC Air-Eau pour une efficacité énergétique maximale.</li>
          </ul>
          <img src="/img-chauffage-installation.webp" alt="Installation de chauffage" />
          <button>Demandez un devis</button>
        </section>

        {/* Section Maintenance Annuelle */}
        <section id="maintenance">
          <h2>Maintenance Annuelle</h2>
          <p>
            Pour assurer la longévité et la performance de vos systèmes de chauffage, y compris les Pompes à Chaleur (PAC), 
            CLIMANKRI propose des contrats de maintenance adaptés. Nos experts effectuent un entretien régulier 
            pour éviter les pannes et optimiser vos consommations énergétiques.
          </p>
          <ul>
            <li>Nettoyage complet des chaudières, radiateurs et PAC (Désembouage).</li>
            <li>Vérification des réglages pour une efficacité maximale.</li>
            <li>Contrôle des niveaux de fluide frigorigène dans les PAC.</li>
            <li>Rapport détaillé après chaque entretien.</li>
          </ul>
          <img src="/img-chauffage-maintenance.jpg" alt="Maintenance de chauffage" />
        </section>

        {/* Section Assistance & Réparation */}
        <section id="assistance">
          <h2>Assistance & Réparation</h2>
          <p>
            Une panne de chauffage ? Notre équipe est disponible pour intervenir rapidement et réparer vos systèmes défectueux, 
            y compris vos Pompes à Chaleur (PAC). Nous diagnostiquons et réglons vos problèmes pour garantir votre confort.
          </p>
          <ul>
            <li>Réparation de chaudières, radiateurs et PAC défectueux.</li>
            <li>Diagnostic et remplacement de pièces spécifiques aux PAC.</li>
            <li>Assistance pour les thermostats connectés associés aux PAC.</li>
          </ul>
          <img src="/img-chauffage-reparation.jpg" alt="Assistance et réparation de chauffage" />
          <button>Contactez-nous</button>
        </section>

        {/* Section Aide d'Urgence */}
        <section id="urgence">
          <h2>Aide d'Urgence</h2>
          <p>
            Une panne en plein hiver peut être critique. CLIMANKRI est à votre service 24h/24 et 7j/7 pour intervenir en urgence. 
            Nous prenons en charge toutes les pannes de chauffage, y compris celles des Pompes à Chaleur (PAC), pour rétablir votre confort thermique dans les meilleurs délais.
          </p>
          <ul>
            <li>Intervention rapide pour pannes majeures de PAC.</li>
            <li>Diagnostic immédiat et réparation sur place.</li>
            <li>Service disponible même les week-ends et jours fériés.</li>
          </ul>
          <img src="/img-chauffage-urgence.webp" alt="Service d'urgence chauffage" />
          <button className="btn-urgence">Appelez-nous maintenant</button>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Chauffage;
