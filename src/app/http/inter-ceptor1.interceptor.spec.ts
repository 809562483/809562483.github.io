import { TestBed } from '@angular/core/testing';

import { InterCeptor1Interceptor } from './inter-ceptor1.interceptor';

describe('InterCeptor1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterCeptor1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterCeptor1Interceptor = TestBed.inject(InterCeptor1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
