import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedtrafficComponent } from './integratedtraffic.component';

describe('IntegratedtrafficComponent', () => {
  let component: IntegratedtrafficComponent;
  let fixture: ComponentFixture<IntegratedtrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedtrafficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedtrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
