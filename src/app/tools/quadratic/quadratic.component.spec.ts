import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticComponent } from './quadratic.component';

describe('QuadraticComponent', () => {
  let component: QuadraticComponent;
  let fixture: ComponentFixture<QuadraticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadraticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadraticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
