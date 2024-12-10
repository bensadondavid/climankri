import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../sav.css';

function Sav() {
  return (
    <>

      <div className="sav-page">

        {/* Section Service Après-Vente */}
        <section id="service-sav">
          <h2>Service Après-Vente (SAV)</h2>
          <p>
            Chez CLIMANKRI, notre service après-vente est conçu pour répondre à tous vos besoins, 
            qu’il s’agisse de plomberie, chauffage, climatisation, ou autres équipements. 
            Nous sommes là pour vous accompagner après l’installation et assurer un fonctionnement optimal.
          </p>
          <ul>
            <li>Support technique pour vos équipements de plomberie, chauffage et climatisation.</li>
            <li>Assistance pour les réglages et l'utilisation des appareils.</li>
            <li>Service de maintenance pour prolonger la durée de vie de vos installations.</li>
          </ul>
          <img src="/img-sav-global.jpg" alt="Service après-vente CLIMANKRI" />
          <button>Contactez le SAV</button>
        </section>

        {/* Section Réparation et Remplacement */}
        <section id="reparation">
          <h2>Réparation et Remplacement</h2>
          <p>
            Une panne ou un équipement défectueux ? CLIMANKRI propose un service rapide de 
            réparation et de remplacement pour tous vos appareils, y compris chauffe-eaux, chaudières, radiateurs, 
            et climatiseurs.
          </p>
          <ul>
            <li>Réparation de chauffe-eaux, radiateurs et systèmes de climatisation.</li>
            <li>Remplacement de pièces défectueuses (pompes, résistances, thermostats, etc.).</li>
            <li>Installation de nouveaux équipements performants et économes en énergie.</li>
          </ul>
          <img src="/img-sav-reparation-global.jpg" alt="Réparation d'équipements" />
        </section>

        {/* Section Garantie et Assistance */}
        <section id="garantie">
          <h2>Garantie et Assistance</h2>
          <p>
            Tous nos équipements bénéficient d’une garantie pour vous offrir une tranquillité 
            d’esprit. En cas de problème, notre équipe SAV assure un suivi rapide, que ce soit pour 
            des installations de plomberie, de chauffage ou de climatisation.
          </p>
          <ul>
            <li>Garantie constructeur pour tous les équipements installés.</li>
            <li>Interventions prioritaires pour les produits sous garantie.</li>
            <li>Assistance rapide pour résoudre vos problèmes ou répondre à vos questions.</li>
          </ul>
          <img src="/img-sav-garantie-global.jpg" alt="Garantie et assistance CLIMANKRI" />
          <button>Appelez le SAV</button>
        </section>

       

      </div>
      <Footer />
    </>
  );
}

export default Sav;
