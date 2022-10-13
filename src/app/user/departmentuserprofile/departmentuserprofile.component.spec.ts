import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentuserprofileComponent } from './departmentuserprofile.component';

describe('DepartmentuserprofileComponent', () => {
  let component: DepartmentuserprofileComponent;
  let fixture: ComponentFixture<DepartmentuserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentuserprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
