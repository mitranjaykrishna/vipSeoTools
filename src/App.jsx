import React from "react";
import { Route , Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact"
import Services from "./components/Services";
import Home from "./components/Home";

const App=()=>{
    return (
        <>
            <div>
                <NavBar />
                
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/services' element={<Services />}/>
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />}/>
                </Routes>
            </div>
        </>
    );
};

export default App;