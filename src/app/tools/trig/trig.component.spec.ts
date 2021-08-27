import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigComponent } from './trig.component';

describe('TrigComponent', () => {
  let component: TrigComponent;
  let fixture: ComponentFixture<TrigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
