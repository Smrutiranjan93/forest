import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderdataComponent } from './calenderdata.component';

describe('CalenderdataComponent', () => {
  let component: CalenderdataComponent;
  let fixture: ComponentFixture<CalenderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
