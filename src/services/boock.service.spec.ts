import { TestBed } from '@angular/core/testing';

import { BoockService } from './boock.service';

describe('BoockService', () => {
  let service: BoockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
