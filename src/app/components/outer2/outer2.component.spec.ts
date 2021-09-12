import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outer2Component } from './outer2.component';

describe('Outer2Component', () => {
  let component: Outer2Component;
  let fixture: ComponentFixture<Outer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Outer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Outer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
