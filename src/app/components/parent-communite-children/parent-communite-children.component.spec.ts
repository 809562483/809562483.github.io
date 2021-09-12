import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommuniteChildrenComponent } from './parent-communite-children.component';

describe('ParentCommuniteChildrenComponent', () => {
  let component: ParentCommuniteChildrenComponent;
  let fixture: ComponentFixture<ParentCommuniteChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCommuniteChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommuniteChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
