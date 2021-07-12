import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import Car from '../../components/car';
import { Title } from './common';
import {ICar} from "../../../typing/car";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from 'react-responsive';
import { Screens } from '../../responsive';
import carService from '../../services/CarService';
import { GetCars_cars } from "../../services/CarService/__generated__/GetCars";
import CarCarousel from './carCarousel';

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


export default function TopCars() {
    const [data, setData]=useState([] as ICar[]);
    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailUrl:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailUrl:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };
    const carsArray=[testCar, testCar, testCar, testCar2, testCar2, testCar2, testCar2];
    const isMobile = useMediaQuery({ maxWidth: Screens.sm });

    const numberOfDots=isMobile ? carsArray.length : Math.ceil(carsArray.length/3);

    const fetchTopCars=async ()=>{
        const carData=await carService.getCars().catch((err)=>{
          console.log("Error", err);
        }) as GetCars_cars[];
        if(carData){
          const result=carData.map(item=>({name:item.name, dailyPrice:item.dailyPrice, monthlyPrice:item.monthlyPrice, mileage: item.mileage, gas: item.gas, thumbnailUrl:item.thumbnailUrl, gearType: item.gearType})) as ICar[];
          setData(result);
        }
      }

      useEffect(() => {
        fetchTopCars();
      },[]);
    
    return (
        
        <TopCarContainer>
            <Title>Explore Our Top Deals</Title>
            <CarCarousel cars={data} numberOfDots={numberOfDots} />
        </TopCarContainer>
    )
}
