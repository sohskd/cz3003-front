import { CallCenterRoutingModule } from './call-center-routing.module';

describe('CallCenterRoutingModule', () => {
  let callCenterRoutingModule: CallCenterRoutingModule;

  beforeEach(() => {
    callCenterRoutingModule = new CallCenterRoutingModule();
  });

  it('should create an instance', () => {
    expect(callCenterRoutingModule).toBeTruthy();
  });
});
