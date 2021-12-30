import React from "react";
import styled from "styled-components";
import  MainImg  from "../../assets/image-equilibrium.jpg";
import ImgLeft from "../../assets/icon-ethereum.svg";
import ImgRight from "../../assets/icon-clock.svg";
import ImgFooter from "../../assets/image-avatar.png";
import IconView from "../../assets/icon-view.svg";

const CardContainer = styled.div `
    max-width:300px;
    height:auto;
    background-color: #15273f;
    display:flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 15px #0c1729;
`;

const CardImg = styled.div `
    background-color: blue;
    width:270px;
    height:270px;
    margin: auto;
    border-radius: 8px;
    position: relative;
    cursor: pointer;

    img {
        width: 270px;
        border-radius: 8px;
    }
`;

const CardImgBg = styled.div `
    position: absolute;
    top:0;
    left:0;
    right:0;
    background-color: #01fefb;
    width: 270px;
    height: 270px;
    border-radius: 8px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-view {
        width: auto;
    }

    &:hover {
        opacity: 0.7;
    }
`

const CardTitle = styled.h1 `
    color: #FFF;
    margin: 0;
    margin-top: 20px;
    font-size: 20px;

    span {
        cursor: pointer;

        &:hover {
            color: #01fefb;
        }
    }
`;

const CardDesc = styled.p `
    color: #889dbc;
    margin: 20px 0;
    font-size: 15px;
`;

const CardInfoLine = styled.div `
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid blue;
`;

const InfoLineLeft = styled.div `
    display: flex;
    color: #01fefb;
    
    img {
        margin-right: 5px;
    }
`;

const InfoLineRight = styled.div `
    display: flex;
    color: #8aa7d3;
    align-items:center;

    img {
        margin-right: 5px;
    }

`;

const CardFooter = styled.footer `
    display: flex;
    align-items: center;
    color: #8aa7d3;
`;

const ImgProfileFooter = styled.div `
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding: 10px 0;

    img {
        width: 30px;
        border: 2px solid #FFF;
        border-radius: 50%;
        margin-right: 10px;
    }

    span {
        color: #FFF;
        cursor: pointer;

        &:hover {
            color: #01fefb;
        }
    }
`;

export const Card = () => {
    return (
        <CardContainer>
            <CardImg>
                <img src={MainImg} />
                <CardImgBg><img className="icon-view" src={IconView} /></CardImgBg>
            </CardImg>
            <CardTitle><span>Equilibrium #3429</span></CardTitle>
            <CardDesc>Our Equilibrium collection promotes balance and calm.</CardDesc>
            <CardInfoLine>
                <InfoLineLeft><img src={ImgLeft} /><span>0.041ETH</span></InfoLineLeft>
                <InfoLineRight><img src={ImgRight} /><span>3 days left</span></InfoLineRight>
            </CardInfoLine>
            <CardFooter>
                <ImgProfileFooter>
                    <img src={ImgFooter} />
                    <div>Creation of <span>Jules Wyvern</span></div>
                </ImgProfileFooter>
            </CardFooter>
        </CardContainer>
    );
}