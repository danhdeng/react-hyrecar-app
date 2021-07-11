import { InputType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000, { message: 'daily price can not be that high' })
  @Min(10, { message: 'daily price can not be that low' })
  dailyPrice: number;

  @Field((type) => Int)
  @Max(25000, { message: 'monthly price can not be that high' })
  @Min(150, { message: 'monthly price can not be that low' })
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}