export interface Command {
    id?:string;
    xRel?:number;
    yRel?:number;
    zRel?:number;
    timeStamp:number;
    read:boolean;
    executed:boolean;
  }