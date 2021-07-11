import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarResolver } from './cars.resolver';
import { CarService } from './cars.service';
import { Car } from './entities/car';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
