import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystatisticsComponent } from './keystatistics.component';

describe('KeystatisticsComponent', () => {
  let component: KeystatisticsComponent;
  let fixture: ComponentFixture<KeystatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeystatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
