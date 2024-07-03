import { Module } from '@nestjs/common';
import { FoodTruckService } from './food-truck.service';
import { FoodTruckController } from './food-truck.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodTruck, FoodTruckSchema } from './schemas/food-truck.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FoodTruck.name, schema: FoodTruckSchema },
    ]),
  ],
  providers: [FoodTruckService],
  controllers: [FoodTruckController],
})
export class FoodTruckModule {}
