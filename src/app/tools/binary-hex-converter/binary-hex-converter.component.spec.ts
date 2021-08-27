import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryHexConverterComponent } from './binary-hex-converter.component';

describe('BinaryHexConverterComponent', () => {
  let component: BinaryHexConverterComponent;
  let fixture: ComponentFixture<BinaryHexConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryHexConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryHexConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
