import { TestBed, inject } from '@angular/core/testing';

import { GeocodeService } from './geocode.service';

describe('GeocodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodeService]
    });
  });

  it('should be created', inject([GeocodeService], (service: GeocodeService) => {
    expect(service).toBeTruthy();
  }));
});
