import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalHistoryComponent } from './cultural-history.component';

describe('CulturalHistoryComponent', () => {
  let component: CulturalHistoryComponent;
  let fixture: ComponentFixture<CulturalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
