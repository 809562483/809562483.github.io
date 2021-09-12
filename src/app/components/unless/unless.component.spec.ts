import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlessComponent } from './unless.component';

describe('UnlessComponent', () => {
  let component: UnlessComponent;
  let fixture: ComponentFixture<UnlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
