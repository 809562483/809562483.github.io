import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFactoryResolverComponent } from './component-factory-resolver.component';

describe('ComponentFactoryResolverComponent', () => {
  let component: ComponentFactoryResolverComponent;
  let fixture: ComponentFixture<ComponentFactoryResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFactoryResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFactoryResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
