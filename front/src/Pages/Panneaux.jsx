import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../chauffage.css';
import Contact from '../Components/Contact'

function Panneaux() {
  return (
    <>
      <Header />
      <div className="chauffage-page">

        {/* Section Installation Moderne */}
        <section id="installation">
          <h2>Énergie solaire – Panneaux photovoltaïques sur mesure</h2>
          <p>
            Passez à l'énergie solaire et réduisez vos factures d'électricité tout en agissant pour la planète.
            Nos solutions de panneaux photovoltaïques s'adaptent à tous les types de toitures, qu’il s’agisse de maisons individuelles, de bâtiments professionnels ou d’installations agricoles.
          </p>
          <img src="/img-chauffage-installation.jpg" alt="Installation de chauffage" />
          <button>Demandez un devis</button>
        </section>

        {/* Section Maintenance Annuelle */}
        <section id="maintenance">
          <h2>Performance et rentabilité</h2>
          <p>
            Nos équipements de haute qualité garantissent un excellent rendement énergétique et une longue durée de vie. Grâce à l'autoconsommation ou à la revente du surplus, vous rentabilisez rapidement votre installation.
          </p>
          <img src="/img-chauffage-maintenance.jpg" alt="Maintenance de chauffage" />
        </section>

        {/* Section Assistance & Réparation */}
        <section id="assistance">
          <h2>Installation clé en main</h2>
          <p>
            De l’étude de faisabilité à la mise en service, notre équipe vous accompagne à chaque étape du projet. Nous nous occupons des démarches administratives, des aides financières, et vous proposons une installation conforme aux normes en vigueur.
          </p>
          <img src="/img-chauffage-reparation.jpg" alt="Assistance et réparation de chauffage" />
          <button>Contactez-nous</button>
        </section>

        {/* Section Aide d'Urgence */}
        <section id="urgence">
          <h2>Un choix écologique et durable</h2>
          <p>
            Produisez votre propre électricité verte et réduisez durablement votre empreinte carbone.
          </p>
          <img src="/img-chauffage-urgence.jpg" alt="Service d'urgence chauffage" />
          <button className="btn-urgence">Appelez-nous maintenant</button>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Panneaux;
