import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDarkComponent } from './message-dark.component';

describe('MessageDarkComponent', () => {
  let component: MessageDarkComponent;
  let fixture: ComponentFixture<MessageDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
