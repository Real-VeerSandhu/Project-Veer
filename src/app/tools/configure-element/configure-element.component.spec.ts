import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureElementComponent } from './configure-element.component';

describe('ConfigureElementComponent', () => {
  let component: ConfigureElementComponent;
  let fixture: ComponentFixture<ConfigureElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
