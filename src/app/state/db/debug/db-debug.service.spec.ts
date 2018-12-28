import { TestBed } from '@angular/core/testing';

import { DbDebugService } from './db-debug.service';

describe('DbDebugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbDebugService = TestBed.get(DbDebugService);
    expect(service).toBeTruthy();
  });
});
