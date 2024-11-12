import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


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
           <header>
                <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
                <nav>
                    <div className="links">
                        <Link>PLOMBERIE</Link>
                        <Link>CHAUFFAGE</Link>
                        <Link>CLIMATISATION</Link>
                        <button className='contact-btn'>CONTACT</button>
                    </div>
                </nav>
            </header>
        :
        hambtn ?
             <header>
             <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
             <button className="hambtn" onClick={handleClick}>|||</button>
         </header>
        :
            <header>
                <Link to='/'><img src="logoAvlone.png" alt="logo" /></Link>
                <button className="hambtn" onClick={handleClick}>|||</button>
                <nav>
                        <Link>PLOMBERIE</Link>
                        <Link>CHAUFFAGE</Link>
                        <Link>CLIMATISATION</Link>
                </nav>
            </header>
    }
           
        </>
    );
}

export default Header;
