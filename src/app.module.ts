import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BicycleParkingModule } from './bicycle-parking/bicycle-parking.module';

@Module({
  imports: [ConfigModule.forRoot(), BicycleParkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
