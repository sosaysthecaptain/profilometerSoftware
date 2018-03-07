import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Command } from '../models/Command';



@Injectable()

export class ParserService {


  constructor() { }

  private subject = new Subject<any>();
  public boringVariable;
  
 
  
  sendMessage(data) {
      console.log('sendMessage is firing. Everybody should be getting a message now.')
      this.subject.next(data);

      // experimental
      this.boringVariable = data;
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      console.log('ParserServce getMessage() firing');
      return this.subject.asObservable();
  }

  


  parse(data) {
    this.sendMessage(data);
  }

}
