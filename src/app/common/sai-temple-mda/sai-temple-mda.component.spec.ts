import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiTempleMdaComponent } from './sai-temple-mda.component';

describe('SaiTempleMdaComponent', () => {
  let component: SaiTempleMdaComponent;
  let fixture: ComponentFixture<SaiTempleMdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiTempleMdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiTempleMdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
