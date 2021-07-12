/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Cars
// ====================================================

export interface Cars_cars {
  __typename: "Car";
  id: string;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string;
  gas: string;
  gearType: string;
}

export interface Cars {
  cars: Cars_cars[];
}
