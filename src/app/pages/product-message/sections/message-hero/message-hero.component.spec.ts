import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHeroComponent } from './message-hero.component';

describe('MessageHeroComponent', () => {
  let component: MessageHeroComponent;
  let fixture: ComponentFixture<MessageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
