import React, { useEffect } from 'react'
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

const actionDispatch=(dispatch: Dispatch)=>({
  setTopCars: (cars: GetCars_cars[])=>dispatch(setTopCars(cars))
});



export default function TopCars() {
    
    const {setTopCars}=actionDispatch(useDispatch());

    const fetchTopCars=async ()=>{
        const carData=await carService.getCars().catch((err)=>{
          console.log("Error", err);
        }) as GetCars_cars[];
        if(carData){
          setTopCars(carData);
        }
      }

      useEffect(() => {
        fetchTopCars();
      },[]);
    
    return (
        
        <TopCarContainer>
            <Title>Explore Our Top Deals</Title>
            <CarCarousel />
        </TopCarContainer>
    )
}
