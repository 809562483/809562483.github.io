import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherControlChildrenMenthodComponent } from './father-control-children-menthod.component';

describe('FatherControlChildrenMenthodComponent', () => {
  let component: FatherControlChildrenMenthodComponent;
  let fixture: ComponentFixture<FatherControlChildrenMenthodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherControlChildrenMenthodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherControlChildrenMenthodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
