import { TestBed } from '@angular/core/testing';

import { BucketserviceService } from './bucketservice.service';

describe('BucketserviceService', () => {
  let service: BucketserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
