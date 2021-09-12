import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5Component } from './t5.component';

describe('T5Component', () => {
  let component: T5Component;
  let fixture: ComponentFixture<T5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
