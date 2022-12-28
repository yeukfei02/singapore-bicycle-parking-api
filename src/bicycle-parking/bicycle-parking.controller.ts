import { Controller, Get, Query } from '@nestjs/common';
import { BicycleParkingService } from './bicycle-parking.service';
import { BicycleParkingsRes } from './interface/bicycleParking';

@Controller('bicycle-parking')
export class BicycleParkingController {
  constructor(private readonly bicycleParkingService: BicycleParkingService) {}

  @Get()
  async getBicycleParking(
    @Query('lat') lat: string,
    @Query('long') long: string,
    @Query('dist') dist: string,
  ): Promise<BicycleParkingsRes> {
    const bicycleParkings = await this.bicycleParkingService.getBicycleParkings(
      lat,
      long,
      dist,
    );

    const response = {
      message: 'bicycle parking',
      bicycleParkings: bicycleParkings,
      count: bicycleParkings.length,
    };
    return response;
  }
}
