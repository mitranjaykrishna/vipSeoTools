import React from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { Box } from "@mui/system";
import { ButtonGroup } from "@mui/material";

const HeroSection=() =>
{
    return (
        <>
            <Wrapper>
                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="hero-top-data">We are</p>
                        {/* <h1 className="hero-heading">VIPSEOTOOLS</h1> */}
                        <img src={"./images/logo.png"} alt="Logo" />
                        <p className="hero-para">Best, Reliable Group Buy Services</p>
                        <Box>
                            <ButtonGroup variant="outlined" aria-label="outlined button group" className="buttonEffect">
                                <Button className="btn logReg "><b>Login</b></Button>
                                <Button className="btn logReg" variant="contained"><b>register</b></Button>
                            </ButtonGroup>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <picture>
                        <img src="./images/hero.svg" alt="" className="hero-img fluidAnim" />
                    </picture>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper= styled.section `

    padding: 9rem 0;

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .section-hero-data img{
        height: 15rem;
        width: 100%
    }

    .btn{
        max-width: 16rem;
    }

    .logReg{
        
        font-size: 1.5rem;
    }

    .buttonEffect :hover{
    color: rgb(71, 209, 240);
    text-decoration: underline;
    transform: scale(0.96);
}


    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.5rem;
        color: ${({theme})=> theme.colors.helper};
    }

    .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    }

    .section-hero-image{
        display:flex;
        justify-content: center;
        max-width:60rem;
        
    }

    picture {
        text-align: center;
    }

    .hero-img {
        max-width: 80%;
    }

    .fluidAnim{
        animation: MoveUpDown 8s ease-in-out infinite alternate-reverse both;
    }

    @keyframes MoveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
}

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
        gap: 7.2rem;
        }
    }



`;

export default HeroSection;