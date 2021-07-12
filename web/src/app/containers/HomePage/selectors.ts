import { createSelector } from "reselect"
import { IRootAppState } from "../../../typing";

const selectHomePage=(state:IRootAppState)=>state.homePage

export const makeSelectTopCars=createSelector(selectHomePage, (homePage)=>homePage.topCars);