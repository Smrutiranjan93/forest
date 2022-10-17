import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenduleafComponent } from './kenduleaf.component';

describe('KenduleafComponent', () => {
  let component: KenduleafComponent;
  let fixture: ComponentFixture<KenduleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenduleafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenduleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
