import { TestBed } from '@angular/core/testing';

import { IntroslideGuard } from './introslide.guard';

describe('IntroslideGuard', () => {
  let guard: IntroslideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroslideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
