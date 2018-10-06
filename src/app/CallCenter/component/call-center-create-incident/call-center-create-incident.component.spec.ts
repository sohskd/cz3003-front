import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterCreateIncidentComponent } from './call-center-create-incident.component';

describe('CallCenterCreateIncidentComponent', () => {
  let component: CallCenterCreateIncidentComponent;
  let fixture: ComponentFixture<CallCenterCreateIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterCreateIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterCreateIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
