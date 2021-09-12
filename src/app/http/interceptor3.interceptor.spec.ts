import { TestBed } from '@angular/core/testing';

import { Interceptor3Interceptor } from './interceptor3.interceptor';

describe('Interceptor3Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Interceptor3Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Interceptor3Interceptor = TestBed.inject(Interceptor3Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
