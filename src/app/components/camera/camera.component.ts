import { Component, OnInit } from '@angular/core';
import { ParserService } from '../../services/parser.service';
import { Command } from '../../models/Command';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  providers: [ParserService]
})
export class CameraComponent implements OnInit {
  receivedCommand: any;
  subscription: Subscription;

  constructor(public parserService:ParserService) {
    this.subscription = this.parserService.getMessage().subscribe(receivedCommand => { 
      this.receivedCommand = receivedCommand;
      console.log('MESSAGE RECIEVED IN CAMERA!!!! The message is: ');
      console.log(receivedCommand);
      this.localParser(receivedCommand);
    });
  }

  ngOnInit() {
    console.log('camera component, checking in');
  }

  localParser(data) {
    console.log('camera localParser firing');
  }

}
