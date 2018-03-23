import { Injectable } from '@angular/core';
import { NodeWebcam } from 'node-webcam';

@Injectable()
export class CameraService {

  constructor() { }

  cameraParser(data) {
    console.log('cameraParser, reporting in');
  }

}
