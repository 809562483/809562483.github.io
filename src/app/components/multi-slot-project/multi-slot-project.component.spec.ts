import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotProjectComponent } from './multi-slot-project.component';

describe('MultiSlotProjectComponent', () => {
  let component: MultiSlotProjectComponent;
  let fixture: ComponentFixture<MultiSlotProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSlotProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
