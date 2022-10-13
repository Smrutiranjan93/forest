import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOfDirectoryComponent } from './board-of-directory.component';

describe('BoardOfDirectoryComponent', () => {
  let component: BoardOfDirectoryComponent;
  let fixture: ComponentFixture<BoardOfDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOfDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOfDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
