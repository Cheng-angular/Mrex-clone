import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTodayComponent } from './contact-today.component';

describe('ContactTodayComponent', () => {
  let component: ContactTodayComponent;
  let fixture: ComponentFixture<ContactTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
