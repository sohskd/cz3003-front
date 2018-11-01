import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPMainComponent } from './spmain.component';

describe('SPMainComponent', () => {
  let component: SPMainComponent;
  let fixture: ComponentFixture<SPMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
