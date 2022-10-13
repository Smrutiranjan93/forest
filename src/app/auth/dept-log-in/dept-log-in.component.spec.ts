import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptLogInComponent } from './dept-log-in.component';

describe('DeptLogInComponent', () => {
  let component: DeptLogInComponent;
  let fixture: ComponentFixture<DeptLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
