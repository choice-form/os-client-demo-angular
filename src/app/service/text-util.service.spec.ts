import { TestBed } from '@angular/core/testing';

import { TextUtilService } from './text-util.service';

describe('TextUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextUtilService = TestBed.get(TextUtilService);
    expect(service).toBeTruthy();
  });
});
