import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagewMobileComponent } from './messagew-mobile.component';

describe('MessagewMobileComponent', () => {
  let component: MessagewMobileComponent;
  let fixture: ComponentFixture<MessagewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagewMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
