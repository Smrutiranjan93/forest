import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermcondtionComponent } from './termcondtion.component';

describe('TermcondtionComponent', () => {
  let component: TermcondtionComponent;
  let fixture: ComponentFixture<TermcondtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermcondtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermcondtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
