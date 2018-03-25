import { Injectable } from '@angular/core';
import { NodeWebcam } from 'node-webcam';
import { UploadService } from './upload.service';
//import { Command } from '../models/Command';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class CameraService {
  // upload related
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;

  constructor(public uploadService:UploadService) { }

  // constructor(public uploadService:UploadService,
  //             private storage: AngularFireStorage,
  //             private db: AngularFirestore) { }

  // uploadImage(file: File) {
  //   // The storage path
  //   const path = `test/${new Date().getTime()}_${file.name}`;

  //   // Totally optional metadata
  //   const customMetadata = { metaString: 'Test metadata' };

  //   // The main task
  //   this.task = this.storage.upload(path, file, { customMetadata })

  //   // Progress monitoring
  //   this.percentage = this.task.percentageChanges();
  //   this.snapshot   = this.task.snapshotChanges().pipe(
  //     tap(snap => {
  //       console.log(snap)
  //       if (snap.bytesTransferred === snap.totalBytes) {
  //         // Update firestore on completion
  //         this.db.collection('photos').add( { path, size: snap.totalBytes })
  //       }
  //     })
  //   )
  //   // The file's download URL
  //   this.downloadURL = this.task.downloadURL(); 
  // }

  cameraParser(data) {
    if(data.body == 'captureImage') {
      console.log('captureImage command received');
      this.uploadService.markAsComplete(data);
    } else if (data.body == 'uploadTest') {
      console.log('upload test invoked');
      this.uploadTest();
    }
  }

  captureImage() {
    console.log('captureImage firing');
  }

  uploadTest() {
    const testImagePath = '../../assets/capturedImages/forUpload/testImage.png';
    //const testImage = new File(testImagePath, 'testImage');
  }

}
