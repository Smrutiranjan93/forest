import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalreportComponent } from './statisticalreport.component';

describe('StatisticalreportComponent', () => {
  let component: StatisticalreportComponent;
  let fixture: ComponentFixture<StatisticalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
