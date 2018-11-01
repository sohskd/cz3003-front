import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScdfComponent } from './scdf.component';

describe('ScdfComponent', () => {
  let component: ScdfComponent;
  let fixture: ComponentFixture<ScdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
