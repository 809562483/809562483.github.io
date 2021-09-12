import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChildrenByViewchildComponent } from './control-children-by-viewchild.component';

describe('ControlChildrenByViewchildComponent', () => {
  let component: ControlChildrenByViewchildComponent;
  let fixture: ComponentFixture<ControlChildrenByViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlChildrenByViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlChildrenByViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
