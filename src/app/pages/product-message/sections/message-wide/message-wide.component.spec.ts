import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWideComponent } from './message-wide.component';

describe('MessageWideComponent', () => {
  let component: MessageWideComponent;
  let fixture: ComponentFixture<MessageWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
