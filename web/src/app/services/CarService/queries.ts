import { gql } from "@apollo/client";

export const GET_ALL_CARS=gql`
    query	GetCars{
        cars{
        id,
        name,
        dailyPrice,
        monthlyPrice,
        thumbnailUrl,
        gas,
        gearType,
        mileage
        }
    }
`;

