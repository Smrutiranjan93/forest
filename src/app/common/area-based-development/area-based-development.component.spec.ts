import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBasedDevelopmentComponent } from './area-based-development.component';

describe('AreaBasedDevelopmentComponent', () => {
  let component: AreaBasedDevelopmentComponent;
  let fixture: ComponentFixture<AreaBasedDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaBasedDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBasedDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
