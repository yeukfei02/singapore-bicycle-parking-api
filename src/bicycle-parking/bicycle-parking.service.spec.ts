import { Test, TestingModule } from '@nestjs/testing';
import { BicycleParkingService } from './bicycle-parking.service';

describe('BicycleParkingService', () => {
  let service: BicycleParkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BicycleParkingService],
    }).compile();

    service = module.get<BicycleParkingService>(BicycleParkingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
