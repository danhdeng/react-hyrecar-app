import { Module } from "@nestjs/common";
import { CarResolver } from "./cars.resolver";
import { CarService } from "./cars.service";


@Module({
    imports:[],
    providers: [CarService, CarResolver],
    exports: [CarService]
})
export class CarModule {

}