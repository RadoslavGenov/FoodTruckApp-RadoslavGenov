import { Module } from '@nestjs/common';
import { FoodTruckModule } from './food-truck/food-truck.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, FoodTruckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
