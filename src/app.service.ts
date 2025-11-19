import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Feito com amor para a mulher mais amada do mundo! De: J Para: V';
  }
}
