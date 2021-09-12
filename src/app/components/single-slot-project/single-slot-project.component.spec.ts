import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotProjectComponent } from './single-slot-project.component';

describe('SingleSlotProjectComponent', () => {
  let component: SingleSlotProjectComponent;
  let fixture: ComponentFixture<SingleSlotProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSlotProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlotProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
