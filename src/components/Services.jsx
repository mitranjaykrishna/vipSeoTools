import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";



const Services=() =>{

    const {services}=useGlobalContext();
    // console.log(services);
    const [isReadMore, setReadMore]=useState(true);

    const toggleOver=()=>{
        setReadMore(!isReadMore);
    }
    



    return (
        <>
            <Wrapper className="section">
                <h2 className="common-heading"> Our Services</h2>
                <div className="container grid grid-three-column">
                    {
                        services.map((curElem) => {
                            const {id, title, price, description} =curElem;
                            return(
                                <div key={id} className="card">
                                    <figure>
                                        <h1 className="price">{price}</h1>
                                    </figure>
                                    <div className="card-data">
                                        <h3>{title}</h3>


                                        <p className="description">{isReadMore? description.slice(0,50):description}
                                            <span onClick={toggleOver} className='read-or-hide'>
                                                {isReadMore?" ...Read More": " ...Read Less"}
                                            </span>
                                        </p>


                                        <Button className="btn"><a href="https://access.vipseotools.com/signup/" >Subscribe</a></Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Wrapper>
        </>
    );

};

const Wrapper = styled.section`
    padding: 9rem 0;

    .container{
        max-width: 120rem;

    }

    .card{
        border: 0.1rem solid rgb(170 170 170/40%);
        

        .card-data{
            padding: 0 2rem;
            
        }
        
        h3{
            margin: 3rem 0;
            font-weight: 510;
            font-size: 2.4rem;
        }

        .description{
            text-align: justify;
            text-justify: inter-character;
        }

        .btn{
            margin: 2rem auto;
            background-color: rgb(0 0 0 /0%);
            border: 0.1rem solid rgb(98 84 243);
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(98 84 243);
            font-size: 1.4rem;

            &:hover{
                background-color: rgb(98 84 243);
                color: #fff;
            }

        }
    }

    figure{
        width: auto;
        display: flex;
        justify-content: center;
        align-items:center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        
        
        .price{
            color: #1e9affef;;
        }

        &::after{
            content: "";
            position: absolute;
            top:0;
            left:0;
            width: 0%;
            height: 100%;
            background-color: #1e9aff61;
            transition: all 0.2s linear;
            cursor: pointer;
        }

        &:hover::after{
            width:100%
        }
        

        &:hover img{
            transform: scale(1,2);
        }

        img{
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }
    }
    a:link, a:visited{
    color: rgb(98 84 243);

    &:hover{
        color: #fff;
    }
    
    }
    .read-or-hide{
    color: ${({theme})=> theme.colors.helper};
    cursor: pointer;
}

`;

export default Services;