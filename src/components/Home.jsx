import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Services from "./Services";



const Home=() =>{
    const { updateHomePage }=useGlobalContext();
    useEffect(() => updateHomePage());
    return (
        <>
            <HeroSection/>
            <Services />
            {/* <Contact /> */}
            
             
                      
        </>
    );
};

export default Home;