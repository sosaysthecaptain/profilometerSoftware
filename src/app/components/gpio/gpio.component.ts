import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParserService } from '../../services/parser.service';
import { Command } from '../../models/Command';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-gpio',
  templateUrl: './gpio.component.html',
  styleUrls: ['./gpio.component.css'],
  providers: [ParserService]
})
export class GpioComponent implements OnInit {
  receivedCommand: any;
  subscription: Subscription;

  constructor(public parserService:ParserService) {
    this.subscription = this.parserService.getMessage().subscribe(receivedCommand => { 
      this.receivedCommand = receivedCommand;
      console.log('MESSAGE RECIEVED!!!! The message is: ');
      //console.log(receivedCommand);
      this.localParser(receivedCommand);
    });
  }


  ngOnInit() {
  }

  localParser(data) {
    console.log('gpio localParser firing');
  }
}
