import { TestBed, inject } from '@angular/core/testing';

import { SpfService } from './spf.service';

describe('SpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpfService]
    });
  });

  it('should be created', inject([SpfService], (service: SpfService) => {
    expect(service).toBeTruthy();
  }));
});
