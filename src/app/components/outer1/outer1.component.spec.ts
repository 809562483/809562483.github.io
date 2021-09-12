import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outer1Component } from './outer1.component';

describe('Outer1Component', () => {
  let component: Outer1Component;
  let fixture: ComponentFixture<Outer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Outer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Outer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
