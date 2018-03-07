import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParserService } from '../../services/parser.service';
import { CommandsService } from '../../services/commands.service';
import { Command } from '../../models/Command';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  providers: [ParserService, CommandsService]
})
export class CameraComponent implements OnInit {
  receivedCommand: any;
  subscription: Subscription;
  parserSubscription: Subscription;


  constructor(public parserService:ParserService, public commandsService: CommandsService) {
    
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
    console.log('camera localParser firing');
  }

}

