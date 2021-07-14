import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Screens } from '../../responsive';

import JeepImg from "../../../assets/images/jeep.png"

const AboutUsContainer=styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
    	items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
    	md:pl-0
    	md:pr-0
        bg-white
    `};
`;

const CarContainer=styled.div`
    width:auto;
    height:15em;
    margin-left:-50px;

    img {
        width: auto;
    height: 100%;
    }
    @media (min-width: ${Screens.md}){
    height: 28em;
    }
    @media (min-width: ${Screens.lg}){
        height:30em;
    }
    @media (min-width: ${Screens["2xl"]}){
        height:35em;
        margin-left:0;
    }
`;

const InfoContainer=styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;



const Title=styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal

    `};
`;

const InfoText=styled.p`
    ${tw`
    md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;



export default function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="jeep" />
            </CarContainer>
            <InfoContainer>
                <Title>Feel the best exprience with our Rental deals</Title>
                <InfoText>Learn everything you need to know about car rentals in Canada - 8 useful ... Car insurance in Canada; 
                    The best time for a road trip in Canada; BONUS: ... 12 months of driving experience in order to rent a car as a 
                    tourist in Canada! ... In most cases, a 4×4 is an unnecessary upsell, unless it is your personal preference to feel ...
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}
