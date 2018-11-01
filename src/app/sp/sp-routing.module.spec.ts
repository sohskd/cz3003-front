import { SPRoutingModule } from './sp-routing.module';

describe('SPRoutingModule', () => {
  let sPRoutingModule: SPRoutingModule;

  beforeEach(() => {
    sPRoutingModule = new SPRoutingModule();
  });

  it('should create an instance', () => {
    expect(sPRoutingModule).toBeTruthy();
  });
});
