import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePubilcHospitalComponent } from './private-pubilc-hospital.component';

describe('PrivatePubilcHospitalComponent', () => {
  let component: PrivatePubilcHospitalComponent;
  let fixture: ComponentFixture<PrivatePubilcHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatePubilcHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePubilcHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
