import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifyCustomerComponent } from './modify-customer.component';

describe('ModifyCustomerComponent', () => {
  let component: ModifyCustomerComponent;
  let fixture: ComponentFixture<ModifyCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
