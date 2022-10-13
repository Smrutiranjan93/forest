import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcontentComponent } from './healthcontent.component';

describe('HealthcontentComponent', () => {
  let component: HealthcontentComponent;
  let fixture: ComponentFixture<HealthcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
