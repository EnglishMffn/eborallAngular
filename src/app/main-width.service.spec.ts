import { TestBed } from '@angular/core/testing';

import { MainWidthService } from './main-width.service';

describe('MainWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainWidthService = TestBed.get(MainWidthService);
    expect(service).toBeTruthy();
  });
});
