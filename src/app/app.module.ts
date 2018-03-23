import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { CommandsService } from './services/commands.service';
import { ParserService } from './services/parser.service';
import { GpioService } from './services/gpio.service';
import { CameraService } from './services/camera.service';
import { UploadService } from './services/upload.service';

import { ParserComponent } from './components/parser/parser.component';
import { Command } from 'selenium-webdriver';

export const firebaseConfig = {
  apiKey: "AIzaSyAfQYpSeeC27ZJuAHIRtBdbCN63Zvfr9SE",
  authDomain: "profilometer-cc55d.firebaseapp.com",
  databaseURL: "https://profilometer-cc55d.firebaseio.com",
  projectId: "profilometer-cc55d",
  storageBucket: "profilometer-cc55d.appspot.com",
  messagingSenderId: "538361946410"
};


@NgModule({
  declarations: [
    AppComponent,
    ParserComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AngularFireDatabase, CommandsService, ParserService, GpioService, CameraService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
