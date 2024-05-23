import { TestBed } from '@angular/core/testing';

import { TeslaDetailsService } from './tesla-details.service';

describe('CarDetailsService', () => {
  let service: TeslaDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
