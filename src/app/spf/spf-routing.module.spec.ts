import { SPFRoutingModule } from './spf-routing.module';

describe('SPFRoutingModule', () => {
  let sPFRoutingModule: SPFRoutingModule;

  beforeEach(() => {
    sPFRoutingModule = new SPFRoutingModule();
  });

  it('should create an instance', () => {
    expect(sPFRoutingModule).toBeTruthy();
  });
});
