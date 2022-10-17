import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromCmdComponent } from './message-from-cmd.component';

describe('MessageFromCmdComponent', () => {
  let component: MessageFromCmdComponent;
  let fixture: ComponentFixture<MessageFromCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageFromCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFromCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
