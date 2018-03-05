import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Command } from '../models/Command';



@Injectable()

export class ParserService {
  // data: Observable<any[]>;
  // latestCommand;

  constructor() { }

  private subject = new Subject<any>();
 
  sendMessage(data) {
      this.subject.next(data);
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
  


  parse(data) {
    this.sendMessage(data);
  }

}
