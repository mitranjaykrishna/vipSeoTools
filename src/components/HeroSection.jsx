import React from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { Box } from "@mui/system";
import { ButtonGroup } from "@mui/material";
import { useGlobalContext } from "../context";

const HeroSection=() =>
{

    const {heroTopData,logoImage,heroPara,groupButton1,groupButton2,pageImage}=useGlobalContext();
    // console.log(name);

    return (
        <>
            <Wrapper>
                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="hero-top-data"><b>{heroTopData}</b></p>
                        <h1 className="hero-heading">
                            <img src={logoImage} alt="Logo" /> 
                        </h1>
                        <p className="hero-para">{heroPara}</p>
                        <Box>
                            <ButtonGroup variant="outlined" aria-label="outlined button group" className="buttonEffect">
                                <Button className="btn logReg "><b>{groupButton1}</b></Button>
                                <Button className="btn logReg" variant="contained"><b>{groupButton2}</b></Button>
                            </ButtonGroup>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <picture>
                        <img src={pageImage} alt="" className="hero-img fluidAnim" />
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

    .hero-heading img{
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
    transition: 0.3s ease-in-out;
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