import { Injectable } from '@nestjs/common';
import { getBicycleParkingApi } from './request/bicycleParking';

@Injectable()
export class BicycleParkingService {
  async getBicycleParkings(lat: string, long: string, dist: string) {
    const bicycleParkings = await getBicycleParkingApi(lat, long, dist);
    return bicycleParkings;
  }
}
