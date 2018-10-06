import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterMainComponent } from './call-center-main.component';

describe('CallCenterMainComponent', () => {
  let component: CallCenterMainComponent;
  let fixture: ComponentFixture<CallCenterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
