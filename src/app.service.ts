import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getMain() {
    const data = {
      message: 'singapore-bicycle-parking-api',
    };
    return data;
  }
}
