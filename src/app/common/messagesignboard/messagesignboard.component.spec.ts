import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesignboardComponent } from './messagesignboard.component';

describe('MessagesignboardComponent', () => {
  let component: MessagesignboardComponent;
  let fixture: ComponentFixture<MessagesignboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesignboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesignboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
