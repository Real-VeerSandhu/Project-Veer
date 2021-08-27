import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleEquationComponent } from './circle-equation.component';

describe('CircleEquationComponent', () => {
  let component: CircleEquationComponent;
  let fixture: ComponentFixture<CircleEquationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleEquationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
