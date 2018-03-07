import { Injectable } from '@angular/core';

@Injectable()
export class GpioService {

  constructor() { }

  gpioParser(data) {
    console.log('GpioParser, reporting in');
  }

}
