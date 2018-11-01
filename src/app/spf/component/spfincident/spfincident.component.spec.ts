import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPFIncidentComponent } from './spfincident.component';

describe('SPFIncidentComponent', () => {
  let component: SPFIncidentComponent;
  let fixture: ComponentFixture<SPFIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPFIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPFIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
