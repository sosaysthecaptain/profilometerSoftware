import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imagePath = "../dist/assets/outputImages/calibrationGrid.svg";
  EXPOSURETIME = 1000;
  IMAGETOEXPOSE = "../dist/assets/outputImages/lithoTestPattern1.svg";
  CALIBRATIONIMAGE = "../dist/assets/outputImages/calibrationGrid.svg";
  calibrationGridActive = false;

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

//const electron = require('electron');
//var { ipcRenderer } = require('electron');
//const {app, BrowserWindow, Menu, ipcMain} = electron;

/*Things to set*/
// const EXPOSURETIME = 1000;
// const IMAGETOEXPOSE = "../dist/assets/outputImages/lithoTestPattern1.svg";
// const CALIBRATIONIMAGE = "../dist/assets/outputImages/calibrationGrid.svg";

// var imagePath = "../dist/assets/outputImages/lithoTestPattern1.svg";


// /*detect any keypress event,
// send it to checkKeyPress to see what to do with it*/
// window.addEventListener("keydown", checkKeyPress, false);

// /*When keydown event detected, figure out which key and route accordingly*/
// function checkKeyPress(key) {
//   // console.log("Keydown event detected.");

//   // "C" toggles calibration grid
//   if (key.keyCode == "67") {
//     //displayCalibrationGrid();
//     toggleCalibrationGrid();

//   // space fires exposeImage()
//   } else if (key.keyCode == "32") {
//     exposeImage();
//   }
// }

// /*Exposes image for set time interval
// Note use of anonymous function--could also have done this by calling a
// regular function. Just call it without parens, passing as a var*/
// function exposeImage() {
//   let image = document.getElementById("displayImage");
//   imagePath = IMAGETOEXPOSE;
//   image.style.visibility = "visible";
//   setTimeout(function() {
//     let image = document.getElementById("displayImage");
//     image.style.visibility = "hidden";
//   }, EXPOSURETIME);
// }

// /*On c, toggle display/hide calibration grid*/
// var calibrationGridActive = false
// function toggleCalibrationGrid() {
//   let image = document.getElementById("displayImage");

//   if (!calibrationGridActive) {
//     console.log("calibration grid is inactive. Activating.")
//     imagePath = CALIBRATIONIMAGE;
//     image.style.visibility = "visible";
//     calibrationGridActive = true;
//   } else {
//     image.style.visibility = "hidden";
//     imagePath = IMAGETOEXPOSE;
//     calibrationGridActive = false;
//   }

// }
