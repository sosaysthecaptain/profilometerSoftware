import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Command } from '../models/Command';

import { GpioService } from './gpio.service';
import { CameraService } from './camera.service';



@Injectable()

export class ParserService {


  constructor(public gpioService: GpioService, public cameraService:CameraService) { }

  private subject = new Subject<any>();
  
  sendMessage(data) {
    //   console.log('sendMessage is firing. Everybody should be getting a message now.')
      this.subject.next(data);

  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  
  parse(data) {
    this.sendMessage(data);             // this is for app.component (graphics) alone
    this.gpioService.gpioParser(data);
    this.cameraService.cameraParser(data);
  }

}
