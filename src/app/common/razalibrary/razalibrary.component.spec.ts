import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazalibraryComponent } from './razalibrary.component';

describe('RazalibraryComponent', () => {
  let component: RazalibraryComponent;
  let fixture: ComponentFixture<RazalibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazalibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazalibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
