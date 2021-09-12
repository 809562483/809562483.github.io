import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmbededComponent } from './create-embeded.component';

describe('CreateEmbededComponent', () => {
  let component: CreateEmbededComponent;
  let fixture: ComponentFixture<CreateEmbededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmbededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmbededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
