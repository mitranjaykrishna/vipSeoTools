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
                <div className="containe grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="hero-top-data">We are</p>
                        <h1 className="hero-heading">VIPSEOTOOLS</h1>
                        <p className="hero-para">Best, Reliable Group Buy Services</p>
                        <Box>
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button className="btn logReg"><b>Login</b></Button>
                                <Button className="btn logReg" variant="contained"><b>register</b></Button>
                            </ButtonGroup>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <picture>
                        <img src="./images/hero.svg" alt="" />
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

    .btn{
        max-width: 16rem;
    }

    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({theme})=> theme.colors.helper};
    }

    .hero-heading{
        text-transform: uppercase;
        font-size: 6.4rem;
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

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
        gap: 7.2rem;
        }
    }



`;

export default HeroSection;