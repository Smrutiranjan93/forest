import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhelplineComponent } from './ehelpline.component';

describe('EhelplineComponent', () => {
  let component: EhelplineComponent;
  let fixture: ComponentFixture<EhelplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhelplineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
