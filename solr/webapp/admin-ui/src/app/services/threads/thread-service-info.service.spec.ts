import { TestBed } from '@angular/core/testing';

import { ThreadServiceInfoService } from './thread-service-info.service';

describe('ThreadServiceInfoService', () => {
  let service: ThreadServiceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadServiceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
