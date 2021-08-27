import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicBuildComponent } from './periodic-build.component';

describe('PeriodicBuildComponent', () => {
  let component: PeriodicBuildComponent;
  let fixture: ComponentFixture<PeriodicBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
