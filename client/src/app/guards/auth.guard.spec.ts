import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard1 } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard1]
    });
  });

  it('should ...', inject([AuthGuard1], (guard: AuthGuard1) => {
    expect(guard).toBeTruthy();
  }));
});
