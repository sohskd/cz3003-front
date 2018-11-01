import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScdfIncidentComponent } from './scdf-incident.component';

describe('ScdfIncidentComponent', () => {
  let component: ScdfIncidentComponent;
  let fixture: ComponentFixture<ScdfIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScdfIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScdfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
