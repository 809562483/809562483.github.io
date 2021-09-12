import { TestBed } from '@angular/core/testing';

import { InterCeptor2Interceptor } from './inter-ceptor2.interceptor';

describe('InterCeptor2Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterCeptor2Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterCeptor2Interceptor = TestBed.inject(InterCeptor2Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
