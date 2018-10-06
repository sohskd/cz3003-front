import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterIncidentComponent } from './call-center-incident.component';

describe('CallCenterIncidentComponent', () => {
  let component: CallCenterIncidentComponent;
  let fixture: ComponentFixture<CallCenterIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
