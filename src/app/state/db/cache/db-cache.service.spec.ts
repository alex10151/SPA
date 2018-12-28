import { TestBed } from '@angular/core/testing';

import { DBCacheService } from './db-cache.service';

describe('DbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBCacheService = TestBed.get(DBCacheService);
    expect(service).toBeTruthy();
  });
});
