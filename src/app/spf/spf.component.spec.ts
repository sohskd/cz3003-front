import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPFComponent } from './spf.component';

describe('SPFComponent', () => {
  let component: SPFComponent;
  let fixture: ComponentFixture<SPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
