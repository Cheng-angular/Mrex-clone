import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeHeroComponent } from './trade-hero.component';

describe('TradeHeroComponent', () => {
  let component: TradeHeroComponent;
  let fixture: ComponentFixture<TradeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
