import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSectionComponent } from './shopping-section.component';

describe('ShoppingSectionComponent', () => {
  let component: ShoppingSectionComponent;
  let fixture: ComponentFixture<ShoppingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
