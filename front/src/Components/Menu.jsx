import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/menu.css";

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="menu">
      <div className="menu-item">
        <button
          className="menu-link"
          onClick={() => toggleMenu("plomberie")}
        >
          PLOMBERIE
        </button>
        <div className={`submenu ${activeMenu === "plomberie" ? "active" : ""}`}>
          <Link to="/plomberie#renovation">RÉNOVATION & POSE</Link>
          <Link to="/plomberie#depannage">DÉPANNAGE RAPIDE</Link>
          <Link to="/plomberie#urgence">SERVICE D'URGENCE</Link>
        </div>
      </div>

      <div className="menu-item">
        <button
          className="menu-link"
          onClick={() => toggleMenu("chauffage")}
        >
          CHAUFFAGE
        </button>
        <div className={`submenu ${activeMenu === "chauffage" ? "active" : ""}`}>
          <Link to="/chauffage#installation">INSTALLATION MODERNE</Link>
          <Link to="/chauffage#maintenance">MAINTENANCE ANNUELLE</Link>
          <Link to="/chauffage#assistance">ASSISTANCE & RÉPARATION</Link>
          <Link to="/chauffage#urgence">AIDE D'URGENCE</Link>
        </div>
      </div>

      <div className="menu-item">
        <button
          className="menu-link"
          onClick={() => toggleMenu("climatisation")}
        >
          CLIMATISATION
        </button>
        <div className={`submenu ${activeMenu === "climatisation" ? "active" : ""}`}>
          <Link to="/climatisation#systemes">SYSTÈMES SUR MESURE</Link>
          <Link to="/climatisation#nettoyage">NETTOYAGE & CONTRÔLE</Link>
          <Link to="/climatisation#diagnostic">DIAGNOSTIC & RÉPARATION</Link>
        </div>
      </div>

      {/* Lien SAV pour mobile */}
      <div className="menu-item sav-mobile-wrapper">
        <Link to="/sav" className="sav-mobile">SAV</Link>
      </div>

      <div className="menu-item">
        <Link to="/contact" className="menu-link">
          <button className="btn-contact-sous-menu">CONTACT</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
