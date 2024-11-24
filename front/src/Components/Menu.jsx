import React from "react";
import { Link } from "react-router-dom";
import '/src/menu.css'

function Menu (){

    return(
        <>
            <div className="menu">
                <Link to='/'>PLOMBERIE</Link>
                <Link to='/'>CHAUFFAGE</Link>
                <Link to='/'>CLIMATISATION</Link>
                <Link to='/'>CONTACT</Link>
            </div>        
        </>
    )
}

export default Menu