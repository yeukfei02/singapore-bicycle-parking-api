import { Test, TestingModule } from '@nestjs/testing';
import { BicycleParkingController } from './bicycle-parking.controller';

describe('BicycleParkingController', () => {
  let controller: BicycleParkingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BicycleParkingController],
    }).compile();

    controller = module.get<BicycleParkingController>(BicycleParkingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
