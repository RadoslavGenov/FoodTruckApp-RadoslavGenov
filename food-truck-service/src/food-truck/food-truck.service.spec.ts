import { Test, TestingModule } from '@nestjs/testing';
import { FoodTruckService } from './food-truck.service';
import { getModelToken } from '@nestjs/mongoose';
import { FoodTruck } from './schemas/food-truck.schema';
import { Model } from 'mongoose';

const mockFoodTruck = {
  _id: 'someid',
  applicant: 'Test Truck',
  facilityType: 'Truck',
  locationDescription: 'Test Location',
  address: '123 Test St',
  foodItems: 'Test Food',
  latitude: 37.7749,
  longitude: -122.4194,
};

describe('FoodTruckService', () => {
  let service: FoodTruckService;
  let model: Model<FoodTruck>;

  const mockFoodTruckModel = {
    find: jest.fn().mockResolvedValue([mockFoodTruck]),
    findById: jest.fn().mockResolvedValue(mockFoodTruck),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FoodTruckService,
        {
          provide: getModelToken('FoodTruck'),
          useValue: mockFoodTruckModel,
        },
      ],
    }).compile();

    service = module.get<FoodTruckService>(FoodTruckService);
    model = module.get<Model<FoodTruck>>(getModelToken('FoodTruck'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of food trucks', async () => {
      const foodTrucks = await service.getAll();
      expect(foodTrucks).toEqual([mockFoodTruck]);
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('get', () => {
    it('should return a single food truck by ID', async () => {
      const foodTruck = await service.get('someid');
      expect(foodTruck).toEqual(mockFoodTruck);
      expect(model.findById).toHaveBeenCalledWith('someid');
    });
  });
});
