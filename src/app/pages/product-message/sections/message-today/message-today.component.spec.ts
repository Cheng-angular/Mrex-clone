import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTodayComponent } from './message-today.component';

describe('MessageTodayComponent', () => {
  let component: MessageTodayComponent;
  let fixture: ComponentFixture<MessageTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
