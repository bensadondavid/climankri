import React from "react";
import { Link } from "react-router-dom";
import '/src/menu.css'

function Menu (){

    return(
        <>
            <div className="menu">
                <Link to='/'>Plomberie</Link>
                <Link to='/'>Plomberie</Link>
                <Link to='/'>Plomberie</Link>
                <Link to='/'>Plomberie</Link>
                <Link to='/'>Plomberie</Link>
            </div>        
        </>
    )
}

export default Menu