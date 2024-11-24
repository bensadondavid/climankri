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
                                    <Link>SALLE DE BAIN</Link>
                                    <Link>CHAUFFE-EAU</Link>
                                    <Link>DEPANNAGE</Link>
                                </div>
                            </Link>
                        </div>
                        <div className="chauffage">
                            <Link className="chauffage-link">CHAUFFAGE
                                <div className="menu-deroulant">
                                    <Link>PAC AIR-EAU</Link>
                                    <Link>RADIATEURS</Link>
                                    <Link>CHAUDIERES</Link>
                                    <Link>DESEMBOUAGE</Link>
                                </div>
                            </Link>
                        </div>
                        <div className="clim">
                            <Link className="clim-link">CLIMATISATION
                                <div className="menu-deroulant">
                                    <Link>PAC AIR-AIR</Link>
                                    <Link>VRV</Link>
                                    <Link>GAINABLES</Link>
                                </div>
                            </Link>
                        </div>
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
