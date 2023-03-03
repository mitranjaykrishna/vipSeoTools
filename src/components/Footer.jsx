import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer =()=>{
    return <Wrapper>

    <section className='contact-sort'>
        <div className='grid grid-two-column'>
            <div>
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>
            </div>

            <div>
                <NavLink to='/services'>
                <Button variant='contained'>Get Started</Button>
                </NavLink>
            </div>
        </div>

    </section>

    {/* footer section */}

    <footer>
        <div className='container grid grid-four-column'>

            {/* 1st col */}
            <div className='footer-about'>
                <h3>VipSeoTools</h3>
                <p>Best, Reliable Group Buy Services</p>
            </div>


            {/* 2nd col */}
            <div className='footer-subscribe'>
                <h3>Subscribe to get important updates</h3>
                <form action='#' >
                    <input type='email' required autoComplete='off' placeholder='Email'/>
                    <input type='submit' value='Subscribe'/>
                </form>
            </div>

            {/* 3rd col */}
            <div className='footer-social'>
                <h3>Follows Us</h3>
                <div className='footer-social--icons'>
                    <div>
                        <a href='https://www.instagram.com/vipseotools' target='_blank' rel="noreferrer">
                            <FaInstagram className="icons" />
                        </a>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/Vipseotools?mibextid=ZbWKwL' target='_blank' rel='noreferrer'>
                            <FaFacebook className="icons" />
                        </a>
                    </div>
                </div>

            </div>

            {/* 4th col */}
            <div className='footer-contact'>
                <h3 className='footer-contact-heading'> Contact Us</h3>
                <h3>Address- 54 3rd floor, Rolex Apartments, Lucknow, UP 226016</h3>
            </div>
        </div>

        {/* bottom section */}

        <div className='footer-bottom--section'>
            <hr />
            <div className='container grid grid-three-column'>
                <p>
                    @{new Date().getFullYear()} VipSeoTools. All Rights Reserved
                </p>
                <div>
                    <p>PRIVACY POLICY</p>
                </div>
                <div>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>

        </div>
    </footer>

    </Wrapper>
}

const Wrapper=styled.section`
    .contact-sort{
        max-width:50vw;    
        margin: auto;
        padding: 1rem 10rem;
        background-color: ${({theme})=> theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }

    footer{
        padding: 14rem 0 2rem 0;
        background-color: ${({theme})=> theme.colors.footer_bg};

        h3{
            color: ${({theme})=> theme.colors.hr};
        }

        p{
            color: ${({theme})=> theme.colors.white};
        }

        .footer-subscribe{
            h3{
                padding-bottom: 2rem;
            }
        }

        .footer-social--icons{
            display: flex;
            gap: 2rem;
            padding-top: 2rem;
        

            div{
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme})=> theme.colors.white};


                .icons{
                    color: ${({theme})=> theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }

        .footer-contact{
            .footer-contact-heading{
                padding-bottom: 2rem;
            }
        }

        .footer-bottom--section{
            padding-top: 4rem;

            hr{
                margin-bottom: 2rem;
                color: ${({theme})=> theme.colors.hr};
                height: 0.1px;
            }

        }
    }
`;

export default Footer;