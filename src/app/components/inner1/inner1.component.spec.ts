import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inner1Component } from './inner1.component';

describe('Inner1Component', () => {
  let component: Inner1Component;
  let fixture: ComponentFixture<Inner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
