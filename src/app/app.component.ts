import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommandsService } from './services/commands.service';
import { ParserService } from './services/parser.service';
import { Command } from './models/Command';

import { Subscription } from 'rxjs/Subscription';
 



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommandsService, ParserService],
})
export class AppComponent implements OnInit {
  commands: any;
  latestCommand: any;
  title = 'app';
  imagePath = "../dist/assets/outputImages/calibrationGrid.svg";
  EXPOSURETIME = 1000;
  IMAGETOEXPOSE = "../dist/assets/outputImages/lithoTestPattern1.svg";
  CALIBRATIONIMAGE = "../dist/assets/outputImages/calibrationGrid.svg";
  calibrationGridActive = false;

  //data: any;

  message: any;
  subscription: Subscription;

  constructor(public commandsService:CommandsService, public parserService:ParserService) {
    this.subscription = this.parserService.getMessage().subscribe(message => { 
      this.message = message;
      console.log('MESSAGE RECIEVED!!!! The message is: ');
      console.log(message);
    });
  }

  ngOnInit() {
    this.commands = this.commandsService.getCommands();

    this.commandsService.getCommands().subscribe(commands => {
        this.commands = commands;
    });


  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === 67) {   // "c"
      this.toggleCalibrationGrid();
    }

    if (event.keyCode === 32) {   // spacebar
      this.flashImage();
    }
  }

  flashImage() {
    let image = document.getElementById("displayImage");
    this.imagePath = this.IMAGETOEXPOSE;
    image.style.visibility = "visible";
    setTimeout(function() {
      let image = document.getElementById("displayImage");
      image.style.visibility = "hidden";
    }, this.EXPOSURETIME);
  }

    toggleCalibrationGrid() {
        let image = document.getElementById("displayImage");
      
        if (!this.calibrationGridActive) {
          console.log("calibration grid is inactive. Activating.")
          this.imagePath = this.CALIBRATIONIMAGE;
          image.style.visibility = "visible";
          this.calibrationGridActive = true;
        } else {
          image.style.visibility = "hidden";
          this.imagePath = this.IMAGETOEXPOSE;
          this.calibrationGridActive = false;
        }
      
      }  
}