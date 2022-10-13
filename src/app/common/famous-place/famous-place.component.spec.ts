import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPlaceComponent } from './famous-place.component';

describe('FamousPlaceComponent', () => {
  let component: FamousPlaceComponent;
  let fixture: ComponentFixture<FamousPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
