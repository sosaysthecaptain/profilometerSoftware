import { Injectable } from '@angular/core';
import { NodeWebcam } from 'node-webcam';
import { UploadService } from './upload.service';
//import { Command } from '../models/Command';


@Injectable()
export class CameraService {

  constructor(public uploadService:UploadService) { }

  cameraParser(data) {
    if(data.body == 'captureImage') {
      console.log('captureImage command received');
      this.uploadService.markAsComplete(data);
      
    }
  }

}
