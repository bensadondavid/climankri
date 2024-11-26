import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Slider";
import Qualifications from "../Components/Qualifications";
import Vignette from "../Components/Vignette";

function Home (){

    return(
        <>
            <Header />
            <div className="home">
                <ImageSlider />
                <Qualifications />
                <hr style={{width: '60%', margin: '5vh auto'}}/>
                <Vignette />
            </div>
        </>
    )
}

export default Home