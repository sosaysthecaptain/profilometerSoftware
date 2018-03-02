import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { CommandsService } from './services/commands.service';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AngularFireDatabase, CommandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
