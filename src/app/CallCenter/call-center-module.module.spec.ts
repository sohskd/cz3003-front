import { CallCenterModuleModule } from './call-center-module.module';

describe('CallCenterModuleModule', () => {
  let callCenterModuleModule: CallCenterModuleModule;

  beforeEach(() => {
    callCenterModuleModule = new CallCenterModuleModule();
  });

  it('should create an instance', () => {
    expect(callCenterModuleModule).toBeTruthy();
  });
});
