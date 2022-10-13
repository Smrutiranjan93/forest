import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictprofileComponent } from './districtprofile.component';

describe('DistrictprofileComponent', () => {
  let component: DistrictprofileComponent;
  let fixture: ComponentFixture<DistrictprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
