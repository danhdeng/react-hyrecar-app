import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Title } from './common';
import "@brainhubeu/react-carousel/lib/style.css";
import carService from '../../services/CarService';
import { GetCars_cars } from "../../services/CarService/__generated__/GetCars";
import { Dispatch } from '@reduxjs/toolkit/';
import CarCarousel from './carCarousel';
import { setTopCars } from './slicer';
import { useDispatch } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import { loadavg } from 'os';


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

const LoadingContainer=styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `}
`;

const actionDispatch=(dispatch: Dispatch)=>({
  setTopCars: (cars: GetCars_cars[])=>dispatch(setTopCars(cars))
});

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));



export default function TopCars() {
    const [isLoading, setIsLoading]=useState(true);
    const {setTopCars}=actionDispatch(useDispatch());

    const fetchTopCars=async ()=>{
        setIsLoading(true);
        const carData=await carService.getCars().catch((err)=>{
          console.log("Error", err);
        }) as GetCars_cars[];

        //await wait(6000);
        //await new Promise(resolve => setTimeout(resolve, 5000));

        if(carData){
          setTopCars(carData);
        }
        setIsLoading(false);
      }

      useEffect(() => {
        fetchTopCars();
      },[]);
      console.log("loading:", isLoading);
    return (
        <TopCarContainer>
          <Title>Explore Our Top Deals</Title>
            { isLoading && (<LoadingContainer>
            <MoonLoader loading size={20} />
              </LoadingContainer>)
            }
            {!isLoading && <CarCarousel />}
        </TopCarContainer>
    )
}
