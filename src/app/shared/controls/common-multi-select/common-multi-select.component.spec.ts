import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonMultiSelectComponent } from './common-multi-select.component';

describe('CommonMultiSelectComponent', () => {
  let component: CommonMultiSelectComponent;
  let fixture: ComponentFixture<CommonMultiSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
