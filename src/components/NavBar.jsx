import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



const NavBar=() =>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <NavLink to="/"><img src={Logo} alt="Logo" /> </NavLink>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><NavLink exact activeClassName="active" to ='/' className="menuNavLink">         <Button>  Home     </Button></NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/services' className="menuNavLink">  <Button>  Services </Button></NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/about'  className="menuNavLink">    <Button>  About    </Button></NavLink></li>
                        <li><NavLink exact activeClassName="active" to='/contact' className="menuNavLink">   <Button>  Contact  </Button></NavLink></li>
                    </ul>  
                </div>
                <div className="affiliated">
                    <ul >
                        <li>
                            <Box>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" className="affiButtonG">
                                    <Button><b>Login</b></Button>
                                    <Button><b>register</b></Button> 
                                    <Button variant="contained" ><b>Join Affiliate</b></Button>       
                                </ButtonGroup>
                            </Box>
                        </li>
                    </ul>
                </div>


            </nav>
        </>
    );
};

export default NavBar;