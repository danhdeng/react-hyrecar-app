import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { GetCars_cars } from "../../services/CarService/__generated__/GetCars";
import styled from 'styled-components'
import tw from 'twin.macro';
import Car from '../../components/car';
import { ICar } from '../../../typing/car';


 interface ICarCousel {
    cars: ICar[],
    numberOfDots: number,
}
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
export default function CarCarousel(props: ICarCousel) {
    console.log("car carousel");
    const {cars, numberOfDots}=props;
    const [current, setCurrent]=useState(0);
    console.log(cars);
    console.log(numberOfDots);
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
