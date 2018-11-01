import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPIncidentComponent } from './spincident.component';

describe('SPIncidentComponent', () => {
  let component: SPIncidentComponent;
  let fixture: ComponentFixture<SPIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
