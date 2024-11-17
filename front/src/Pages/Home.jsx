import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Slider";
import Qualifications from "../Components/Qualifications";

function Home (){

    return(
        <>
            <Header />
            <div className="home">
                <ImageSlider />
                <Qualifications />
            </div>
        </>
    )
}

export default Home