import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodTruck, FoodTruckDocument } from './schemas/food-truck.schema';

@Injectable()
export class FoodTruckService {
  constructor(
    @InjectModel(FoodTruck.name)
    private readonly foodTruckModel: Model<FoodTruck>,
  ) {}

  async getAll(): Promise<FoodTruckDocument[]> {
    return await this.foodTruckModel.find();
  }

  async get(id: string): Promise<FoodTruckDocument> {
    const foodTruck = this.foodTruckModel.findById(id);

    if (!foodTruck) {
      throw new NotFoundException(`Food truck with ID ${id} not found`);
    }

    return foodTruck;
  }
}
