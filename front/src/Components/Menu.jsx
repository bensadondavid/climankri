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
          PLOMBERIE ▼
        </button>
        <div className={`submenu ${activeMenu === "plomberie" ? "active" : ""}`}>
          <Link to="/">Salle de Bain</Link>
          <Link to="/">Chauffe-Eau</Link>
          <Link to="/">Dépannage</Link>
        </div>
      </div>

      <div className="menu-item">
        <button
          className="menu-link"
          onClick={() => toggleMenu("chauffage")}
        >
          CHAUFFAGE ▼
        </button>
        <div className={`submenu ${activeMenu === "chauffage" ? "active" : ""}`}>
          <Link to="/">PAC Air-Eau</Link>
          <Link to="/">Radiateurs</Link>
          <Link to="/">Chaudières</Link>
        </div>
      </div>

      <div className="menu-item">
        <button
          className="menu-link"
          onClick={() => toggleMenu("climatisation")}
        >
          CLIMATISATION ▼
        </button>
        <div className={`submenu ${activeMenu === "climatisation" ? "active" : ""}`}>
          <Link to="/">PAC Air-Air</Link>
          <Link to="/">VRV</Link>
          <Link to="/">Gainables</Link>
        </div>
      </div>

      <div className="menu-item">
        <Link to="/contact" className="menu-link">CONTACT</Link>
      </div>
    </div>
  );
}

export default Menu;
