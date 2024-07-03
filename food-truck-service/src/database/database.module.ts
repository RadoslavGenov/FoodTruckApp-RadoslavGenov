import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FoodTruck,
  FoodTruckSchema,
} from 'src/food-truck/schemas/food-truck.schema';
import { SeedService } from './seed.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: FoodTruck.name, schema: FoodTruckSchema },
    ]),
  ],
  providers: [SeedService],
})
export class DatabaseModule {}
