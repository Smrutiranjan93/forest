import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnnErpComponent } from './mnn-erp.component';

describe('MnnErpComponent', () => {
  let component: MnnErpComponent;
  let fixture: ComponentFixture<MnnErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnnErpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnnErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
