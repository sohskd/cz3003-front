import { ScdfModule } from './scdf.module';

describe('ScdfModule', () => {
  let scdfModule: ScdfModule;

  beforeEach(() => {
    scdfModule = new ScdfModule();
  });

  it('should create an instance', () => {
    expect(scdfModule).toBeTruthy();
  });
});
