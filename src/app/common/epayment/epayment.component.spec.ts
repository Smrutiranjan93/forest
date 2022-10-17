import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentComponent } from './epayment.component';

describe('EpaymentComponent', () => {
  let component: EpaymentComponent;
  let fixture: ComponentFixture<EpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
