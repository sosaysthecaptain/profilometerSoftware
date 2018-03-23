export interface Command {
  id?:string;
  body:string,
  status:string,
  timeStamp:any;
}

// export interface Command {
//     id?:string;
//     xRel?:number;
//     yRel?:number;
//     zRel?:number;
//     timeStamp:number;
//     read:boolean;
//     executed:boolean;
//     captureImage?:boolean;
//     gpioHigh?: number;
//     gpioLow?: number;
//   }