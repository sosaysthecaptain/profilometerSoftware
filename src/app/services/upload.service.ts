import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Command } from '../models/Command';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UploadService {
  commandsCollection: AngularFirestoreCollection<Command>;
  commands: Observable<Command[]>;
  commandDoc: AngularFirestoreDocument<Command>

  constructor(public afs: AngularFirestore) { 
    this.commandsCollection = this.afs.collection('items', ref => ref.orderBy('timeStamp', 'desc'));

    
    this.commands = this.commandsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Command;
        data.id = a.payload.doc.id;
        
        return data;
      });
    });
  }

  markAsComplete(command: Command) {
    console.log('markAsComplete firing');
    this.commandDoc = this.afs.doc(`items/${command.id}`);
    this.commandDoc.update({"status":'complete'});
  }

  

}
