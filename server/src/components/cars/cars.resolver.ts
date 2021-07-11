import { InternalServerErrorException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarService } from './cars.service';
import { NewCarInput } from './datatoobject/car.input';
import { Car } from './entities/car';

@Resolver()
export class CarResolver {
  constructor(private carService: CarService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carService.getAllCars().catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  @Mutation((returns) => Car)
  public async addCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carService.addCar(newCarData).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
}
