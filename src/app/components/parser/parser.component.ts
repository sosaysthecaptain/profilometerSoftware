import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../../services/commands.service';
import { Command } from '../../models/Command';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css'],
  providers: [CommandsService]
})
export class ParserComponent implements OnInit {
  commands: Command[];

  constructor(private commandsService: CommandsService) { }

  ngOnInit() {
    this.commandsService.getCommands().subscribe(commands => {
      this.commands = commands;
    })
  } 


}
