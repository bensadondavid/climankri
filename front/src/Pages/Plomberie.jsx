import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../plomberie.css';

function Plomberie() {
  return (
    <>

      <div className="plomberie-page">

        {/* Section Rénovation */}
        <section id="renovation">
          <h2>Votre expert en plomberie</h2>
          <p>
            Chez CLIMANKRI, nous mettons notre expertise au service de vos besoins en plomberie. 
            De la rénovation complète à l'installation de chauffe-eaux modernes, nous intervenons rapidement 
            pour vous offrir des solutions fiables et durables.
          </p>
          <ul>
            <li>Installation de douches à l'italienne, baignoires, et lavabos.</li>
            <li>Pose de WC suspendus ou traditionnels.</li>
            <li>Installation et remplacement de chauffe-eaux électriques ou thermodynamiques.</li>
            <li>Rénovation de cuisines avec raccordement des électroménagers.</li>
          </ul>
          <img src="/img-plomberie-renovation.webp" alt="Rénovation plomberie" />
          <button>Obtenir un devis</button>
        </section>

        {/* Section Dépannage */}
        <section id="depannage">
          <h2>Une urgence ? Nous sommes là pour vous</h2>
          <p>
            Une fuite d’eau, un chauffe-eau en panne, ou une canalisation bouchée peut rapidement 
            devenir un problème majeur. Notre équipe intervient dans les meilleurs délais pour résoudre vos urgences 
            et minimiser les dégâts.
          </p>
          <ul>
            <li>Réparation de fuites visibles et non visibles.</li>
            <li>Débouchage rapide de canalisations.</li>
            <li>Réparation et dépannage de chauffe-eaux en panne.</li>
            <li>Remplacement de tuyauterie défectueuse.</li>
          </ul>
          <img src="/img-plomberie-depannage.jpg" alt="Dépannage plomberie" />
        </section>

        {/* Section Urgence */}
        <section id="urgence">
          <h2>Un problème critique ? Nous intervenons 24/7</h2>
          <p>
            Parce qu'une panne de plomberie ne prévient pas, nous vous proposons un service d'urgence disponible 
            24h/24 et 7j/7. Notre priorité : assurer votre tranquillité en intervenant rapidement et efficacement, 
            notamment en cas de panne de chauffe-eau ou dégâts des eaux.
          </p>
          <ul>
            <li>Dégâts des eaux.</li>
            <li>Panne ou dysfonctionnement de chauffe-eaux.</li>
            <li>Rupture de tuyaux.</li>
            <li>Coupures imprévues d’eau.</li>
          </ul>
          <img src="/img-plomberie-urgence.webp" alt="Service d'urgence plomberie" />
          <button>Appelez-nous maintenant</button>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Plomberie;
