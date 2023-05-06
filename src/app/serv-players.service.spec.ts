import { TestBed } from '@angular/core/testing';

import { ServPlayersService } from './serv-players.service';

describe('ServPlayersService', () => {
  let service: ServPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
