import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import Car from '../../components/car';
import { Title } from './common';
import {ICar} from "../../../typing/car";
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import MclarenImg from "../../../assets/images/mclaren-orange-big.png"
import { useMediaQuery } from 'react-responsive';
import { Screens } from '../../responsive';

const TopCarContainer=styled.div`
    ${tw`
        max-w-screen-lg
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const CarContainer=styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;



export default function TopCars() {
    const [current, setCurrent]=useState(0);
    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };

      const cars=[  
        <Car {...testCar} />,
        <Car {...testCar2} />,
        <Car {...testCar} />,
        <Car {...testCar} />,
        <Car {...testCar2} />,
    ];
    const isMobile = useMediaQuery({ maxWidth: Screens.sm });

    const numberOfDots=isMobile ? cars.length : Math.ceil(cars.length/3);
    
    return (
        <TopCarContainer>
            <Title>Explore Our Top Deals</Title>
        <CarContainer>
        <Carousel value={current} onChange={setCurrent} slides={cars}
            plugins={[
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
              
              breakpoints={{
                640: {
                  plugins: [
                    "clickToChange",
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            /><Dots value={current} onChange={setCurrent} number={numberOfDots}/>
        </CarContainer>
        </TopCarContainer>
    )
}
