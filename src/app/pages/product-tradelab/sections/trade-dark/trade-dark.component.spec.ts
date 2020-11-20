import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDarkComponent } from './trade-dark.component';

describe('TradeDarkComponent', () => {
  let component: TradeDarkComponent;
  let fixture: ComponentFixture<TradeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
