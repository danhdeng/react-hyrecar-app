import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { GetCars_cars } from "../../services/CarService/__generated__/GetCars";
import styled from 'styled-components'
import tw from 'twin.macro';
import Car from '../../components/car';
import { ICar } from '../../../typing/car';
import { createSelector } from 'reselect';
import { makeSelectTopCars } from './selectors';
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { Screens } from '../../responsive';

//  interface ICarCousel {
//     cars: ICar[],
//     numberOfDots: number,
// }
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

const topCarsStateSelector=createSelector(makeSelectTopCars, (topCars)=>({topCars}));



export default function CarCarousel() {
    const [current, setCurrent]=useState(0);
    const {topCars}=useSelector(topCarsStateSelector);
    const cars=topCars.map((item:GetCars_cars)=>({name:item.name, dailyPrice:item.dailyPrice, monthlyPrice:item.monthlyPrice, mileage: item.mileage, gas: item.gas, thumbnailUrl:item.thumbnailUrl, gearType: item.gearType})) as ICar[];
    const isCarsEmpty=!cars || cars.length===0;
    const isMobile = useMediaQuery({ maxWidth: Screens.sm });
    const numberOfDots=isMobile ? topCars.length : Math.ceil(topCars.length/3);

    if(isCarsEmpty) return null;
   
    return (
        <CarContainer>
             <Carousel value={current} onChange={setCurrent} slides={cars.map(item=><Car {...item} />)}
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
    )
}
