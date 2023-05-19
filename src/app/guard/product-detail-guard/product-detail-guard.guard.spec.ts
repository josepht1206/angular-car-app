import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { productDetailGuardGuard } from './product-detail-guard.guard';

describe('productDetailGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productDetailGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
