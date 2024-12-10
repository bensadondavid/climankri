import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Menu from "./Menu";


function Header() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [hambtn, setHambtn] = useState(true)
    useEffect(() => {
        const resizeScreen = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeScreen);

        return () => {
            window.removeEventListener('resize', resizeScreen);
        };
    }, []);

    const handleClick = ()=>{
        setHambtn(!hambtn)
    }

    return (
        <>
        {screenWidth > 1000 ? 
        <div className="entete">
            <p>Au service de votre habitat </p>
           <header>
                <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
                <nav>
                <div className="links">
                    <div className="plomberie">
                        <Link to='/plomberie' className="plomberie-link">PLOMBERIE
                            <div className="menu-deroulant">
                                <Link to='/plomberie#renovation'>RÉNOVATION & POSE</Link>
                                <Link to='/plomberie#depanage'>DÉPANNAGE RAPIDE</Link>
                                <Link to='/plomberie#urgence'>SERVICE D'URGENCE</Link>
                            </div>
                        </Link>
                    </div>
                    <div className="chauffage">
                        <Link to='/chauffage' className="chauffage-link">CHAUFFAGE
                            <div className="menu-deroulant">
                                <Link to='/chauffage#installation'>INSTALLATION MODERNE</Link>
                                <Link to='/chauffage#maintenance'>MAINTENANCE ANNUELLE</Link>
                                <Link to='/chauffage#assistance'>ASSISTANCE & RÉPARATION</Link>
                                <Link  to='/chauffage#urgence'>AIDE D'URGENCE</Link>
                            </div>
                        </Link>
                    </div>
                    <div className="clim">
                        <Link to='/climatisation' className="clim-link">CLIMATISATION
                            <div className="menu-deroulant">
                                <Link to='/climatisation#systemes'>SYSTÈMES SUR MESURE</Link>
                                <Link to='/climatisation#nettoyage'>NETTOYAGE & CONTRÔLE</Link>
                                <Link to='/climatisation#diagnostic'>DIAGNOSTIC & RÉPARATION</Link>
                            </div>
                        </Link>
                    </div>
                        <Link to='/sav' className="sav">SAV</Link>
                        <button className='contact-btn'>CONTACT</button>
                    </div>
                </nav>
            </header>
            </div>
        :
        hambtn ?
        <div className="entete">
            <p>Au service de votre habitat </p>
            <header>
                <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
                <button className="hambtn" onClick={handleClick}>|||</button>
            </header>
        </div>
        :
        <div className="entete">
            <p>Au service de votre habitat </p>
            <header>
                <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
                <button className="hambtn" onClick={handleClick}>|||</button>
            </header>
            <Menu />
        </div>
    }
           
        </>
    );
}

export default Header;
