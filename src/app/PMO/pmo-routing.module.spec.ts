import { PmoRoutingModule } from './pmo-routing.module';

describe('PmoRoutingModule', () => {
  let pmoRoutingModule: PmoRoutingModule;

  beforeEach(() => {
    pmoRoutingModule = new PmoRoutingModule();
  });

  it('should create an instance', () => {
    expect(pmoRoutingModule).toBeTruthy();
  });
});
