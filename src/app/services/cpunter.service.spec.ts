import { TestBed } from '@angular/core/testing';

import { CpunterService } from './cpunter.service';

describe('CpunterService', () => {
  let service: CpunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
