import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FoodTruckDocument = HydratedDocument<FoodTruck>;

@Schema({ collection: 'food_trucks' })
export class FoodTruck {
  @Prop()
  locationId: string;

  @Prop()
  applicant: string;

  @Prop()
  facilityType: string;

  @Prop()
  locationDescription: string;

  @Prop()
  address: string;

  @Prop()
  foodItems: string;

  @Prop()
  longitude: number;

  @Prop()
  latitude: number;
}

export const FoodTruckSchema = SchemaFactory.createForClass(FoodTruck);
