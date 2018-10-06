import { TestBed, inject } from '@angular/core/testing';

import { CallCenterServiceService } from './call-center-service.service';

describe('CallCenterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallCenterServiceService]
    });
  });

  it('should be created', inject([CallCenterServiceService], (service: CallCenterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
