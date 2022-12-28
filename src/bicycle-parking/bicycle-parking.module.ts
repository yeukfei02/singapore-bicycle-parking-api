import { Module } from '@nestjs/common';
import { BicycleParkingController } from './bicycle-parking.controller';
import { BicycleParkingService } from './bicycle-parking.service';

@Module({
  controllers: [BicycleParkingController],
  providers: [BicycleParkingService],
})
export class BicycleParkingModule {}
