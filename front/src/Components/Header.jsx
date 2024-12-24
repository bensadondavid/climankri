import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Menu from "./Menu";

function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [hambtn, setHambtn] = useState(true);
    const location = useLocation();

    const closeMenu = ()=>{
        setHambtn(true)
    }

    useEffect(() => {
        const resizeScreen = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeScreen);

        return () => {
            window.removeEventListener('resize', resizeScreen);
        };
    }, []);

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "end" });
                setHambtn(true)
            }
        }
    }, [location]);

    const handleClick = () => {
        setHambtn(!hambtn);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScrollToContact = () => {
        const contact = document.getElementById('contact')
        contact.scrollIntoView({behavior : 'smooth'})
    };

    return (
        <>
            {screenWidth > 1000 ? 
            <div className="entete">
                <p>Au service de votre habitat </p>
                <header>
                    <Link to='/' onClick={handleScrollToTop}><img src="logoAvlone.png" alt="logo" /></Link>
                    <nav>
                        <div className="links">
                            <div className="plomberie">
                                <Link to='/plomberie' className="plomberie-link" onClick={handleScrollToTop}>PLOMBERIE
                                    <div className="menu-deroulant">
                                        <Link to='/plomberie#renovation'>RÉNOVATION & POSE</Link>
                                        <Link to='/plomberie#depannage'>DÉPANNAGE RAPIDE</Link>
                                        <Link to='/plomberie#urgence'>SERVICE D'URGENCE</Link>
                                    </div>
                                </Link>
                            </div>
                            <div className="chauffage">
                                <Link to='/chauffage' className="chauffage-link" onClick={handleScrollToTop}>CHAUFFAGE
                                    <div className="menu-deroulant">
                                        <Link to='/chauffage#installation'>INSTALLATION MODERNE</Link>
                                        <Link to='/chauffage#maintenance'>MAINTENANCE ANNUELLE</Link>
                                        <Link to='/chauffage#assistance'>ASSISTANCE & RÉPARATION</Link>
                                        <Link to='/chauffage#urgence'>AIDE D'URGENCE</Link>
                                    </div>
                                </Link>
                            </div>
                            <div className="clim">
                                <Link to='/climatisation' className="clim-link" onClick={handleScrollToTop}>CLIMATISATION
                                    <div className="menu-deroulant">
                                        <Link to='/climatisation#systemes'>SYSTÈMES SUR MESURE</Link>
                                        <Link to='/climatisation#nettoyage'>NETTOYAGE & CONTRÔLE</Link>
                                        <Link to='/climatisation#diagnostic'>DIAGNOSTIC & RÉPARATION</Link>
                                    </div>
                                </Link>
                            </div>
                            <Link to='/sav' className="sav" onClick={handleScrollToTop}>SAV</Link>
                            <button className='contact-btn' onClick={handleScrollToContact}>CONTACT</button>
                        </div>
                    </nav>
                </header>
            </div>
            :
            hambtn ?
            <div className="entete">
                <p>Au service de votre habitat </p>
                <header>
                    <Link to='/' onClick={handleScrollToTop}><img src="logoAvlone.png" alt="logo" /></Link>
                    <button className="hambtn" onClick={handleClick}>|||</button>
                </header>
            </div>
            :
            <div className="entete">
                <p>Au service de votre habitat </p>
                <header>
                    <Link to='/' onClick={() => { handleScrollToTop(); handleClick(); }}><img src="logoAvlone.png" alt="logo" /></Link>
                    <button className="hambtn" onClick={handleClick}>|||</button>
                </header>
                <Menu closeMenu={closeMenu}/>
            </div>
        }
        </>
    );
}

export default Header;
