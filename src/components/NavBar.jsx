import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';



const NavBar=() =>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <NavLink to="/"><img src={Logo} alt="Logo" /> </NavLink>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><NavLink exact activeClassName="active" to ='/'>Home</NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/services'>Services</NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/about' >About</NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/contact'>Contact</NavLink> </li>
                    </ul>  
                </div>
                <div className="affiliated">
                    <ul >
                        <li><Button variant="contained">Join Affiliate</Button></li>
                    </ul>
                </div>


            </nav>
        </>
    );
};

export default NavBar;