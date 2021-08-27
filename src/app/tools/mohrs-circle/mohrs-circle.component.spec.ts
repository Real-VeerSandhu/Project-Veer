import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohrsCircleComponent } from './mohrs-circle.component';

describe('MohrsCircleComponent', () => {
  let component: MohrsCircleComponent;
  let fixture: ComponentFixture<MohrsCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohrsCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohrsCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
