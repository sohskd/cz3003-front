import { PmoModuleModule } from './pmo-module.module';

describe('PmoModuleModule', () => {
  let pmoModuleModule: PmoModuleModule;

  beforeEach(() => {
    pmoModuleModule = new PmoModuleModule();
  });

  it('should create an instance', () => {
    expect(pmoModuleModule).toBeTruthy();
  });
});
