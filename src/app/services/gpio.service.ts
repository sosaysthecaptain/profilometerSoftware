import { Injectable } from '@angular/core';
import { gpio } from 'tinker-gpio';
import { UploadService } from './upload.service';

@Injectable()
export class GpioService {

  constructor(public uploadService:UploadService) { }
  // machine state variables
  xPos = 0;
  yPos = 0;
  zPos = 0;


  gpioParser(data) {
    if(data.body == 'moveXBy') {
      console.log('moveXBy command received');
      this.uploadService.markAsComplete(data);
    }
  }

  // relative axis movement
  
  // absolute axis movement
  moveXBy() {
    
  }

  moveYBy() {

  }

  moveZBy() {

  }
  // other base GPIO

  

}
