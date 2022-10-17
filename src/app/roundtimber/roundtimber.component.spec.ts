import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundtimberComponent } from './roundtimber.component';

describe('RoundtimberComponent', () => {
  let component: RoundtimberComponent;
  let fixture: ComponentFixture<RoundtimberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundtimberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundtimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
