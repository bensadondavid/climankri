import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Slider";
import Qualifications from "../Components/Qualifications";
import Vignette from "../Components/Vignette";
import Temoignages from "../Components/Temoignages";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home (){

    return(
        <>
            <Header />
            <div className="home">
                <ImageSlider />
                <Qualifications />
                <hr style={{width: '60%', margin: '5vh auto'}}/>
                <Vignette />
                <Temoignages />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home