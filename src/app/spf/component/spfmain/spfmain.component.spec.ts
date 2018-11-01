import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPFMainComponent } from './spfmain.component';

describe('SPFMainComponent', () => {
  let component: SPFMainComponent;
  let fixture: ComponentFixture<SPFMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPFMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPFMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
