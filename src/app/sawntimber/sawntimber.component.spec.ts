import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawntimberComponent } from './sawntimber.component';

describe('SawntimberComponent', () => {
  let component: SawntimberComponent;
  let fixture: ComponentFixture<SawntimberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SawntimberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SawntimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
