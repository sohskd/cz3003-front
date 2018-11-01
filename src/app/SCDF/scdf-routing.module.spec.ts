import { ScdfRoutingModule } from './scdf-routing.module';

describe('ScdfRoutingModule', () => {
  let scdfRoutingModule: ScdfRoutingModule;

  beforeEach(() => {
    scdfRoutingModule = new ScdfRoutingModule();
  });

  it('should create an instance', () => {
    expect(scdfRoutingModule).toBeTruthy();
  });
});
