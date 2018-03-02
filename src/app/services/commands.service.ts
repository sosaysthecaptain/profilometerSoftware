import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Command } from '../models/Command';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CommandsService {
  commandsCollection: AngularFirestoreCollection<Command>;
  commands: Observable<Command[]>;
  commandDoc: AngularFirestoreDocument<Command>

  constructor(public afs: AngularFirestore) { 
    //this.items = this.afs.collection('items').valueChanges();
    
    this.commandsCollection = this.afs.collection('items', ref => ref.orderBy('timeStamp', 'desc'));
    
    this.commands = this.commandsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Command;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getCommands() {
    return this.commands;
  }

  addCommand(item: Command) {
    this.commandsCollection.add(item);
  }

  deleteCommand(command: Command) {
    this.commandDoc = this.afs.doc(`items/${command.id}`);
    this.commandDoc.delete();
  }

}