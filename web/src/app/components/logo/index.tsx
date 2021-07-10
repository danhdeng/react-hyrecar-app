import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import CarImage from "../../../assets/images/car-logo.png";
import DarkCarImage from "../../../assets/images/car-logo-dark.png";

interface ILogoProps{
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

const LogoContainer=styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText=styled.div`
    ${tw`
        text-xl
        md: text-2xl    
        font-bold
        text-black
        m-1
    `}
    ${({color}:any)=>(color==="white" ? tw`text-white` : tw`text-black`)}
`;

const LogoImage=styled.div`
    width: auto;
    ${tw`
        h-6
        md: h-9
    `}
    img {
        width: auto;
        height: 100%;
    }
`;


export const Logo = (props: ILogoProps) => {
    const {color, bgColor}=props;

    return (
        <LogoContainer >
           <LogoImage>
                <img src={bgColor==="dark" ? DarkCarImage : CarImage}  alt="logo"/>
            </LogoImage> 
            <LogoText color={color || "dark"}>HyreCar.</LogoText>
        </LogoContainer>
    )
}
