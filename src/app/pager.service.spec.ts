import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pager.service';

describe('PaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationService = TestBed.get(PaginationService);
    expect(service).toBeTruthy();
  });
});
