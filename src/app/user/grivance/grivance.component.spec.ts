import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrivanceComponent } from './grivance.component';

describe('GrivanceComponent', () => {
  let component: GrivanceComponent;
  let fixture: ComponentFixture<GrivanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrivanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrivanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
