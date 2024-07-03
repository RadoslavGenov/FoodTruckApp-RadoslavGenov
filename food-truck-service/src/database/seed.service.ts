import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodTruck } from '../food-truck/schemas/food-truck.schema';
import { data } from '../../data';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(FoodTruck.name)
    private readonly foodTruckModel: Model<FoodTruck>,
  ) {}

  async onModuleInit() {
    const foodTrucks = data.map((item) => ({
      id: item.locationid,
      applicant: item.Applicant,
      facilityType: item.FacilityType,
      locationDescription: item.LocationDescription,
      address: item.Address,
      foodItems: item.FoodItems,
      longitude: item.Longitude,
      latitude: item.Latitude,
    }));

    await this.foodTruckModel.deleteMany({});
    await this.foodTruckModel.insertMany(foodTrucks);

    console.log('Database seeded successfully');
  }
}
