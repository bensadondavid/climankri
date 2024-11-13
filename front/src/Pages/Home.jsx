import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Slider";

function Home (){

    return(
        <>
            <Header />
            <div className="home">
                <ImageSlider />
            </div>
        </>
    )
}

export default Home