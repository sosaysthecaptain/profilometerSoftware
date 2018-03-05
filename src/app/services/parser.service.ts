import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';



@Injectable()

export class ParserService {
  // data: Observable<any[]>;
  // latestCommand;

  constructor() { }

  private subject = new Subject<any>();
 
  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
  


  parse(data) {
    console.log('Hello from ParserService! Calling sendMessage...');
    this.sendMessage('This is a message being sent from ParserService');
  }

}
