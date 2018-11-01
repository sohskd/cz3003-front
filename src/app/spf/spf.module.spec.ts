import { SPFModule } from './spf.module';

describe('SPFModule', () => {
  let sPFModule: SPFModule;

  beforeEach(() => {
    sPFModule = new SPFModule();
  });

  it('should create an instance', () => {
    expect(sPFModule).toBeTruthy();
  });
});
