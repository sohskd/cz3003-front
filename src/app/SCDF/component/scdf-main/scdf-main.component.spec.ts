import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScdfMainComponent } from './scdf-main.component';

describe('ScdfMainComponent', () => {
  let component: ScdfMainComponent;
  let fixture: ComponentFixture<ScdfMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScdfMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScdfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
