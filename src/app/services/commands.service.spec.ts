import { TestBed, inject } from '@angular/core/testing';

import { CommandsService } from './commands.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandsService]
    });
  });

  it('should be created', inject([CommandsService], (service: CommandsService) => {
    expect(service).toBeTruthy();
  }));
});
