import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPComponent } from './sp.component';

describe('SPComponent', () => {
  let component: SPComponent;
  let fixture: ComponentFixture<SPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
