import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderfileComponent } from './tenderfile.component';

describe('TenderfileComponent', () => {
  let component: TenderfileComponent;
  let fixture: ComponentFixture<TenderfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
