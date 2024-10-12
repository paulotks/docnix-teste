import { TestBed } from '@angular/core/testing';

import { CustomerRegistrationDataService } from './customer-registration-data.service';

describe('CustomerRegistrationDataService', () => {
  let service: CustomerRegistrationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRegistrationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
