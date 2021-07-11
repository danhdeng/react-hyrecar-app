import { Module } from "@nestjs/common";
import { CarModule } from "./cars/cars.module";


@Module({
    imports: [CarModule]
})
export class ComponentModule{

}