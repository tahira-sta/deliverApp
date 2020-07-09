import { TestBed } from '@angular/core/testing';
import { ApiPopperService } from './api-popper.service';

describe('ApiPopperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPopperService = TestBed.get(ApiPopperService);
    expect(service).toBeTruthy();
  });
});
