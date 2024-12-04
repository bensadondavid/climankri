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
          <Link>RÉNOVATION & POSE</Link>
          <Link>DÉPANNAGE RAPIDE</Link>
          <Link>SERVICE D'URGENCE</Link>
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
          <Link>INSTALLATION MODERNE</Link>
          <Link>MAINTENANCE ANNUELLE</Link>
          <Link>ASSISTANCE & RÉPARATION</Link>
          <Link>AIDE D'URGENCE</Link>
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
          <Link>SYSTÈMES SUR MESURE</Link>
          <Link>NETTOYAGE & CONTRÔLE</Link>
          <Link>DIAGNOSTIC & RÉPARATION</Link>
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
