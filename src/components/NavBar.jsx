import React from "react";

import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import "../styles/NavBar.css"



const NavBar=() =>{
    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <NavLink to="/"><img src={"./images/logo.png"} alt="Logo" /> </NavLink>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/' >           Home     </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/services' >    Services </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/about'  >      About    </NavLink></Button></li>
                        <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to='/contact' >     Contact  </NavLink></Button></li>
                    </ul>  
                </div>
                <div className="affiliated">
                    <ul >
                        <li>
                            <Box>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" className="affiButtonG buttonEffect">
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