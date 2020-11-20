import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTodayComponent } from './trade-today.component';

describe('TradeTodayComponent', () => {
  let component: TradeTodayComponent;
  let fixture: ComponentFixture<TradeTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
