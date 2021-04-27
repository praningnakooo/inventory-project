import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonButtonComponent } from './common-button.component';

describe('CommonButtonComponent', () => {
  let component: CommonButtonComponent;
  let fixture: ComponentFixture<CommonButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
