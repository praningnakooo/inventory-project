import { TestBed } from '@angular/core/testing';

import { ViewCustomerService } from './view-customer.service';

describe('ViewItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewCustomerService = TestBed.get(ViewCustomerService);
    expect(service).toBeTruthy();
  });
});
