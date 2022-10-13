import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoutamBudhaParkComponent } from './goutam-budha-park.component';

describe('GoutamBudhaParkComponent', () => {
  let component: GoutamBudhaParkComponent;
  let fixture: ComponentFixture<GoutamBudhaParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoutamBudhaParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoutamBudhaParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
