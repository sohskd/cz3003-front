import { SPModule } from './sp.module';

describe('SPModule', () => {
  let sPModule: SPModule;

  beforeEach(() => {
    sPModule = new SPModule();
  });

  it('should create an instance', () => {
    expect(sPModule).toBeTruthy();
  });
});
