import { TestBed, inject } from '@angular/core/testing';

import { GetInvoceDataService } from './get-invoce-data.service';

describe('GetInvoceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetInvoceDataService]
    });
  });

  it('should be created', inject([GetInvoceDataService], (service: GetInvoceDataService) => {
    expect(service).toBeTruthy();
  }));
});
