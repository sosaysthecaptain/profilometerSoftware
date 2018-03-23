import { Injectable } from '@angular/core';
import { gpio } from 'tinker-gpio';

@Injectable()
export class GpioService {

  constructor() { }

  gpioParser(data) {
    console.log('GpioParser receiving command: ' + data.body);
  }

}
