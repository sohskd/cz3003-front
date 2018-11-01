import { TestBed, inject } from '@angular/core/testing';

import { PmoService } from './pmo.service';

describe('PmoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmoService]
    });
  });

  it('should be created', inject([PmoService], (service: PmoService) => {
    expect(service).toBeTruthy();
  }));
});
