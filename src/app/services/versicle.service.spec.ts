import { TestBed } from '@angular/core/testing';

import { VersicleService } from './bible.service';

describe('VersicleService', () => {
  let service: VersicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
