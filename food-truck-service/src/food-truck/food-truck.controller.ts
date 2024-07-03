import { Controller, Get, Param } from '@nestjs/common';
import { FoodTruckService } from './food-truck.service';
import { FoodTruck } from './schemas/food-truck.schema';

@Controller('food-trucks')
export class FoodTruckController {
  constructor(private readonly foodTruckService: FoodTruckService) {}

  @Get()
  async getAll(): Promise<FoodTruck[]> {
    return await this.foodTruckService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<FoodTruck> {
    return this.foodTruckService.get(id);
  }
}
