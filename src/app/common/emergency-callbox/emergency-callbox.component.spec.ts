import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCallboxComponent } from './emergency-callbox.component';

describe('EmergencyCallboxComponent', () => {
  let component: EmergencyCallboxComponent;
  let fixture: ComponentFixture<EmergencyCallboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyCallboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyCallboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
