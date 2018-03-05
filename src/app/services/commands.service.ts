import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Command } from '../models/Command';
import { Observable } from 'rxjs/observable';
import { ParserService } from './parser.service';

var uniquesThisSession = [];

@Injectable()
export class CommandsService {
  commandsCollection: AngularFirestoreCollection<Command>;
  commands: Observable<Command[]>;
  commandDoc: AngularFirestoreDocument<Command>
  // uniquesThisSession = [];

  constructor(
    public afs: AngularFirestore,
    public parserService: ParserService
  ) { 
    //this.items = this.afs.collection('items').valueChanges();
    
    this.commandsCollection = this.afs.collection('items', ref => ref.orderBy('timeStamp', 'desc'));

    
    this.commands = this.commandsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Command;
        data.id = a.payload.doc.id;
        
        this.checkUnique(data);
        return data;
      });
    });

    

    // this.commandsCollection.valueChanges() {
    //   console.log('valueChanges!')
    // }
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

  markAsRead(command: Command) {
    this.commandDoc = this.afs.doc(`items/${command.id}`);
    this.commandDoc.update({"read":true});
  }

  // parser functionality

  // checks if event is unique. If so, fires handleNewCommand
  checkUnique(data) {
    if(data.read == true) {
      return
    } else {
      this.markAsRead(data);
      // check if unique
      var unique = true;

      let length = uniquesThisSession.length;
      for(var i = 0; i<length; i++) {
        let candidate = uniquesThisSession[i]
        //console.log('evaluating uniqueness. Candidate: ' + candidate + ', data.id: ' + data.id);
        if (candidate == data.id) {
          unique = false;
        } 
      }
      // if unique, we can use it. Call handleNewCommand.
      if(unique == true) {
        uniquesThisSession.push(data.id);
        this.handleNewCommand(data);
      }
    }
  }

  handleNewCommand(command) {
    console.log('handleNewCommand firing. data.id: ' + command.id);
    this.parserService.parse(command);
  }

}