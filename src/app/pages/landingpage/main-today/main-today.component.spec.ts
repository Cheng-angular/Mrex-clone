import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodayComponent } from './main-today.component';

describe('MainTodayComponent', () => {
  let component: MainTodayComponent;
  let fixture: ComponentFixture<MainTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
