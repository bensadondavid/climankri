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
                        <Link className="plomberie-link">PLOMBERIE
                            <div className="menu-deroulant">
                                <Link>RÉNOVATION & POSE</Link>
                                <Link>DÉPANNAGE RAPIDE</Link>
                                <Link>SERVICE D'URGENCE</Link>
                            </div>
                        </Link>
                    </div>
                    <div className="chauffage">
                        <Link className="chauffage-link">CHAUFFAGE
                            <div className="menu-deroulant">
                                <Link>INSTALLATION MODERNE</Link>
                                <Link>MAINTENANCE ANNUELLE</Link>
                                <Link>ASSISTANCE & RÉPARATION</Link>
                                <Link>AIDE D'URGENCE</Link>
                            </div>
                        </Link>
                    </div>
                    <div className="clim">
                        <Link className="clim-link">CLIMATISATION
                            <div className="menu-deroulant">
                                <Link>SYSTÈMES SUR MESURE</Link>
                                <Link>NETTOYAGE & CONTRÔLE</Link>
                                <Link>DIAGNOSTIC & RÉPARATION</Link>
                            </div>
                        </Link>
                    </div>
                        <Link className="sav">SAV</Link>
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
