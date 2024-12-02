import Map from "./Map"
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function Footer (){

    return(
        <>
        <footer>
                <div className="logo-footer">
                    <img src="logoAvloneFooter.png" className="logo-avlone" />
                    <p>
                    Entreprise spécialisée en plomberie, chauffage, climatisation et énergies renouvelables.
                    CLIMANKRI met tout en oeuvre pour la satisfaction de ses clients.
                    </p>
                    <div className="reseaux">
                        <a href="https://www.facebook.com">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com">
                            <FaInstagram size={30} style={{ color: '#e4405f' }} />
                        </a>
                    </div>
                </div>
                <div className="map">
                    <Map />
                </div>
                <div className="contact-footer">
                    <p>Tel : 06 14 77 96 66</p>
                </div>
        </footer>
        </>
    )
}

export default Footer