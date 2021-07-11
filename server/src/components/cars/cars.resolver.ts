import { Query, Resolver } from "@nestjs/graphql";
import { CarService } from "./cars.service";


@Resolver()
export class CarResolver {
    constructor(private carService: CarService){

    }

    @Query(returns=>String)
    public async cars() {
        return "Hello from your HyreCar!!";
    }
}