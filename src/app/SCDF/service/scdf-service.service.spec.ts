import { TestBed, inject } from '@angular/core/testing';

import { ScdfServiceService } from './scdf-service.service';

describe('ScdfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScdfServiceService]
    });
  });

  it('should be created', inject([ScdfServiceService], (service: ScdfServiceService) => {
    expect(service).toBeTruthy();
  }));
});
